import { observable, action, decorate } from 'mobx';
import { LayoutAnimation, Keyboard } from 'react-native';
import tlfnH from '../helper/tlfnH';
import strgH from '../helper/strgH';
import oturumC from './oturumC';

class splashC {
    cDMount = async () => {
        Keyboard.addListener('keyboardDidShow', tlfnH.klavyeAcildi);
        Keyboard.addListener('keyboardDidHide', tlfnH.klavyeKapandi);

        const x = await strgH.getirOturumBilgileri();
        if (x && x.oturumDurumu === 'acik') {
            oturumC.set('kullaniciGiris', x.kullaniciGiris);
            oturumC.set('sifre', x.sifre);
            await oturumC.oturumAc();
        }
        else setTimeout(() => this.durum = 1, 1000);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }


    durum = 0; //0: splash, 1: oturumaç, 2: üyeol, 3:anasayfa


    set = (k, v) => this[k] = v;
}

decorate(
    splashC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        durum: observable,

        set: action,
    }
);


export default new splashC();