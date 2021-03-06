import { action, decorate } from 'mobx';

import auth_ from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const auth = auth_();
const db = database();

class fbH {
    ekleUye = (email, sifre) => new Promise((olumlu, olumsuz) => {
        auth.createUserWithEmailAndPassword(email, sifre)
            .then(d => olumlu(d))
            .catch(e => olumsuz(e));
    });

    oturumAc = (email, sifre) => new Promise((olumlu, olumsuz) => {
        auth.signInWithEmailAndPassword(email, sifre)
            .then(d => olumlu(d))
            .catch(e => olumsuz(e));
    });

    kaKontrol = kullaniciAdi => new Promise((olumlu, olumsuz) => {
        db.ref(`/KULLANICIADI-USERID/${kullaniciAdi}`)
            .once('value')
            .then(d => olumlu(d.val()))
            .catch(e => olumsuz(e));
    });
    setKA = (kullaniciAdi, uid) => new Promise((olumlu, olumsuz) => {
        db.ref(`/KULLANICIADI-USERID/${kullaniciAdi}`)
            .set(uid)
            .then(() => olumlu(true))
            .catch(e => olumsuz(e));
    });



    ekleNot = (notid, notVeri) => new Promise((olumlu, olumsuz) => {
        db.ref(`/NOTLAR/${notid}`)
            .set(notVeri)
            .then(() => olumlu(true))
            .catch(e => olumsuz(e));
    });
    eslestirNotUid = (notid, uid, id) => new Promise((olumlu, olumsuz) => {
        db.ref(`/NOT-UID/${id}`)
            .set({ notid, uid })
            .then(() => olumlu(true))
            .catch(e => olumsuz(e));
    });
    getirNotlar = uid => new Promise((olumlu, olumsuz) => { //kullanıcının notid lerini getir
        db.ref(`/NOT-UID/`)
            .orderByChild('uid') //uid e göre sırala
            .equalTo(uid) //verideki uid verilen uid ile eşleşiyorsa getir
            .once('value')
            .then(d => olumlu(d.val()))
            .catch(e => olumsuz(e));
    });
    getirNot = notid => new Promise((olumlu, olumsuz) => { //kullanıcının notid lerini getir
        db.ref(`/NOTLAR/${notid}`)
            .once('value')
            .then(d => olumlu(d.val()))
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

        kaKontrol: action,
        setKA: action,

        ekleNot: action,
        eslestirNotUid: action,
        getirNotlar: action,
        getirNot: action,

        guncelleKullaniciBilgi: action,
        getirKullaniciBilgi: action,
    }
);


export default new fbH();