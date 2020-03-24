import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Inicio',
  };

  render(){
    return(
      <View>
        <Text>Tela home!!</Text>
        <Button 
        title="Contato"
        onPress={()=> this.props.navigation.navigate('Contato')}
        />
      </View>
    );
  }
}

export default Home;