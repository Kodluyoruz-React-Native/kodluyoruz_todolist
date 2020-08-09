import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import Store from './Store';
import { observer, useObserver } from 'mobx-react';

const deneme = (x) => {
    return (<Text>{x}</Text>);
}

const x = () => (
    <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ width: '100%', borderWidth: 1 }}>
            {Store.metin}
        </Text>

        {deneme(Store.metin)}

        <TextInput
            style={{ width: '100%', borderWidth: 1, marginTop: 10 }}
            value={Store.metin}
            onChangeText={d => Store.setMetin(d)}
        />
    </View>
)

const FuncBase = () => {
    const [metin, setMetin] = useState('asd');
    const [veri2, setVeri2] = useState();

    useEffect(() => { console.log('componentdidMount'); }, []); //componentdidMount
    useEffect(() => { console.log('componentDidUpdate'); }); //componentDidUpdate

    return useObserver(x);
}

export default FuncBase;
//export default observer(FuncBase);