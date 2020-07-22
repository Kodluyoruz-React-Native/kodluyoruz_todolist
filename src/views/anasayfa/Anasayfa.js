import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import Arkaplan from '../../components/Arkaplan';

import C from '../../controllers/anasayfa/anasayfaC';
import splashC from '../../controllers/splashC';

import { anasayfaS as S } from '../stil';


import UstBolge from './UstBolge';
import Notlar from './Notlar';
import Splash from '../Splash';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        const durum = splashC.durum;

        return (
            <View style={[S.K, durum && S.K2]}>
                <Arkaplan source={require('../../../assets/back2.jpg')} opacity={durum === 0 ? 0 : 0.8} />

                {
                    durum === 3 &&
                    <>
                        <UstBolge />
                        <Notlar />
                    </>
                }


                <Splash />
            </View>
        );
    }
}

export default observer(Anasayfa);