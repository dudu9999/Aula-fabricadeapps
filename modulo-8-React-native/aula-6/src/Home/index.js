import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Inicio',
    drawerIcon: ({tintColor}) => (
      <Image
      source={require('../img/home_ativo.png')}
      style={[ {width: 30, height: 30}, {tintColor: tintColor} ]}
      />
    )

  };

  render(){
    return(
      <View>
        <Text>Tela home!!</Text>
        <Button 
        title="Contato"
        onPress={()=> this.props.navigation.navigate('Contato')}
        />

        <Button
        title="Abrir"
        onPress={ ()=> this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

export default Home;