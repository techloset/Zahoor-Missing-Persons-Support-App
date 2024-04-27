/* eslint-disable curly */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { FormData, User } from '../../types/types';
import auth from '@react-native-firebase/auth';

interface FirestoreState {
  data: FormData[];
  formData: FormData;
  loading: boolean;
  error: string | null;
  user: User | null;
}

const initialState: FirestoreState = {
  data: [],
  user: null,
  formData: {
    id: '',
    name: '',
    gender: '',
    dateOfBirth: new Date(),
    nicknames: '',
    height: '',
    width: '',
    eyeColor: '',
    hairColor: '',
    lengthOfTheHair: '',
    lastSeen: new Date(),
    lastSeenLocation: '',
    imageUrl: '',
    userID: '',
  },
  loading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk(
  'firestore/fetchUserProfile',
  async () => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) throw new Error('No user found');

      const userSnapshot = await firestore()
        .collection('Users')
        .where('email', '==', currentUser.email)
        .get();

      if (userSnapshot.empty)
        throw new Error('User not found in Users collection');

      const userData = userSnapshot.docs[0].data() as User;
      return userData;
    } catch (error) {
      throw error;
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  'firestore/updateUserProfile',
  async (
    {
      displayName,
      selectedImage,
    }: { displayName: string; selectedImage: string },
    thunkAPI,
  ) => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        return thunkAPI.rejectWithValue('No user found');
      }
      const uploadUri = selectedImage.replace('file://', '');
      const storageRef = storage().ref(
        `userImages/${currentUser.uid}/${Date.now()}`,
      );
      await storageRef.putFile(uploadUri);
      const downloadURL = await storageRef.getDownloadURL();

      const userSnapshot = await firestore()
        .collection('Users')
        .where('email', '==', currentUser.email)
        .get();

      if (userSnapshot.empty)
        throw new Error('User not found in Users collection');

      const userDoc = userSnapshot.docs[0];
      const userId = userDoc.id;

      await firestore().collection('Users').doc(userId).update({
        displayName,
        photoURL: downloadURL,
      });

      return { displayName, photoURL: downloadURL };
    } catch (error) {
      return thunkAPI.rejectWithValue('Error updating user profile');
    }
  },
);

export const uploadToFirestore = createAsyncThunk(
  'firestore/uploadToFirestore',
  async (
    { selectedImage, formData }: { selectedImage: string; formData: FormData },
    thunkAPI,
  ) => {
    try {
      const user = auth().currentUser;
      const userData = await firestore().collection('Users').get();

      if (!user) {
        return thunkAPI.rejectWithValue('No user found');
      }
      const userDoc = userData.docs.find(
        doc => doc.data().email === user.email,
      );

      const imageRef = storage().ref('images').child(selectedImage);
      await imageRef.putFile(selectedImage);
      const imageUrl: string = await imageRef.getDownloadURL();
      const updatedFormData = {
        ...formData,
        imageUrl,
        id: Date.now().toString(),
        userID: userDoc?.id,
      };
      await firestore().collection('MissingPerson').add(updatedFormData);
      return updatedFormData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Error uploading image and adding to Firestore',
      );
    }
  },
);

export const fetchMissingPersons = createAsyncThunk(
  'firestore/fetchMissingPersons',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await firestore().collection('MissingPerson').get();
      const newData = querySnapshot.docs.map(documentSnapshot => ({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      }));
      return newData;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching data from Firestore');
    }
  },
);

export const updateMissingPerson = createAsyncThunk(
  'firestore/updateMissingPerson',
  async (
    {
      id,
      reportLocation,
      reportDescription,
      reportedBy,
      reportByEmail,
    }: {
      id: string;
      reportLocation: string;
      reportDescription: string;
      reportedBy: string;
      reportByEmail: string;
    },
    thunkAPI,
  ) => {
    try {
      await firestore().collection('MissingPerson').doc(id).update({
        reportLocation,
        reportDescription,
        reportedBy,
        reportByEmail,
      });
      return { id, reportLocation, reportDescription, reportByEmail };
    } catch (error) {
      return thunkAPI.rejectWithValue('Error updating data in Firestore');
    }
  },
);

const firestoreSlice = createSlice({
  name: 'firestore',
  initialState,
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder.addCase(uploadToFirestore.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadToFirestore.fulfilled, state => {
      state.loading = false;
      state.formData = initialState.formData;
    });
    builder.addCase(uploadToFirestore.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchMissingPersons.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.map((item: { key: any }) => ({
        id: item.key,
        lastSeen: new Date(),
        dateOfBirth: new Date(),
        eyeColor: '',
        gender: '',
        hairColor: '',
        height: '',
        lastSeenLocation: '',
        lengthOfTheHair: '',
        name: '',
        nicknames: '',
        userID: '',
        width: '',
        imageUrl: '',
        reportDescription: '',
        reportLocation: '',
        reportedBy: '',
        ...item,
      }));
    });
    builder.addCase(fetchMissingPersons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(updateMissingPerson.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateMissingPerson.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(data => data.id === action.payload.id);
      state.data[index].reportLocation = action.payload.reportLocation;
      state.data[index].reportDescription = action.payload.reportDescription;
    });
    builder.addCase(updateMissingPerson.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(updateUserProfile.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserProfile.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch user profile';
    });
  },
});

export const { updateFormData } = firestoreSlice.actions;

export default firestoreSlice.reducer;
