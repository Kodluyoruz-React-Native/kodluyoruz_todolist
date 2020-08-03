import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import anasayfaC from '../controllers/anasayfa/anasayfaC';

import { footerS as S } from '../views/stil';

import Ikon from './Ikon';
import temaH from '../helper/temaH';

const Footer = () => {
    return (
        <View style={S.K}>
            <View style={S.solK}>
                <TouchableOpacity>
                    <Ikon is={'MaterialCommunityIcons'} i={'react'} c={temaH.renkler.r2} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ikon is={'MaterialCommunityIcons'} i={'cards-heart'} c={temaH.renkler.r2} />
                </TouchableOpacity>
            </View>

            <View style={[S.solK, S.sagK]}>
                <TouchableOpacity>
                    <Ikon is={'MaterialCommunityIcons'} i={'account'} c={temaH.renkler.r2} s={36} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ikon is={'MaterialCommunityIcons'} i={'archive'} c={temaH.renkler.r2} s={30} />
                </TouchableOpacity>
            </View>

            <View style={S.anabutonK}>
                <TouchableOpacity style={S.anabutonAK} onPress={() => anasayfaC.set('notekleModal', true)}>
                    <Ikon is={'MaterialCommunityIcons'} i={'lead-pencil'} s={40} c={temaH.renkler.r2} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Footer;