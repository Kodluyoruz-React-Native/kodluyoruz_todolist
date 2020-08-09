import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import codePush from 'react-native-code-push';

import Resim from '../components/Resim';

import tlfnH from '../helper/tlfnH';

import Oturum from './Oturum';

import C from '../controllers/splashC';


import { splashS as S } from './stil';


class Splash extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;

    guncelle() {
        codePush.sync({ installMode: codePush.InstallMode.IMMEDIATE });
    }

    render() {
        const durum = C.durum;

        let logoH;

        if (durum === 0) logoH = 60;
        else if (durum === 1) logoH = 35;
        else if (durum === 2) logoH = 35;
        else if (durum === 3) logoH = 20;


        return (
            <View
                style={[
                    S.K,
                    durum === 3 && S.K2,
                    (durum === 1 || durum === 2) && tlfnH.klavye.durum && { justifyContent: 'flex-end' }
                ]}
            >
                <TouchableOpacity onPress={() => this.guncelle()}>
                    <Resim
                        source={require('../../assets/logo/logo.png')}
                        height={tlfnH.W(logoH)}
                    />
                </TouchableOpacity>

                {(durum === 1 || durum === 2) && <Oturum />}
            </View>
        );
    }
}

export default observer(Splash);