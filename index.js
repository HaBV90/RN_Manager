/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Remote debugger']);
console.ignoreWarnings = ['Remote debugger'];

AppRegistry.registerComponent(appName, () => App);
