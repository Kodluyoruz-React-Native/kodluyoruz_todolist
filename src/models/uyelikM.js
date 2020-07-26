import { action, decorate, observable } from 'mobx';
import fbH from '../helper/fbH';

class uyelikM {
    uid = '';
    isim = '';
    kullaniciGiris = '';


    ekleUye = async (kullaniciGiris, sifre) => {
        try {
            const x = await fbH.ekleUye(kullaniciGiris, sifre);
            this.uid = x.user.uid;

            return { sonuc: true, veri: x };
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }

    oturumAc = async (kullaniciGiris, sifre) => {
        try {
            const x = await fbH.oturumAc(kullaniciGiris, sifre);
            this.uid = x.user.uid;

            const kullaniciBilgi = await fbH.getirKullaniciBilgi(this.uid);
            this.isim = kullaniciBilgi.isim;
            this.kullaniciGiris = kullaniciBilgi.kullaniciGiris;

            return { sonuc: true, veri: kullaniciBilgi };
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }

    guncelleKullaniciBilgi = async veri => {
        //if (typeof this.uid !== 'string' || this.uid.length < 5) return { sonuc: false, hata: 'BOZUK UID' };

        try { return { sonuc: true, veri: await fbH.guncelleKullaniciBilgi(this.uid, veri) }; }
        catch (e) { return { sonuc: false, hata: e }; }
    }
}

decorate(
    uyelikM,
    {
        uid: observable,

        ekleUye: action,
        oturumAc: action,

        guncelleKullaniciBilgi: action,
    }
);


export default new uyelikM();