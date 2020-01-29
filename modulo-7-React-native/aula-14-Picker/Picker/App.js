import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Picker } from 'react-native';
import { render } from 'react-dom';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pizza:0,
      pizzas:[
        {key: 1, nome: 'Strogonoff', valor: 35.90},
        {key: 2, nome: 'Brigadeiro', valor: 20.90},
        {key: 3, nome: 'Calabresa', valor: 18.00},
      ]
    }
  }

  render(){

    let PickerItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return (
      <View style={styles.container}>
          <Text style={styles.logo}>Menu Pizza</Text>
          
          <Picker
            selectedValue={this.state.pizza}
            onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}>
            {PickerItem}
          </Picker>

          <Text style={styles.pizzas}>
            Você escolheu: {this.state.pizzas[this.state.pizza].nome}
          </Text>
          <Text style={styles.pizzas}>
            R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
          </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
     container:{
      flex:1,
      marginTop:25,
     },
     pizzas:{
      marginTop:25,
      textAlign:'center',
      backgroundColor:'#ddd'
     },
     logo:{
       textAlign:'center',
       fontSize:25,
     }
});

export default App;