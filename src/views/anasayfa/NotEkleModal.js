import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';

import C from '../../controllers/anasayfa/anasayfaC';
import temaH from '../../helper/temaH';

import { anasayfaS as S } from '../stil';

import Ikon from '../../components/Ikon';
import Resim from '../../components/Resim';
import tlfnH from '../../helper/tlfnH';


class NotEkleModal extends React.Component {
    componentWillUpdate() { console.time('NotEkleModal_update'); }
    componentDidUpdate() { console.timeEnd('NotEkleModal_update'); }

    render() {
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

                            <TouchableOpacity style={S.buton} onPress={C.fotografSec}>
                                <Ikon is={'MaterialCommunityIcons'} i={'camera-plus'} c={temaH.renkler.r2} s={24} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView style={{ borderWidth: 1, margin: '5%' }} horizontal>
                        {C.gorseller.map(d => <Resim source={{ uri: d.uri }} height={tlfnH.W(15)} />)}
                    </ScrollView>

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
}

export default observer(NotEkleModal);

