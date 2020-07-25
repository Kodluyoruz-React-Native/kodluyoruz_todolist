import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class anasayfaC {
    cDMount = async () => { //AÇILIŞTAN HEMEN SONRA
        let x;

        /*
        // ----- KULANIM 1 ----- BİTENE KADAR BEKLER
        try {
            x = await this.x(1500); //RESOLVE
        }
        catch (hatamesaji) { //REJECT
            console.log('hatamesaji', hatamesaji);
        }
        //-----------------------
        */


        // ----- KULANIM 2 ----- NEKLEME YOK
        console.log('BEKLEME BAŞLADI');
        await this.Sleep(5000);
        console.log('BEKLEME BİTTİ');

        await this.x(3000)
            .then(resolveNegitirdiBize => {
                x = resolveNegitirdiBize;
            })
            .catch((hatamesaji) => console.log('hatamesaji', hatamesaji))
            .finally(() => console.log('BEN HER TÜRLÜ ÇALIŞIRIM'));
        //-----------------------


        // ----- KULANIM 3 -----
        const sonuc = await this.x(1500); //RESOLVE

        if (sonuc.sonuc) { //try

        }
        else { //catch

        }
        //-----------------------


        this.y();
        console.log('NURETTİN', x);
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN NÖCE
    }

    //mahmut = new Promise(() => { console.log('MERHABA BEN PROMISE'); });

    x = (gecikme) => {
        return (
            new Promise((resolve, reject) => { //bitmesi 2 saniye süren fonksiyon
                setTimeout(() => {
                    console.log('BEN X FONKSİYONUYUM ' + gecikme + ' ms sürdü çalışmam');
                    resolve({ sonuc: true, veri: 'her şey yolunda go go go' });
                    //resolve({ sonuc: false, veri: 'NE OLDU BİLMİYOM AMA BİR ŞEYLER TERS GİTTİ' });

                    //resolve(true);
                    //reject('NE OLDU BİLMİYOM AMA BİR ŞEYLER TERS GİTTİ');
                },
                    gecikme);
            })
        );
    }
    y = () => { //zaman maliyeti olmayan anlık bir fonksiyon
        console.log('BEN Y FONKSİYONUYUM')
    }

    Sleep = (gecikme) => new Promise(resolve => setTimeout(() => resolve(), gecikme));


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