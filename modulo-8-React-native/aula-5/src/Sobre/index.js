import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

class Sobre extends Component {
  static navigationOptions = {
    drawerLabel: 'Sobre',
    drawerIcon: ({tintColor}) => (
      <Image
      source={require('../img/sobre_ativo.png')}
      style={[ {width: 30, height: 30}, {tintColor: tintColor} ]}
      />
    )
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