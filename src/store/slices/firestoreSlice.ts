import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { FormData } from '../../types/types';
import auth from '@react-native-firebase/auth';

interface FirestoreState {
  data: FormData[];
  formData: FormData;
  loading: boolean;
  error: string | null;
}

const initialState: FirestoreState = {
  data: [],
  formData: {
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

export const uploadToFirestore = createAsyncThunk(
  'firestore/uploadToFirestore',
  async (
    { selectedImage, formData }: { selectedImage: string; formData: FormData },
    thunkAPI,
  ) => {
    try {
      const user = auth().currentUser;
      const imageRef = storage().ref('images').child(selectedImage);
      await imageRef.putFile(selectedImage);
      const imageUrl: string = await imageRef.getDownloadURL();
      const updatedFormData = { ...formData, imageUrl, userID: user?.uid };
      await firestore().collection('MissingPerson').add(updatedFormData);
      return updatedFormData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Error uploading image and adding to Firestore',
      );
    }
  },
);

// Thunk action to fetch data from Firestore
export const fetchMissingPersons = createAsyncThunk(
  'firestore/fetchMissingPersons',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await firestore().collection('MissingPerson').get();
      const newData: FormData[] = querySnapshot.docs.map(documentSnapshot => ({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      }));
      return newData;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching data from Firestore');
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
    builder.addCase(fetchMissingPersons.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMissingPersons.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMissingPersons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { updateFormData } = firestoreSlice.actions;

export default firestoreSlice.reducer;
