import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';
import sid from 'shortid';
import notM from '../../models/notM';
import uyelikM from '../../models/uyelikM';
import fbH from '../../helper/fbH';

class anasayfaC {
    cDMount = async () => { //AÇILIŞTAN HEMEN SONRA
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN NÖCE
    }

    notekleModal = false;

    baslik = '';
    notIcerik = '';

    ekleNot = async () => {
        const notVeri = { baslik: this.baslik, notIcerik: this.notIcerik };
        const notid = sid() + sid();
        const x = await notM.ekleNot(notid, notVeri);
    }

    set = (k, v) => this[k] = v;
}


decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        notekleModal: observable,

        baslik: observable,
        notIcerik: observable,

        ekleNot: action,

        set: action,
    }
);


export default new anasayfaC();