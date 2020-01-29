import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { render } from 'react-dom';



class App extends Component {
  render(){
    return (
        <View style={{flex:1, flexDirection:'column', alignItems:'stretch'}}>
        <View style={{width: 100, height: 50, backgroundColor: 'green'}} />
        <View style={{ height: 50, backgroundColor: 'blue'}} />
        <View style={{ height: 50, backgroundColor: 'red'}} />
      </View>
    );
  }
}

export default App;