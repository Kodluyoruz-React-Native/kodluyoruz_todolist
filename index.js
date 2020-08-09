import { AppRegistry, UIManager } from 'react-native';
import 'react-native-console-time-polyfill';

import App from './src/views/App';
//import App from './ClassBase';
//import App from './FuncBase';

import { name as appName } from './app.json';
import tlfnH from './src/helper/tlfnH';

if (tlfnH.android) UIManager.setLayoutAnimationEnabledExperimental(true);


AppRegistry.registerComponent(appName, () => App);
