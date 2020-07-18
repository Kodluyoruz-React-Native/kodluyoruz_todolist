import React from 'react';
import { View, Text } from 'react-native';

import Resim from '../components/Resim';
import tlfnH from '../helper/tlfnH';

import C from '../controllers/anasayfaC';


import { anasayfaS as S } from './stil';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        return (
            <View style={S.K}>
                <Resim
                    source={require('../../assets/logo/logo.png')}
                    height={tlfnH.W(60)}
                />
            </View>
        );
    }
}

export default Anasayfa;