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
        const sa = splashC.splashAktif;

        return (
            <View style={[S.K, sa && S.K2]}>
                <Arkaplan source={require('../../../assets/back2.jpg')} opacity={sa ? 0 : 0.8} />

                {
                    !sa &&
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