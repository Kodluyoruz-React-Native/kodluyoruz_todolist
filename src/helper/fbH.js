import { action, decorate } from 'mobx';
import auth from '@react-native-firebase/auth';

class fbH {
    ekleUye = (kullaniciGiris, sifre) => new Promise((olumlu, olumsuz) => {
        auth().createUserWithEmailAndPassword(kullaniciGiris, sifre)
            .then(d => olumlu(d))
            .catch(e => olumsuz(e));
    });

    oturumAc = (kullaniciGiris, sifre) => new Promise((olumlu, olumsuz) => {
        auth().signInWithEmailAndPassword(kullaniciGiris, sifre)
            .then(d => olumlu(d))
            .catch(e => olumsuz(e));
    });
}

decorate(
    fbH,
    {
        ekleUye: action,
        oturumAc: action,
    }
);


export default new fbH();