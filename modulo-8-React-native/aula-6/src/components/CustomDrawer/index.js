import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

class CustomDrawer extends Component{
  render(){
    return(
      <View style={{flex: 1}}>

        <View style={{width: '100%', height: 77, alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
          <Image
          source={require('../../img/perfil.png')}
          style={{width: 65, height: 65}}
          />
          <Text style={{color: '#FFF', fontSize: 17, marginTop: 10}}>
            Bem vindo!
          </Text>
        </View>

        <ScrollView style={{marginTop: 20}}>
          <DrawerNavigatorItems {...this.props} />
        </ScrollView>

        <View style={{width: '100%', marginTop: 20}}>
          <TouchableOpacity 
          style={{backgroundColor: '#24c2cb'}} 
          onPress={()=> this.props.navigation.navigate('Contato')}>

            <Text style={{margin: 10, color: '#FFF', textAlign: 'center'}}>
              Contato
            </Text>
            
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default CustomDrawer;