import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { render } from 'react-dom';



class App extends Component {

  constructor(props){
    super(props);
    this.state ={
       nome: 'Eduardo'
    }

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    this.setState({
      nome: 'Eduardo Caetano Correa'
    })

  }

  render(){
    return (
      <View style={{marginTop:20}}>
        <Text style={{ color:'blue', fontSize:30, marginLeft:5, marginTop:80,marginBottom:30, textAlign:'center' }}>
          { this.state.nome }</Text>

          <Button title="Entrar" onPress={() => this.entrar('Eduardo Caetano Correa')}style={{ color:'red', fontSize:10, marginTop:50, textAlign:'center' }}></Button>
      </View>
    );
  }
}
export default App;