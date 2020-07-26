import { StyleSheet } from 'react-native';
import tlfnH from '../helper/tlfnH';
import temaH from '../helper/temaH';

//K  : container
//AK : subContainer
//B  : button
//BY : buttonText

const W = tlfnH.W;
const H = tlfnH.H;
const R = temaH.renkler;


export const anasayfaS = StyleSheet.create({
	K: {
		flex: 1,
		backgroundColor: 'white'
	},
	K2: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export const splashS = StyleSheet.create({
	K: { //splash ekranı container
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	K2: { //anasayfa için splash ekranı container
		position: 'absolute',
		left: W(2),
		top: H(2)
	},
});

export const anasayfaNotS = StyleSheet.create({
	notlarK: { //tüm notların içinde bulunduğu View
		flex: 1
	},
	notK: { //her bir not için View
		backgroundColor: R.r1,
		marginTop: H(1.2),
		marginBottom: H(1.2),
		padding: W(2),
		paddingBottom: W(9),
	},


	notButonlarK: { //notlardaki açılır butonlar alanı
		flexDirection: 'row',
		position: 'absolute',
		bottom: -10,
		right: 10,
		backgroundColor: R.r1,
		borderRadius: 2,
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: 5,
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: R.r1,
		borderWidth: 2,
		borderBottomWidth: 0,
		borderColor: 'white',
	},
	notButonlarAK: { flexDirection: 'row' },
	butonlarAcKapaButon: {
		alignSelf: 'center',
	},
	notButonK: {
		marginRight: 3,
		marginLeft: 3
	},


	notRenkSecK: {
		borderWidth: 1,
		flexDirection: 'row',
		position: 'absolute',
		bottom: -W(2),
		left: 10,
		maxWidth: W(30),
		backgroundColor: R.r1,
		borderRadius: 2,
		borderWidth: 2,
		borderBottomWidth: 0,
		borderColor: 'white',
		paddingTop: 3,
		paddingBottom: 3

	},
	notRenk: {
		width: W(6),
		height: W(6),
		borderRadius: W(3),
		marginRight: 5,
		marginLeft: 5,
	}
});

export const anasayfaUstBolgeS = StyleSheet.create({
	K: {
		minHeight: W(20) + H(4),
		width: W(100),
		backgroundColor: R.r1,
		paddingLeft: W(25),
		paddingRight: 15,
		justifyContent: 'center',
	},
	ustAlanY: {
		fontWeight: 'bold',
		fontSize: 15,
		color: R.r2,
		textAlign: 'right'
	},
});

export const oturumS = StyleSheet.create({
	K: {
		width: W(100),
		marginTop: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},

	input: {
		width: W(75),
	},
	buton: {
		width: W(65)
	},
	butonKlavyeAcik: {
		width: W(100)
	},
	uyeOlButon: {
		marginTop: '20%',
	},
	uyeOlButonY: {
		textDecorationLine: 'underline'
	}
});