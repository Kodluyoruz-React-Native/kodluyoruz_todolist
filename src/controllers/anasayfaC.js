import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class anasayfaC {
    cDMount = () => { //AÇILIŞTAN HEMEN SONRA
        setTimeout(() => this.splashAktif = false, 2000);
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        LayoutAnimation.spring();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN NÖCE

    }

    splashAktif = true; //true: splash göster, false: asnasayfa goster
}

decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        splashAktif: observable,
    }
);


export default new anasayfaC();