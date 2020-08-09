import { decorate, observable, action } from 'mobx';

class Store {
    metin = '';

    setMetin = d => this.metin = d;
}

decorate(
    Store,
    {
        metin: observable,
        setMetin: action
    }
);

export default new Store();