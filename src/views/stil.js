import { StyleSheet } from 'react-native';
import tlfnH from '../helper/tlfnH';

//K  : container
//AK : subContainer
//B  : button
//BY : buttonText



export const anasayfaS = StyleSheet.create({
    K: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
    },
    K2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoK: {
        borderWidth: 1,
        position: 'absolute',
        left: tlfnH.W(2),
        top: tlfnH.H(2)
    },

    ustAlanK: {
        height: 200,
        width: tlfnH.w,
        borderWidth: 1,
        borderColor: 'blue'
    }
});