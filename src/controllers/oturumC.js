import { observable, action, decorate } from 'mobx';
import splashC from './splashC';

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
    OTURUM = async () => { }
    uyeOl = async () => { }
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
        uyeOl: action,

        uyelikKapat: action,

        set: action,
    }
);


export default new oturumC();