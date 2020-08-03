import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
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


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    notEkleModal() {
        return (
            <Modal
                animationIn={'zoomIn'}
                animationOut={'zoomOut'}
                backdropOpacity={0.5}
                isVisible={false}
            >
                <View style={S.notEkleModalK}>
                    <Text style={S.modalBaslik}>not Oluştur</Text>

                    <TextInput
                        style={S.baslikInput}
                        placeholder={'Başlık'}
                        maxLength={50}
                    />
                    <View style={S.notInputK}>
                        <TextInput
                            style={S.notInput}
                            placeholder={'Notunuz'}
                            multiline
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
                </View>
            </Modal>
        );
    }


    render() {
        const durum = splashC.durum;

        return (
            <View style={[S.K, durum && S.K2]}>
                <Arkaplan source={require('../../../assets/back2.jpg')} opacity={durum === 0 ? 0 : 0.8} />

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