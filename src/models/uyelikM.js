import { action, decorate, observable } from 'mobx';
import fbH from '../helper/fbH';

class uyelikM {
    uid = '';

    ekleUye = async (kullaniciGiris, sifre) => {
        try {
            const x = await fbH.ekleUye(kullaniciGiris, sifre);
            this.uid = x.user.uid;

            return { sonuc: true, veri: x };
        }
        catch (e) {
            return { sonuc: false, hata: e };
        }
    }

    oturumAc = async () => {

    }
}

decorate(
    uyelikM,
    {
        uid: observable,

        ekleUye: action,
        oturumAc: action,
    }
);


export default new uyelikM();