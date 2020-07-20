import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { View as ViewA } from 'react-native-animatable';

import Resim from '../components/Resim';
import Ikon from '../components/Ikon';
import Arkaplan from '../components/Arkaplan';

import tlfnH from '../helper/tlfnH';

import C from '../controllers/anasayfaC';

import { anasayfaS as S, anasayfaNotS as aNotS } from './stil';

import temaH from '../helper/temaH';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    ustAlan() {
        return (
            <View style={S.ustAlanK}>
                <Text style={S.ustAlanY}>lorem ipsum dolar sit amet</Text>
                <Text style={S.ustAlanY}>lorem ipsum dolar</Text>
                <Text style={S.ustAlanY}>lorem ipsum dolar sit</Text>
            </View>
        );
    }


    notlar() {
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
            <View style={aNotS.notlarK}>
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


    not(d, i) {
        return (
            <ViewA
                key={i}
                animation={'bounceIn'}
                delay={350}
                style={[aNotS.notK, { backgroundColor: temaH.notRenkleri[d.renk] }]}
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
            <View style={[aNotS.notButonlarK, { backgroundColor: temaH.notRenkleri[d.renk] }]}>
                <TouchableOpacity style={aNotS.butonlarAcKapaButon} onPress={() => C.setNotButonlarAcik(i)}>
                    <Ikon
                        is={'AntDesign'} //ikonset
                        i={butonlarAcik ? 'right' : 'left'} //ikon name
                        c={'black'} //color
                        s={tlfnH.W(7)} //size
                    />
                </TouchableOpacity>

                <View style={[aNotS.notButonlarAK, { display: butonlarAcik ? 'flex' : 'none' }]}>
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
            <TouchableOpacity style={aNotS.notButonK}>
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
                    aNotS.notRenkSecK,
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
                    <TouchableOpacity style={[aNotS.notRenk, { backgroundColor: 'blue' }]} />
                    <TouchableOpacity style={[aNotS.notRenk, { backgroundColor: 'red' }]} />
                    <TouchableOpacity style={[aNotS.notRenk, { backgroundColor: 'yellow' }]} />
                    <TouchableOpacity style={[aNotS.notRenk, { backgroundColor: 'pink' }]} />
                    <TouchableOpacity style={[aNotS.notRenk, { backgroundColor: 'blue' }]} />
                    <TouchableOpacity style={[aNotS.notRenk, { backgroundColor: 'red' }]} />
                    <TouchableOpacity style={[aNotS.notRenk, { backgroundColor: 'yellow' }]} />
                </ScrollView>
            </View>
        );
    }


    render() {
        const sa = C.splashAktif;

        return (
            <View style={[S.K, sa && S.K2]}>
                <Arkaplan source={require('../../assets/back2.jpg')} opacity={sa ? 0 : 0.8} />

                {!sa && this.ustAlan()}
                {!sa && this.notlar()}


                <View style={!sa && S.logoK}>
                    <Resim
                        source={require('../../assets/logo/logo.png')}
                        height={tlfnH.W(sa ? 60 : 20)}
                    />
                </View>
            </View>
        );
    }
}

export default observer(Anasayfa);