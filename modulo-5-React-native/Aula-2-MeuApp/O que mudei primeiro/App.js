import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { render } from 'react-dom';


let nome = 'Eduardo Caetano Corrêa'

export default function App() {
  return (
    <View style={styles.container}>
      <ImagemEduardo largura={300} altura={400}/>
      <Text style={{ color:'blue', fontSize:30, marginLeft:5 }}>{ nome }</Text>
    </View>
  );
}

class ImagemEduardo extends Component{
  render(){
  let urlImg = 'https://scontent.fpoa28-1.fna.fbcdn.net/v/t1.0-9/62131363_2309071579179481_6494590064562012160_n.jpg?_nc_cat=100&_nc_ohc=cWuiCmxJZ00AX_Wut_Q&_nc_ht=scontent.fpoa28-1.fna&oh=ed40ac6f8099d6483f82e4ec1b8b7556&oe=5EDB1C62'
  
    return(
      <Image source={{ uri: urlImg }}  
             style={{width:this.props.largura, height:this.props.altura, margin:10}}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
