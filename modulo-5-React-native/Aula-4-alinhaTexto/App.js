import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { render } from 'react-dom';



class App extends Component {
  render(){
    return (
      <View style={style.container}>
        <Text style={style.textoPrincipal}>Eu sou texto 1</Text>
        <Text style={style.alinhaTexto}>Eu sou texto 2</Text>
        <Text style={[style.textoPrincipal,style.alinhaTexto]}>Eu sou texto 3</Text>
        <Text style={style.textoPrincipal}>Eu sou texto 4</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
     container:{
      margin:80
     },
     textoPrincipal:{
       fontSize:25,
       color:'red'
     },
     alinhaTexto:{
      textAlign:'center'
     }
});

export default App;