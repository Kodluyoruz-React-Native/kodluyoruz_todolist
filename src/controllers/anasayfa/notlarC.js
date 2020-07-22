import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class notlarC {
    cDMount = () => { }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }



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
    notlarC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        notButonlarAcik: observable,
        notButonlarAcKapaYon: observable,
        setNotButonlarAcik: action,


        set: action,
    }
);


export default new notlarC();