import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class splashC {
    cDMount = () => {
        setTimeout(() => this.splashAktif = false, 2000);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }

    splashAktif = true; //true: splash göster, false: asnasayfa goster


    set = (k, v) => this[k] = v;
}

decorate(
    splashC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        splashAktif: observable,

        set: action,
    }
);


export default new splashC();