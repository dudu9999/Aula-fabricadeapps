import React from 'react';
import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './src/Home';
import Contato from './src/Contato';
import Sobre from './src/Sobre';
console.disableYellowBox = true;

const AppNavigator = createDrawerNavigator({
  Home:{
    screen: Home
  },
  Contato:{
    screen: Contato
  },
  Sobre:{
    screen: Sobre
  }
}, {

  initialRouteName: 'Home',

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;