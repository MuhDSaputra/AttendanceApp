<<<<<<< HEAD
import { registerRootComponent } from "expo";

import App from "./App";
// import MainApps from "./MainApp";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(MainApps);
registerRootComponent(App);
=======
import { registerRootComponent } from 'expo';

import MainApps from './App';
// import App from './App';

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);
registerRootComponent(MainApps);
>>>>>>> 8053d70ca478b652d540e46e1b14af6cbe66ce3b
