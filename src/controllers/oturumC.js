import { observable, action, decorate } from 'mobx';
import splashC from './splashC';
import fbH from '../helper/fbH';
import uyelikM from '../models/uyelikM';
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
        if (splashC.durum === 1) await this.oturumAc();
        else if (splashC.durum === 2) await this.ekleUye();
        this.loading = false;
    }
    ekleUye = async () => {
        const x = await uyelikM.ekleUye(this.kullaniciGiris, this.sifre);

        if (x.sonuc) { //üye başarıyla eklendi
            const veri = {
                isim: this.isim,
                sifre: this.sifre,
                kullaniciGiris: this.kullaniciGiris
            };

            const y = await uyelikM.guncelleKullaniciBilgi(veri);

            splashC.set('durum', 1); //oturum aç sayfasını aktif et
        }
        else { //üye eklenirken hata oldu (x.hata)
            console.log(x.hata)
        }
    }
    oturumAc = async () => {
        const x = await uyelikM.oturumAc(this.kullaniciGiris, this.sifre);

        if (x.sonuc) {
            strgH.kaydetOturumBilgileri(this.kullaniciGiris, this.sifre, 'acik');
            splashC.set('durum', 3); //oturum açınca anasayfaya git
        }
        else {
            console.log(x.hata)
        }
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
        ekleUye: action,

        uyelikKapat: action,

        set: action,
    }
);


export default new oturumC();