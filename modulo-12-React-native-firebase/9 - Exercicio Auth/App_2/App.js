import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/Login';
import Home from './src/Home';

  const Navegador = StackNavigator({
    Login: { screen: Login },
    Home:{ screen: Home }
  });

export default Navegador;



