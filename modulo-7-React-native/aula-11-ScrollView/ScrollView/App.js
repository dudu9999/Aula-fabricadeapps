import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { render } from 'react-dom';



class App extends Component {
/*
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
*/
  render(){
    return (
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
     container:{
      flex:1
     },
     box1:{
       backgroundColor:'red',
       height:250,
     },
     box2:{
      backgroundColor:'green',      
      height:250,
    },
     box3:{
      backgroundColor:'yellow',
      height:250,
     },
     box4:{
      backgroundColor:'blue',
      height:250,
     }
});

export default App;