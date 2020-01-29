import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import Entrar from './src/Entrar';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    }
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);

  }
  entrar(){
    this.setState({modalVisible: true});
  }

  sair(visible){
    this.setState({modalVisible: visible});
  }
  render(){
    return (
      <View style={styles.container}>
          <Button style={{paddingTop:15,paddingBottom:15}} title="Entrar" onPress={this.entrar } />

            <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
              <View style={{padding:15, flex:1, justifyContent:'center',alignItems:'center'}}>
                <Entrar fechar={() => this.sair(false)}/>
              </View>
            </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      marginTop: 25,
      marginBottom: 35,
      paddingTop:15,paddingBottom:15
    }
     },
);
