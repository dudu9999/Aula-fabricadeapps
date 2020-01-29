import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from 'react-native';
import { render } from 'react-dom';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input:''
    }
    this.entrar = this.entrar.bind(this);
  }

  entrar(texto){
    if(this.state.input === ''){
      alert('Digite seu nome!')
      return;
    }else{
      this.setState({nome: 'Bem vindo: '+ this.state.input});
      //this.setState({nome: ''});
    }
  }
  

  render(){
    return (
      <View style={styles.container}>
          <TextInput onChangeText={(texto) => this.setState({input: texto})} 
          placeholder="Digite seu nome!" 
          underlineColorAndroid="trasparent" style={styles.input}/>

          <Button title='Entrar' onPress={this.entrar}/>

          <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
     container:{
      flex:1
     },
     input:{
       color:'#222',
       height:45,
       borderWidth:1,
       borderColor:'#222',
       margin:10,
       marginTop:50,
       fontSize:20,
       padding:10,
     },
     alinhaTexto:{
      textAlign:'center'
     },
     texto:{
       textAlign:'center',
       fontSize:25,
     }
});

export default App;