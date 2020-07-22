import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';

import Anasayfa from './anasayfa/Anasayfa';

import temaH from '../helper/temaH';

import splashC from '../controllers/splashC';

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
                    backgroundColor={splashC.durum === 3 ? temaH.renkler.r1 : 'transparent'}
                    barStyle={'dark-content'}
                />

                {this.navigasyon()}
            </>
        );
    }
}

export default observer(App);