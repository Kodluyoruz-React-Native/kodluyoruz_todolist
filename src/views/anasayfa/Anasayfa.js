import React from 'react';

import { View } from 'react-native';
import { observer } from 'mobx-react';

import C from '../../controllers/anasayfa/anasayfaC';
import splashC from '../../controllers/splashC';

import { anasayfaS as S } from '../stil';

import UstBolge from './UstBolge';
import Notlar from './Notlar';
import Splash from '../Splash';
import NotEkleModal from './NotEkleModal';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentWillUpdate() { console.time('Anasayfa_update'); }
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;

    render() {
        const durum = splashC.durum;

        return (
            <View style={[S.K, durum && S.K2]}>
                {
                    durum === 3 &&
                    <>
                        <UstBolge />
                        <Notlar />
                    </>
                }


                <Splash />

                {<NotEkleModal />}
            </View>
        );
    }
}

export default observer(Anasayfa);

