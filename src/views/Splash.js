import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import Resim from '../components/Resim';

import tlfnH from '../helper/tlfnH';

import C from '../controllers/splashC';
import splashC from '../controllers/splashC';


import { anasayfaS as S } from './stil';


class Splash extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        const sa = splashC.splashAktif;

        return (
            <View style={!sa && S.logoK}>
                <Resim
                    source={require('../../assets/logo/logo.png')}
                    height={tlfnH.W(sa ? 60 : 20)}
                />
            </View>
        );
    }
}

export default observer(Splash);