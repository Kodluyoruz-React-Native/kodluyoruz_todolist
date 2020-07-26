import { observable, action, decorate } from 'mobx';
import { LayoutAnimation, Alert } from 'react-native';
import splashC from './splashC';
import uyelikM from '../models/uyelikM';
import tlfnH from '../helper/tlfnH';
import { splashS } from '../views/stil';
import strgH from '../helper/strgH';

class oturumC {
    cDMount = async () => { }
    cDUpdate = () => {
        //LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { }

    uyeOlButon = () => { splashC.set('durum', splashC.durum === 1 ? 2 : 1); }


    kullaniciGiris = '';
    isim = '';
    sifre = '';
    sifreTekrar = '';


    loading = false;
    OTURUM = async () => {
        this.loading = true;

        await tlfnH.sleep();

        if (splashC.durum === 1) await this.oturumAc();
        else if (splashC.durum === 2) {
            const eslesme = this.sifre === this.sifreTekrar;
            const boyut = this.sifre.length === 8;

            if (!eslesme || !boyut) {
                Alert.alert(
                    'Hata',
                    `Şifrenizi kontrol ediniz.${!eslesme ? ' Girdiğiniz şifreler eşleşmiyor' : ''}${!boyut ? ' Şifreniz 8 karakterli olmalıdır' : ''}`
                );
            }
            else await this.uyeOl();
        }

        this.loading = false;
    }
    uyeOl = async () => {
        const sonuc = await uyelikM.uyeOl();

        if (sonuc.sonuc) { }
        else {
            if (sonuc.hata.code === 'auth/email-already-in-use') Alert.alert('Hata', 'Girdiğiniz bilgilerle kayıtlı bir kullanıcı zaten var!');
            else Alert.alert('Hata', 'Beklenmedik bir hata oluştu. Düzeltilmek üzere loglanmıştır.');
        }
    }
    oturumAc = async () => {
        const sonuc = await uyelikM.oturumAc();

        if (sonuc.sonuc) {
            strgH.kaydetOturumBilgileri(this.kullaniciGiris, this.sifre, 'acik');
            splashC.set('durum', 3);
        }
        else {
            this.sifre = '';
            this.sifreTekrar = '';

            console.log(sonuc);
            if (sonuc.hata.code === 'auth/wrong-password') Alert.alert('Hata', 'Şifrenizi yanlış girdiniz!');
            else if (sonuc.hata.code === 'auth/too-many-requests') Alert.alert('Hata', 'Çok fazla giriş denemesi yaptınız!');
            else Alert.alert('Hata', 'Beklenmedik bir hata oluştu. Düzeltilmek üzere loglanmıştır.');
        }

        return sonuc.sonuc;
    }


    uyelikKapat = () => {
        this.isim = '';
        this.sifre = '';
        this.sifreTekrar = '';

        splashC.set('durum', 1);
    }


    set = (k, v) => this[k] = v;
}

decorate(
    oturumC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        uyeOlButon: action,

        kullaniciGiris: observable,
        isim: observable,
        sifre: observable,
        sifreTekrar: observable,


        loading: observable,
        OTURUM: action,
        oturumAc: action,
        uyeOl: action,

        uyelikKapat: action,

        set: action,
    }
);


export default new oturumC();