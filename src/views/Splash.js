import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import Resim from '../components/Resim';

import tlfnH from '../helper/tlfnH';

import Oturum from './Oturum';

import C from '../controllers/splashC';
import splashC from '../controllers/splashC';


import { splashS as S } from './stil';


class Splash extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;

    render() {
        const durum = splashC.durum;

        let logoH;

        if (durum === 0) logoH = 60;
        else if (durum === 1) logoH = 35;
        else if (durum === 2) logoH = 35;
        else if (durum === 3) logoH = 20;


        return (
            <View style={[S.K, durum === 3 && S.K2]}>
                <Resim
                    source={require('../../assets/logo/logo.png')}
                    height={tlfnH.W(logoH)}
                />

                {(durum === 1 || durum === 2) && <Oturum />}
            </View>
        );
    }
}

export default observer(Splash);