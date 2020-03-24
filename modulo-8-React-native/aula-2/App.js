import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Home';
import Contato from './src/Contato';
import Sobre from './src/Sobre';

const AppNavigator = createStackNavigator({
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

  defaultNavigationOptions:{
    //headerTitle: 'Sujeito',
    headerTintColor: '#FFFFFF',
    headerStyle:{
      backgroundColor: '#222222'
    },
    headerBackTitle: null,

  }

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;