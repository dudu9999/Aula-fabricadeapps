import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      lista: []
    };

    let config = {
      apiKey: "AIzaSyBB8FfZt_f0bi87oLfYjOZzgRpVIPnSzd0",
      authDomain: "meuapp-a5f9d.firebaseapp.com",
      databaseURL: "https://meuapp-a5f9d.firebaseio.com",
      projectId: "meuapp-a5f9d",
      storageBucket: "meuapp-a5f9d.appspot.com",
      messagingSenderId: "709381409518"
    };
    firebase.initializeApp(config);


    firebase.database().ref('usuarios').on('value', (snapshot) =>{
        let state = this.state;
        state.lista = [];

        snapshot.forEach((childItem) =>{
          state.lista.push({
            key: childItem.key,
            nome: childItem.val().nome,
            cargo: childItem.val().cargo
          });
        });

        this.setState(state);

    })




  }

  

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.lista}
                  renderItem={({item}) => <Listagem data={item} />}/>
      </View>
    );
  }
}

class Listagem extends Component{
  render(){
    return(
      <View>
        <Text style={{fontSize: 25}}>{this.props.data.nome} - {this.props.data.cargo}</Text>
        <Text>Chave {this.props.data.key}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

});