import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class anasayfaC {
    cDMount = async () => { //AÇILIŞTAN HEMEN SONRA
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN NÖCE
    }


    set = (k, v) => this[k] = v;
}


decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        x: action,
        y: action,

        set: action,
    }
);


export default new anasayfaC();