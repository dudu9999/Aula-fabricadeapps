import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { render } from 'react-dom';



class App extends Component {
  render(){
    return (
      <View style={{flex:1, flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
          <View  style={{height:65,width:65, backgroundColor:'blue'}}></View>
          <View  style={{height:65,width:65, backgroundColor:'red'}}></View>
          <View  style={{height:65,width:65, backgroundColor:'green'}}></View>
      </View>
    );
  }
}

export default App;