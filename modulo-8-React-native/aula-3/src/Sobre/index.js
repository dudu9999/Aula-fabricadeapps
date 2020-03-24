import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Sobre extends Component {
  static navigationOptions = {
    tabBarLabel: 'Sobre',
  };

  render(){
    return(
      <View>
        <Text>Tela Sobre!!</Text>
      </View>
    );
  }
}

export default Sobre;