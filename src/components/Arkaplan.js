import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';


const K = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };
const resim = { width: '100%', height: '100%' };

class Arkaplan extends React.Component {
	render() {

		return (
			<View style={[K, { backgroundColor: this.props.arkaplan }]}>
				<FastImage
					source={this.props.source}
					style={[resim, { opacity: this.props.opacity }]}
					resizeMode={'cover'}
				/>
			</View>
		);
	}
}

export default Arkaplan;
