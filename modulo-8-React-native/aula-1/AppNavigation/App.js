import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {
/*
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    }
  }
*/
  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.texto}>App Expo Javascript</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      marginTop: 25,
      marginBottom: 35,
     },
     texto:{
       textAlign:'center',
       fontSize:25,
     }
});

