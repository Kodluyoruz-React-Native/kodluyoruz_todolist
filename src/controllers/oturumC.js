import { observable, action, decorate } from 'mobx';
import splashC from './splashC';
import fbH from '../helper/fbH';
import uyelikM from '../models/uyelikM';

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
        if (splashC.durum === 1) this.oturumAc();
        else if (splashC.durum === 2) this.ekleUye();
    }
    ekleUye = async () => {
        const x = await uyelikM.ekleUye(this.kullaniciGiris, this.sifre);

        if (x.sonuc) { //üye başarıyla eklendi
            console.log(x.veri);
        }
        else { //üye eklenirken hata oldu (x.hata)
            console.log(x.hata)
        }
    }
    oturumAc = async () => { }


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