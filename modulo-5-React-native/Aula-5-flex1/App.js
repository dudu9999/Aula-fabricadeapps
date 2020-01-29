import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { render } from 'react-dom';



class App extends Component {
  render(){
    return (
      <View style={{flex:1, backgroundColor:'gray'}}>
          <View  style={{height:65, backgroundColor:'gray'}}></View>
          <View  style={{flex:1, backgroundColor:'white'}}></View>
          <View  style={{height:65, backgroundColor:'gray'}}></View>
      </View>
    );
  }
}

export default App;