import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { render } from 'react-dom';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      valor:0
    }
  }

  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.texto}>App Expo Javascript</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            onValueChange={(valorSelecionado) =>{this.setState({valor: valorSelecionado})}}
            value={this.state.valor}
            maximumTrackTintColor='#00ff00'
            maximumTrackTintColor='#FF0000'

            />

          <Text style={styles.texto}>{this.state.valor.toFixed(1)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      marginTop: 25,
     },
     texto:{
       textAlign:'center',
       fontSize:25,
     }
});

export default App;