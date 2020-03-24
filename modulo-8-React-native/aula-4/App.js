import React from 'react';
import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './src/Home';
import Contato from './src/Contato';
import SobreRotas from './src/SobreRotas';
console.disableYellowBox = true;

const AppNavigator = createBottomTabNavigator({
  Home:{
    screen: Home
  },
  Contato:{
    screen: Contato
  },
  Sobre:{
    screen: SobreRotas
  }
}, {

  initialRouteName: 'Home',

  tabBarOptions:{
    showLabel: false,
    activeTintColor: '#FF0000',
    style:{
      backgroundColor: '#DDD'
    }
  },

  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;

      if(focused && routeName === 'Home'){
        return <Image source={require('./src/img/home_ativo.png')} style={{width: 26, height: 26}} />
      }else if(routeName === 'Home'){
        return <Image source={require('./src/img/home_inativo.png')} style={{width: 26, height: 26}} />
      }

      if(focused && routeName === 'Contato'){
        return <Image source={require('./src/img/contato_ativo.png')} style={{width: 26, height: 26}} />
      }else if(routeName === 'Contato'){
        return <Image source={require('./src/img/contato_inativo.png')} style={{width: 26, height: 26}} />
      }

      if(focused && routeName === 'Sobre'){
        return <Image source={require('./src/img/sobre_ativo.png')} style={{width: 26, height: 26}} />
      }else if(routeName === 'Sobre'){
        return <Image source={require('./src/img/sobre_inativo.png')} style={{width: 26, height: 26}} />
      }

    }
  })


});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;