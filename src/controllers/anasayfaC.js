import { observable, action, decorate } from 'mobx';

class anasayfaC {
    cDMount = () => { //AÇILIŞTAN HEMEN SONRA

    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA

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