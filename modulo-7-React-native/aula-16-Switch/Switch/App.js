import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { render } from 'react-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: false
    }
    }

  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.texto}>App Expo Javascript</Text>
          <Switch 
            value={ this.state.status}
            onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
            thumbColor='#FF0000'
          />

          <Text style={styles.texto}>{(this.state.status) ? "Ativo" : "Inativo"}</Text>

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
       fontSize:30,
     }
});

export default App;