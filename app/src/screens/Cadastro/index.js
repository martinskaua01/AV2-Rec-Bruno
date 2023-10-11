import * as React from 'react-native'
import { useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function Cadastro() {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const [tecnico, setTecnico] = useState({
    nome: '',
    idade: '',
    nacionalidade: '',
    experiencia: '',
  });

  function handleInputChange(field, value) {
    setTecnico({
      ...tecnico,
      [field]: value,
    });
  }

  function cadastrar() {
    console.log(tecnico);
    setIsVisible(true)
  }

  function lista() {
    console.log(tecnico);
    navigation.navigate('list')
  }

  // useEffect(() => {
  //   fetchFormulario();
  // }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preencha os dados do Técnico</Text>
      
      <Text style={styles.textInput}>Nome</Text>
      <TextInput
        style={styles.input}
        value={tecnico.nome}
        onChangeText={(text) => handleInputChange('nome', text)}
      />

      <Text style={styles.textInput}>Idade</Text>
      <TextInput
        style={styles.input}
        value={tecnico.idade}
        onChangeText={(text) => handleInputChange('idade', text)}
      />

      <Text style={styles.textInput}>Nacionalidade</Text>
      <TextInput
        style={styles.input}
        value={tecnico.nacionalidade}
        onChangeText={(text) => handleInputChange('nacionalidade', text)}
      />

      <Text style={styles.textInput}>Experiencia em anos</Text>
      <TextInput
        style={styles.input}
        value={tecnico.experiencia}
        onChangeText={(text) => handleInputChange('experiencia', text)}
      />
{isVisible && (
<View style={styles.lista}>
<Text style={styles.inputValue}>Nome: {tecnico.nome}</Text>
<Text style={styles.inputValue}>Idade: {tecnico.idade}</Text>
<Text style={styles.inputValue}>Nacionalidade: {tecnico.nacionalidade}</Text>
<Text style={styles.inputValue}>Experiencia em anos: {tecnico.experiencia}</Text>
</View>)}

    <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTxt}>cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={lista}>
        <Text style={styles.btnTxt}>Ver lista de jogadores</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
        color: "black",
        fontSize: 15,
        width: "60%",
        padding: 9,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#FFFF",
        borderRadius: 5,
        marginBottom: 12
      },
      inputValue:{
        fontSize: 14,
        width: '60%',
        color: 'black',
        marginBottom: 20
      },
      btn: {
        color:"white",
        marginTop: 10,
        padding: 15,    
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "blue",
    
      },
      btnTxt: {
        fontFamily: "Arial",
        color: "white",
      },
      textInput: {
        fontSize: 16,
        width: '60%',
        marginBottom: 5,
        color: "black"
      },
})