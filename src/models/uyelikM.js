import { action, decorate, observable } from 'mobx';
import fbH from '../helper/fbH';
import { Alert } from 'react-native';

class uyelikM {
    uid = '';
    isim = '';
    kullaniciGiris = '';
    kullaniciAdi = '';


    ekleUye = async (kullaniciGiris, sifre, kullaniciAdi) => {
        try {
            const kaKontrol = await fbH.kaKontrol(kullaniciAdi);
            console.log(kaKontrol);
            if (kaKontrol) {
                Alert.alert('dikkat', 'Girdiğiniz kullanıcı adı başka bir kulanıcı tarafından kullanılmaktadır!');
                return { sonuc: false, hata: '1' };
            }
            else if (kullaniciAdi.indexOf(' ') !== -1) {
                Alert.alert('dikkat', 'Kullanıcı adınızda boşluk olamaz!');
                return { sonuc: false, hata: '2' };
            }
            else if (kullaniciAdi.length < 5) {
                Alert.alert('dikkat', 'En az 6 karakterden oluşan bir kullanıcı adı girmelisiniz!');
                return { sonuc: false, hata: '3' };
            }

            const x = await fbH.ekleUye(kullaniciGiris, sifre);
            const y = await fbH.setKA(kullaniciAdi, x.user.uid);

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
            this.kullaniciAdi = kullaniciBilgi.kullaniciAdi;

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