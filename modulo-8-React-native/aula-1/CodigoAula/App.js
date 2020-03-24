import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Home';
import Contato from './src/Contato';

const AppNavigator = createStackNavigator({
  Home:{
    screen: Home
  },
  Contato:{
    screen: Contato
  }
}, {

  initialRouteName: 'Home',

  defaultNavigationOptions:{
    //headerTintColor: '#FF0000'
    //headerTitle: 'Sujeito'
    headerBackTitle: null
  }

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;