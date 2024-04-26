import * as ImagePicker from 'react-native-image-picker';

const imagePicker = async (setSelectedImage: (uri: string) => void) => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    mediaType: 'photo',
    quality: 1,
  } as ImagePicker.ImageLibraryOptions;

  try {
    const res = (await new Promise((resolve, reject) => {
      ImagePicker.launchImageLibrary(options, response => {
        if (response.didCancel) {
          reject('User cancelled image picker');
        } else {
          resolve(response);
        }
      });
    })) as ImagePicker.ImagePickerResponse;

    const selectedImgUri = res.assets?.[0]?.uri;
    if (selectedImgUri) {
      setSelectedImage(selectedImgUri);
    }
  } catch (error) {
    console.log('Error in image picker:', error);
  }
};

export default imagePicker;
