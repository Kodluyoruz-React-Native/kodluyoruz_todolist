import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Store from './Store';
import { observer } from 'mobx-react';

class ClassBase extends React.Component {
    state = { inputValue: 'asd' };

    componentDidMount() { console.log('componentDidMount'); }
    componentDidUpdate() { console.log('componentDidUpdate'); }
    componen

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <Text style={{ width: '100%', borderWidth: 1 }}>
                    {this.state.inputValue}
                </Text>

                <TextInput
                    style={{
                        width: '100%', borderWidth: 1, marginTop: 10
                    }}
                    value={this.state.inputValue}
                    onChangeText={d => {
                        this.setState({ inputValue: d })
                    }}
                />
            </View>
        );
    }
}
export default observer(ClassBase);