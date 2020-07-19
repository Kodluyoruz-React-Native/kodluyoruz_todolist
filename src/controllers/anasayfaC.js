import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class anasayfaC {
    cDMount = () => { //AÇILIŞTAN HEMEN SONRA
        setTimeout(() => this.splashAktif = false, 2000);
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN NÖCE

    }

    splashAktif = true; //true: splash göster, false: asnasayfa goster


    notButonlarAcik = -1;
    notButonlarAcKapaYon = false; //false: varsayılan, true: yukarı
    setNotButonlarAcik = i => {
        this.notButonlarAcik = this.notButonlarAcik === i ? -1 : i;
        this.notButonlarAcKapaYon = true;

        setTimeout(() => this.notButonlarAcKapaYon = false, 250);
    }


    set = (k, v) => this[k] = v;
}

decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        splashAktif: observable,

        notButonlarAcik: observable,
        notButonlarAcKapaYon: observable,
        setNotButonlarAcik: action,

        set: action,
    }
);


export default new anasayfaC();