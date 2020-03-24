import React from 'react';
import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './src/Home';
import Contato from './src/Contato';
import Sobre from './src/Sobre';
import CustomDrawer from './src/components/CustomDrawer';
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

  contentComponent: CustomDrawer,
  initialRouteName: 'Home',
  //drawerPosition: 'left',
  //drawerWidth: 150,
  drawerBackgroundColor: '#222',
  contentOptions:{
    activeTintColor: '#24c2cb',
    activeBackgroundColor: '#FFF',
    inactiveTintColor: '#FFF',

  }

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;