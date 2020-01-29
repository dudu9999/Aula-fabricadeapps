import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { render } from 'react-dom';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    }
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({nome: 'Bem vindo: '+ texto});
    }else{
      this.setState({nome: ''});
    }
  }

  render(){
    return (
      <View style={styles.container}>
          <TextInput onChangeText={this.pegaNome} 
          placeholder="Digite seu nome!" 
          underlineColorAndroid="trasparent" style={styles.input}/>

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