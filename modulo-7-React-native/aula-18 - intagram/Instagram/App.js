import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { render } from 'react-dom';
import Lista from './src/Lista';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { feed: [
      {
        id: '1', 
        nome: 'Eduardo Caetano', 
        descricao: 'Diversão com a mulher mais linda da minha vida ❤️,',
        imgperfil: 'https://instagram.fpoa28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/60172222_430629377715615_7236187679421890560_n.jpg?_nc_ht=instagram.fpoa28-1.fna.fbcdn.net&_nc_ohc=W-jv2BN48DcAX-ZRYGy&oh=ef8c14a725f3316dc8387e46d543163c&oe=5ED011C9', 
        imgPublicacao: 'https://scontent-gru2-1.cdninstagram.com/v/t51.2885-15/e35/54248147_1554034434729369_6680288978818408093_n.jpg?_nc_ht=scontent-gru2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Wk1kaAXc9tIAX-iHqka&oh=bd67b287d1c2bcccf0d228929ce21ca0&oe=5ED1DA68',  
        likeada: false, 
        likers: 0
       },
      {
        id: '2', 
        nome: 'Matheus', 
        descricao: 'Isso sim é ser raiz!!!!!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
        likeada: false, 
        likers: 0
      },
      {
        id: '3', 
        nome: 'Jose Augusto', 
        descricao: 'Bora trabalhar Haha', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
        likeada: false, 
        likers: 3
      },
      {
        id: '4', 
        nome: 'Gustavo Henrique', 
        descricao: 'Isso sim que é TI!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
        likeada: false, 
        likers: 1
      },
      {
        id: '5', 
        nome: 'Guilherme', 
        descricao: 'Boa tarde galera do insta...', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
        likeada: false, 
        likers: 32
      }
    ] }
  }

  render(){
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image 
                source={require('./src/img/logo.png')}
                styles={styles.logo}  
              />
            </TouchableOpacity>  

            <TouchableOpacity>
            <Image
              source={require('./src/img/send.png')}
              style={styles.send}
            />
            </TouchableOpacity>
          </View>
          <FlatList 
            showsHorizontalScrollIndicator={false}
            data={this.state.feed}
            renderItem={({item}) => <Lista data={item} /> }
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      marginTop:25,
      marginBottom: 35,

     },
      header:{
        height: 55,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding:5,
        borderBottomWidth:0.2,
        shadowColor:'#000',
        elevation:1,
      },
     send:{
       width:23,
       height:23,
     }
});

export default App;