import { AppRegistry, UIManager } from 'react-native';

import App from './src/views/App';

import { name as appName } from './app.json';
import tlfnH from './src/helper/tlfnH';

if (tlfnH.android) UIManager.setLayoutAnimationEnabledExperimental(true);


AppRegistry.registerComponent(appName, () => App);
