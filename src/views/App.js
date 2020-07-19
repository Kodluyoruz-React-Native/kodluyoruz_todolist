import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Anasayfa from './Anasayfa';
import temaH from '../helper/temaH';
import anasayfaC from '../controllers/anasayfaC';
import { observer } from 'mobx-react';

const Stack = createStackNavigator();

class App extends React.Component {
    navigasyon() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={'Anasayfa'} component={Anasayfa} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    render() {
        return (
            <>
                <StatusBar
                    backgroundColor={anasayfaC.splashAktif ? 'transparent' : temaH.renkler.r1}
                    barStyle={'dark-content'}
                />

                {this.navigasyon()}
            </>
        );
    }
}

export default observer(App);