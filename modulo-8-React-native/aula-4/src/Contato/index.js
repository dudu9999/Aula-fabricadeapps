import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Contato extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Contato',
    }
  }

  render(){
    return(
      <View>
        <Text>Bem vindo a tela Contato!!</Text>
      </View>
    );
  }
}

export default Contato;