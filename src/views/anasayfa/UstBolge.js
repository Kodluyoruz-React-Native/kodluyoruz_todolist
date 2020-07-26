import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import C from '../../controllers/anasayfa/ustBolgeC';

import { anasayfaUstBolgeS as S } from '../stil';
import uyelikM from '../../models/uyelikM';


class UstBolge extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        const isim = uyelikM.isim;
        const isimA = isim.split(' ');
        const L = isimA.length;

        return (
            <View style={S.K}>
                <Text style={S.ustAlanY}>Hoşgeldin {isimA[0]} {L > 1 && isimA[L - 1][0]}</Text>
                <Text style={S.ustAlanY}>lorem ipsum dolar</Text>
                <Text style={S.ustAlanY}>lorem ipsum dolar sit</Text>
            </View>
        );
    }
}

export default observer(UstBolge);