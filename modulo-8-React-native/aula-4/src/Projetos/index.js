import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Projetos extends Component {
  static navigationOptions = {
   title: 'Meus Projetos'
  };

  render(){
    return(
      <View>
        <Text>Meus projetos feitos..</Text>
      </View>
    );
  }
}

export default Projetos;