import { action, decorate } from 'mobx';
import fbH from '../helper/fbH';

class uyelikM {
    ekleUye = async (kullaniciGiris, sifre) => {
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