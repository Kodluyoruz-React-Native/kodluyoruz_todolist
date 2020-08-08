import React from 'react';
import { View, Text, TouchableOpacity, TextInput, TouchableOpacityBase, Alert } from 'react-native';
import { observer } from 'mobx-react';
import Modal from 'react-native-modal';

import C from '../../controllers/anasayfa/anasayfaC';
import splashC from '../../controllers/splashC';
import temaH from '../../helper/temaH';

import { anasayfaS as S } from '../stil';

import UstBolge from './UstBolge';
import Notlar from './Notlar';
import Splash from '../Splash';

import Arkaplan from '../../components/Arkaplan';
import Ikon from '../../components/Ikon';
import tlfnH from '../../helper/tlfnH';
import { Button } from 'react-native-elements';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    notEkleModal() {
        return (
            <Modal
                backdropOpacity={0.5}
                isVisible={C.notekleModal}
            >
                <View style={[
                    S.notEkleModalK,
                    {
                        flex: tlfnH.klavye.durum ? 1 : undefined,
                        margin: tlfnH.klavye.durum ? -22 : undefined,
                        marginBottom: tlfnH.ios ? tlfnH.klavye.h - tlfnH.sbhi() : undefined,
                        borderRadius: tlfnH.klavye.durum ? 0 : 10,
                    }]}
                >
                    <TouchableOpacity style={S.notEkleModalKapatB} onPress={() => C.set('notekleModal', false)}>
                        <Ikon is={'MaterialCommunityIcons'} i={'close'} c={temaH.renkler.r2} s={24} />
                    </TouchableOpacity>

                    <Text style={S.modalBaslik}>not Oluştur</Text>

                    <TextInput
                        style={S.baslikInput}
                        placeholder={'Başlık'}
                        maxLength={50}
                        value={C.baslik}
                        onChangeText={d => C.set('baslik', d)}
                    />
                    <View style={S.notInputK}>
                        <TextInput
                            style={S.notInput}
                            placeholder={'Notunuz'}
                            multiline
                            value={C.notIcerik}
                            onChangeText={d => C.set('notIcerik', d)}
                        />

                        <View style={S.butonlarK}>
                            <TouchableOpacity style={S.buton}>
                                <Ikon is={'MaterialCommunityIcons'} i={'react'} c={temaH.renkler.r2} s={24} />
                            </TouchableOpacity>

                            <TouchableOpacity style={S.buton}>
                                <Ikon is={'MaterialCommunityIcons'} i={'share-variant'} c={temaH.renkler.r2} s={24} />
                            </TouchableOpacity>

                            <TouchableOpacity style={S.buton}>
                                <Ikon is={'MaterialCommunityIcons'} i={'camera-plus'} c={temaH.renkler.r2} s={24} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button
                        type={'clear'}
                        title={'Oluştur'}
                        titleStyle={{ fontWeight: 'bold' }}
                        containerStyle={{ alignSelf: 'flex-end', marginRight: '2.5%' }}
                        onPress={C.ekleNot}
                    />
                </View>
            </Modal>
        );
    }


    render() {
        const durum = splashC.durum;

        return (
            <View style={[S.K, durum && S.K2]}>
                {
                    durum === 3 &&
                    <>
                        <UstBolge />
                        <Notlar />
                    </>
                }


                <Splash />

                {this.notEkleModal()}
            </View>
        );
    }
}

export default observer(Anasayfa);