import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { render } from 'react-dom';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id:'1', nome: 'Matheus' , idade: 50, email: 'matheus@matheus.com' },
        {id:'2', nome: 'Joao'    , idade: 22, email: 'joao@joao.com' },
        {id:'3', nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        {id:'4', nome: 'Paulo'   , idade: 15, email: 'paul0@paulo.com' },
        {id:'5', nome: 'Ana'     , idade: 23, email: 'Ana@Ana.com' },
        {id:'6', nome: 'Vittor'  , idade: 24, email: 'joao@joao.com' },
        {id:'7', nome: 'Frenando', idade: 25, email: 'Vittor@Vittor.com' },
        {id:'8', nome: 'Felime'  , idade: 26, email: 'Felime@Felime.com' }
      ]
    };
  }

  render(){
    return (
      <View style={styles.container}>

          <FlatList 
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Pessoa data={item}/>}
            />

      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      paddingTop:24,
     },
     areaPessoa:{
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#C0C0C0',
        height:100,
        marginBottom:15,
     },
     textoPessoa:{
        color:'#fff',
        fontSize:15,
        paddingLeft:24,

     }
});

export default App;


class Pessoa extends Component {
  render(){
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Id: {this.props.data.id}</Text>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}
 