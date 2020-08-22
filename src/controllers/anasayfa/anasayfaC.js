import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';
import sid from 'shortid';
import notM from '../../models/notM';
import uyelikM from '../../models/uyelikM';
import fbH from '../../helper/fbH';
import medyaH from '../../helper/medyaH';

class anasayfaC {
    cDMount = async () => { //AÇILIŞTAN HEMEN SONRA
        console.count('anasayfaC_cDMount');
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        console.count('anasayfaC_cDUpdate');
        console.timeEnd('Anasayfa_update');
        LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN NÖCE
    }

    notekleModal = false;

    baslik = '';
    notIcerik = '';
    gorseller = [];


    gorselEkle = d => {
        console.log('test');

        const tmp = this.gorseller;
        tmp.push(d);
        this.gorseller = tmp;
    }


    ekleNot = async () => {
        const notVeri = { baslik: this.baslik, notIcerik: this.notIcerik };
        const notid = sid() + sid();
        const x = await notM.ekleNot(notid, notVeri);
    }


    fotografSec = async () => {
        try {
            const x = await medyaH.fotografSec(this.gorselEkle);
        }
        catch (e) { }
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
        gorseller: observable,
        gorselEkle: action,

        ekleNot: action,

        fotografSec: action,

        set: action,
    }
);


export default new anasayfaC();