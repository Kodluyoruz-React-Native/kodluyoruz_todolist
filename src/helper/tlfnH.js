import { observable, action, decorate } from 'mobx';
import { Dimensions } from 'react-native';

class tlfnH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    //W(d) { return this.w * d / 100;  }
    W = d => this.w * d / 100;
    H = d => this.h * d / 100;
}

decorate(
    tlfnH,
    {
        w: observable,
        h: observable,

        W: action,
        H: action
    }
);


export default new tlfnH();