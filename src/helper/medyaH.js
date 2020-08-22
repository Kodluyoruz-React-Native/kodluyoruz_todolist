import { observable, action, decorate } from 'mobx';
import ImagePicker from 'react-native-image-picker';
import tlfnH from './tlfnH';

class medyaH {
    fotografSec = async (gorselEkle) => {
        const options = {
            title: 'Fotoğraf Seç',
            cancelButtonTitle: 'İptal',
            takePhotoButtonTitle: 'Kamerayı Aç',
            chooseFromLibraryButtonTitle: 'Galeriden Seç',
            mediaType: 'photo',
            //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: { skipBackup: true, path: 'images' },
        };

        ImagePicker.showImagePicker(
            options,
            (response) => {
                if (response.didCancel) console.log('User cancelled image picker');
                else if (response.error) console.log('ImagePicker Error: ', response.error);
                else if (response.customButton) console.log('User tapped custom button: ', response.customButton);
                else {
                    const x = { path: response.path, uri: response.uri };

                    gorselEkle({ yol: tlfnH.android ? x.path : x.uri, uri: x.uri, dosyaAdi: response.fileName });
                }
            }
        );
    }
}


decorate(
    medyaH,
    {
        fotografSec: action,
    }
);


export default new medyaH();
