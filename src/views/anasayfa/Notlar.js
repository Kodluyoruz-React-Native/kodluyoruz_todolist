import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { View as ViewA } from 'react-native-animatable';

import Ikon from '../../components/Ikon';

import tlfnH from '../../helper/tlfnH';

import C from '../../controllers/anasayfa/notlarC';

import { anasayfaNotS as S } from '../stil';

import temaH from '../../helper/temaH';


class Notlar extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;

    not(d, i) {
        return (
            <ViewA
                key={i}
                animation={'bounceIn'}
                delay={350}
                style={[S.notK, { backgroundColor: temaH.notRenkleri[d.renk] }]}
            >

                <Text>{d.aciklama}</Text>

                {this.notButonlar(d, i)}
                {this.notRenkSec(d, i)}
            </ViewA>
        );
    }


    notButonlar(d, i) {
        const butonlarAcik = C.notButonlarAcik === i;

        return (
            <View style={[S.notButonlarK, { backgroundColor: temaH.notRenkleri[d.renk] }]}>
                <TouchableOpacity style={S.butonlarAcKapaButon} onPress={() => C.setNotButonlarAcik(i)}>
                    <Ikon
                        is={'AntDesign'} //ikonset
                        i={butonlarAcik ? 'right' : 'left'} //ikon name
                        c={'black'} //color
                        s={tlfnH.W(7)} //size
                    />
                </TouchableOpacity>

                <View style={[S.notButonlarAK, { display: butonlarAcik ? 'flex' : 'none' }]}>
                    {this.notButon()}
                    {this.notButon()}
                    {this.notButon()}
                    {this.notButon()}
                </View>
            </View>
        );
    }
    notButon() {
        return (
            <TouchableOpacity style={S.notButonK}>
                <Ikon
                    is={'AntDesign'} //ikonset
                    i={'delete'} //ikon name
                    c={temaH.renkler.r2} //color
                    s={tlfnH.W(7)} //size
                />
            </TouchableOpacity>
        );
    }

    notRenkSec(d, i) {
        const butonlarAcik = C.notButonlarAcik === i;

        return (
            <View
                style={[
                    S.notRenkSecK,
                    {
                        width: butonlarAcik ? undefined : 0,
                        marginLeft: butonlarAcik ? undefined : -tlfnH.W(15),
                        backgroundColor: temaH.notRenkleri[d.renk]
                    }
                ]}
            >
                <ScrollView /* KAYDIRILABİLİR VİEW */
                    horizontal //YATAY MOD AKTİF (horizontal={true} true değerler için sadece props ismini yazmak yeterli)
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={[S.notRenk, { backgroundColor: 'blue' }]} />
                    <TouchableOpacity style={[S.notRenk, { backgroundColor: 'red' }]} />
                    <TouchableOpacity style={[S.notRenk, { backgroundColor: 'yellow' }]} />
                    <TouchableOpacity style={[S.notRenk, { backgroundColor: 'pink' }]} />
                    <TouchableOpacity style={[S.notRenk, { backgroundColor: 'blue' }]} />
                    <TouchableOpacity style={[S.notRenk, { backgroundColor: 'red' }]} />
                    <TouchableOpacity style={[S.notRenk, { backgroundColor: 'yellow' }]} />
                </ScrollView>
            </View>
        );
    }


    render() {
        const notlar = [ //SUNUCUDAN GELECEK
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r3'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r2'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r8'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r7'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r5'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r6'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r4'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r1'
            },
        ]

        return (
            <View style={S.notlarK}>
                <ScrollView>
                    <View style={{ height: tlfnH.H(3) }} />

                    {/*
                        BUNLARI BÖYLE TEK TEK Mİ YAZACAĞIZ?
                        ÇARE: FLATLIST, YA DA SCROLLVIEW + ARRAY.MAP(d => <Component />)
                    */}
                    {this.not(notlar[0], 0)}
                    {this.not(notlar[1], 1)}
                    {this.not(notlar[2], 2)}
                    {this.not(notlar[3], 3)}
                    {this.not(notlar[4], 4)}
                    {this.not(notlar[5], 5)}
                    {this.not(notlar[6], 6)}
                    {this.not(notlar[7], 7)}

                    <View style={{ height: tlfnH.H(3) }} />
                </ScrollView>
            </View>
        );
    }
}

export default observer(Notlar);