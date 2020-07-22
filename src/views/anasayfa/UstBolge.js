import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import C from '../../controllers/anasayfa/ustBolgeC';

import { anasayfaUstBolgeS as S } from '../stil';


class UstBolge extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        return (
            <View style={S.K}>
                <Text style={S.ustAlanY}>lorem ipsum dolar sit amet</Text>
                <Text style={S.ustAlanY}>lorem ipsum dolar</Text>
                <Text style={S.ustAlanY}>lorem ipsum dolar sit</Text>
            </View>
        );
    }
}

export default observer(UstBolge);