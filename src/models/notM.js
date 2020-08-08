import { action, decorate, observable } from 'mobx';
import fbH from '../helper/fbH';
import sid from 'shortid';

import uyelikM from './uyelikM';

class notM {
    notlar = null;

    ekleNot = async (notid, notVeri) => {
        try {
            const x = await fbH.ekleNot(notid, notVeri);
            const e = await fbH.eslestirNotUid(notid, uyelikM.uid, sid() + sid());

            return x;
        }
        catch (e) { console.log(e) }
    }

    getirNotlar = async uid => {
        try {
            const x = await fbH.getirNotlar(uid);

            const notidArray = Object.values(x || []); //json un içindeki value değerlerini bir diziye ata
            const notlar = [];

            //for (let i = 0; i < notidArray.length; i++) notlar.push(await notM.getirNot(notidArray[i].notid));
            for (let i = 0; i < notidArray.length; i++) {
                const not = await this.getirNot(notidArray[i].notid);
                notlar.push(not);
            }
            console.log(notlar);
            this.notlar = notlar;
            return notlar;
        }
        catch (e) { console.log(e) }
    }

    getirNot = async notid => {
        try {
            const x = await fbH.getirNot(notid);
            return x;
        }
        catch (e) { console.log(e) }
    }
}

decorate(
    notM,
    {
        notlar: observable,
        ekleNot: action,
        getirNotlar: action,
        getirNot: action
    }
);


export default new notM();