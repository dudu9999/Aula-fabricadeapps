import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Switch, Alert, Picker } from 'react-native';
import { render } from 'react-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input:'',
      sexoDefault: 0,
      sexos:[
        {key: 1, sexo: 'Masculino'},
        {key: 2, nome: 'Feminino'},
      ],
      status: false
    }
    this.entrar = this.entrar.bind(this);
  }

  entrar(texto){
    if(this.state.input === ''){
      alert('Digite seu nome!');
      return;
    }else{
      //this.setState({nome: 'Bem vindo: '+ this.state.input});
      alert('Bem vindo: '+ this.state.input);
    }
  }

  render(){

    let PickerItem = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return (
      <View style={styles.container}>
          <Text style={styles.texto}>App Expo Javascript</Text>
          
          <TextInput
            style={styles.inputNome}
            onChangeText={(texto) => this.setState({input: texto})} 
            placeholder="Digite seu nome!" 
            underlineColorAndroid="trasparent" style={styles.input}/>
          
          <TextInput
            style={styles.inputIdade}
            onChangeText={(textoIdade) => this.setState({input: textoIdade})} 
            placeholder="Digite sua idade!" 
            underlineColorAndroid="trasparent" style={styles.input}/>
          
          <Picker
            selectedValue={this.state.sexos}
            onValueChange={(itemValue, itemIndex) => this.setState({sexoDefault: itemValue})}>
            {PickerItem}
          </Picker>

          

          <View style={styles.estudanteArea}>

            <Text style={styles.texto}>Estudante: Não</Text>
            
            <Switch 
              value={ this.state.status}
              onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
            />

            <Text style={styles.texto}>Sim</Text>
          
          </View >
          
        <TouchableOpacity style={styles.botao} onPress={this.entrar}>
          <View style={styles.btnArea}>
            <Text style={styles.botaoTexto}>ENTRAR</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      marginTop: 25,
     },
     texto:{
       textAlign:'center',
       fontSize:25,
     },
     inputNome:{
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1
     },
     botao:{
      width:203,
      height:50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#dd7b22',
      },
      btnArea:{
      flex: 1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      },
      botaoTexto:{
      fontSize:18,
      fontWeight: 'bold',
      color:'#dd7b22',
      },
      estudanteArea:{
        flexDirection:'row'
      },
      inputNome:{
        color:'#222',
        height:45,
        borderWidth:1,
        borderColor:'#222',
        margin:10,
        marginTop:50,
        fontSize:20,
        padding:10,
      },
      inputIdade:{
        color:'#222',
        height:45,
        borderWidth:1,
        borderColor:'#222',
        margin:10,
        marginTop:50,
        fontSize:20,
        padding:10,
      },
});

export default App;