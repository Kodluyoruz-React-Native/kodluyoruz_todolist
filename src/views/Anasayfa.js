import React from 'react';
import { View, Text } from 'react-native';

import Resim from '../components/Resim';
import tlfnH from '../helper/tlfnH';


class Anasayfa extends React.Component {
    render() {
        return (
            <View>
                <Resim
                    source={require('../../assets/logo/logo.png')}
                    height={tlfnH.W(60)}
                />
            </View>
        );
    }
}

export default Anasayfa;