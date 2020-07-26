import { action, decorate } from 'mobx';

import auth_ from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const auth = auth_();
const db = database();

class fbH {
    ekleUye = (kullaniciGiris, sifre) => new Promise((olumlu, olumsuz) => {
        auth.createUserWithEmailAndPassword(kullaniciGiris, sifre)
            .then(d => olumlu(d))
            .catch(e => olumsuz(e));
    });

    oturumAc = (kullaniciGiris, sifre) => new Promise((olumlu, olumsuz) => {
        auth.signInWithEmailAndPassword(kullaniciGiris, sifre)
            .then(d => olumlu(d))
            .catch(e => olumsuz(e));
    });



    guncelleKullaniciBilgi = (uid, veri) => new Promise((olumlu, olumsuz) => {
        db.ref(`/KULLANICILAR/${uid || 'HATA'}`) //KAYDEDİLECEK YOL
            .set(veri) //KAYDEDİLECEK VERİ
            .then(() => olumlu(true)) //KAYDEDEBİLİRSE
            .catch(e => olumsuz(e)); //KAYDEDEMEZSE
    });


    getirKullaniciBilgi = uid => new Promise((olumlu, olumsuz) => {
        db.ref(`/KULLANICILAR/${uid}`) //GETİRİLECEK VERİ
            .once('value')
            .then(d => olumlu(d.val())) //GETİREBİLİRSE
            .catch(e => olumsuz(e)); //GETİREMEZSE
    });
}

decorate(
    fbH,
    {
        ekleUye: action,
        oturumAc: action,

        guncelleKullaniciBilgi: action,
        getirKullaniciBilgi: action,
    }
);


export default new fbH();