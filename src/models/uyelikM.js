import { action, decorate } from 'mobx';
import fbH from '../helper/fbH';
import oturumC from '../controllers/oturumC';

class uyelikM {
    ekleUye = async () => {
        const kullaniciGiris = oturumC.kullaniciGiris;
        const sifre = oturumC.sifre;

        try {
            const x = await fbH.ekleUye(kullaniciGiris, sifre);
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
        ekleUye: action,
        oturumAc: action,
    }
);


export default new uyelikM();