import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Contato extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('nome', 'Contatos')
    }
  }

  render(){
    const {nome, idade} = this.props.navigation.state.params;
    return(
      <View>
        <Text>Bem vindo a tela Contato!!</Text>
        <Button 
        title="Voltar"
        onPress={()=> this.props.navigation.goBack() }
        />
        <Button 
        title="Sobre"
        onPress={()=> this.props.navigation.navigate('Sobre') }
        />

        <Text>
          Nome: {nome}
        </Text>
        <Text>
          Idade: {idade}
        </Text>
      </View>
    );
  }
}

export default Contato;