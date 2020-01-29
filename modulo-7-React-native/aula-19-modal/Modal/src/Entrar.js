import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button,  } from 'react-native';

export default class App extends Component {
    render(){
        return (
                <View style={{backgroundColor:"#292929", width:'100%', height:350, borderRadius:15}}>
                    <Text style={{textAlign:'center' ,paddingTop:15,paddingBottom:15, color:"#fff", fontSize: 28}}>Seja Bem-vindo!</Text>
                <View style={{width:'100%', height:150}}>
                </View>

                    <Button title="Sair" onPress={this.props.fechar} style={{color:'##FF0000',backgroundColor: '#FF0000', justifyContent:'bottom',alignItems:'bottom'}}/>
                </View>
        );
      }
    }
    