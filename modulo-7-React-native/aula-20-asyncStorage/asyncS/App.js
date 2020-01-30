import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard, AsyncStorage  } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input:''
    };
    this.gravaNome = this.gravaNome.bind(this);
  }

  // ComponentDidMount = é executado quando o component é montado em tela
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value) =>{
      this.setState({nome:value});
    })
  }

  //ComponentDidUpdate = é executado toda vez que um state é atualizado faz algo
  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;

    if(prevState !== nome){
      await AsyncStorage.setItem('nome', nome);
    }
  }

  gravaNome(){
    this.setState({
      nome: this.state.input
    })
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
  }

  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.texto}>App Expo Javascript</Text>

          <View style={styles.viewInput}>
            <TextInput style={styles.input} 
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
            underlineColorAndroid="transparent"
            />

          <TouchableOpacity style={styles.botaoT} onPress={this.gravaNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
          
          </View>

          <Text style={styles.nome}>{this.state.nome}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      marginTop: 25,
      marginBottom: 35,
      alignItems:'center',
     },
     texto:{
       textAlign:'center',
       fontSize:25,
     },
     viewInput:{
       flexDirection:'row',
       textAlign:'center',
     },
     input:{
       width:350,
       height:40,
       borderColor:'#000',
       borderWidth:1,
       padding:10,
     },
     botaoT:{
      width:50,
      height:40,
    },
     botao:{
       backgroundColor:'#222',
       color:'#FFF',
       width:50,
       height:40,
       marginLeft:4,
       textAlign:'center',
       fontSize:30,

     },
     nome:{
       marginTop:15, 
       fontSize:30,
       textAlign:'center',
     },

});

