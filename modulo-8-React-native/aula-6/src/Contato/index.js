import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

class Contato extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Image
      source={require('../img/contato_ativo.png')}
      style={[ {width: 30, height: 30}, {tintColor: tintColor} ]}
      />
    )
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