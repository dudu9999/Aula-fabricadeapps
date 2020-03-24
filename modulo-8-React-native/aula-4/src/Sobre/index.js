import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Sobre extends Component {
  static navigationOptions = {
   header:null,
  };

  render(){
    return(
      <View>
        <Text>Tela Sobre!!</Text>
        <Button
        title="Projetos"
        onPress={()=> this.props.navigation.navigate('Projetos')}
        />
      </View>
    );
  }
}

export default Sobre;