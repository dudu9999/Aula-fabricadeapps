import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Sobre extends Component {
  static navigationOptions = {
    title: 'Sobre',
  };

  render(){
    return(
      <View>
        <Text>Tela Sobre!!</Text>
        <Button 
        title="Voltar"
        onPress={()=> this.props.navigation.goBack()}
        />

        <Button 
        title="Inicio"
        onPress={()=> this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

export default Sobre;