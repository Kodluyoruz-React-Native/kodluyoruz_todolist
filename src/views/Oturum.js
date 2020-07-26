import React from 'react';
import { View, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { Input, Button } from 'react-native-elements';

import C from '../controllers/oturumC';
import splashC from '../controllers/splashC';

import { oturumS as S } from './stil';
import Ikon from '../components/Ikon';
import tlfnH from '../helper/tlfnH';

class Oturum extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;

    render() {
        const durum = splashC.durum;

        const inputProps = {
            leftIcon: <Ikon is={'MaterialCommunityIcons'} i={'form-textbox-password'} c={'black'} />,
            secureTextEntry: true,
            keyboardType: 'number-pad',
            containerStyle: S.input,
            contextMenuHidden: true,
            maxLength: 8,
        };

        return (
            <View style={S.K}>
                <ScrollView>
                    <Input
                        placeholder={'Kullanıcı adı veya E-Posta'}
                        leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'account'} c={'black'} />}
                        containerStyle={S.input}
                        value={C.kullaniciGiris}
                        keyboardType={'email-address'}
                        onChangeText={d => C.set('kullaniciGiris', d)}
                        maxLength={60}
                    />

                    {
                        durum === 2 &&
                        <Input
                            placeholder={'Adınız soyadınız'}
                            leftIcon={
                                <Ikon is={'MaterialCommunityIcons'} i={'account'} c={'black'} />
                            }
                            containerStyle={S.input}
                            value={C.isim}
                            onChangeText={d => C.set('isim', d)}
                            maxLength={50}
                        />
                    }

                    <Input
                        {...inputProps}
                        placeholder={'Şifre'}
                        value={C.sifre}
                        onChangeText={d => C.set('sifre', d)}
                    />

                    {
                        durum === 2 &&
                        <Input
                            {...inputProps}
                            placeholder={'Şifre tekrar'}
                            value={C.sifreTekrar}
                            onChangeText={d => C.set('sifreTekrar', d)}
                        />
                    }
                </ScrollView>


                <Button
                    type={'solid'}
                    raised
                    //icon={}
                    title={durum === 1 ? 'Oturum Aç' : 'Üye Ol'}
                    containerStyle={[S.buton, tlfnH.klavye.durum && S.butonKlavyeAcik]}
                    onPress={C.OTURUM}
                    loading={C.loading}
                />


                {
                    !tlfnH.klavye.durum &&
                    <Button
                        type={'clear'}
                        //raised
                        //icon={}
                        title={durum === 2 ? 'Oturum Aç' : 'Üye Olmak için dokunun'}
                        containerStyle={[S.uyeOlButon]}
                        titleStyle={S.uyeOlButonY}
                        onPress={C.uyeOlButon}
                    />
                }
            </View>
        );
    }
}

export default observer(Oturum);