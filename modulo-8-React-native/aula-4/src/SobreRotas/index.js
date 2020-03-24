import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Sobre from '../Sobre';
import Projetos from '../Projetos';

const SobreNavigator = createStackNavigator({
  Sobre:{
    screen: Sobre
  },
  Projetos: {
    screen: Projetos
  }
});

export default SobreNavigator;