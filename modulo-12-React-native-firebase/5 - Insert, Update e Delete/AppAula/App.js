import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      cargo: ''
    };

    this.cadastrarFuncionario = this.cadastrarFuncionario.bind(this);

    let config = {
      apiKey: "AIzaSyBB8FfZt_f0bi87oLfYjOZzgRpVIPnSzd0",
      authDomain: "meuapp-a5f9d.firebaseapp.com",
      databaseURL: "https://meuapp-a5f9d.firebaseio.com",
      projectId: "meuapp-a5f9d",
      storageBucket: "meuapp-a5f9d.appspot.com",
      messagingSenderId: "709381409518"
    };
    firebase.initializeApp(config);


    // Criar um No
    //firebase.database().ref('tipo').set('Cliente');

    /*
    firebase.database().ref('usuarios').child(id).set({
      nome: 'Jose Jose Jose',
      cargo: 'Administrativo'
    });
    */

    //firebase.database().ref('tipo').remove();

    //firebase.database().ref('usuarios').child(id).child('cargo').set('Junior');

  }

  cadastrarFuncionario(){

    if(this.state.nome != '' && this.state.cargo != ''){
       
      let usuarios = firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: this.state.nome,
        cargo: this.state.cargo
      });

      alert("Cadastrado com sucesso!");

    }

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Nome</Text>
        <TextInput underlineColorAndroid="transparent" style={styles.input} 
                   onChangeText={(nome) => {this.setState({nome})}}/>

        <Text style={styles.texto}>Cargo</Text>
        <TextInput underlineColorAndroid="transparent" style={styles.input} 
                   onChangeText={(cargo) => {this.setState({cargo})}}/> 

        <Button title="Novo Funcionario" onPress={this.cadastrarFuncionario}/> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  texto:{
    fontSize: 20
  },
  input:{
   padding: 10,
   borderWidth: 1,
   borderColor: '#000000',
   height: 40
  }
});
