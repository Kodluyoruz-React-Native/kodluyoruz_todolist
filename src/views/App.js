import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Anasayfa from './Anasayfa';

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
                {this.navigasyon()}
            </>
        );
    }
}

export default App;