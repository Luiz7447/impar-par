import React, {useState} from "react";

import  {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home (){

    let [num, setResto] = useState();

    function Calcular(){
        let resto = num%2;
        if (resto == 0){
            alert("O numero é par");
        }
        else{
            alert("O numero é impar");
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Impar ou Par</Text>

            <Text style={styles.subtitulo}>Insira a Numero</Text>

            <TextInput onChangeText={setResto} style={styles.campo} placeholder="Insira um Numero"/>

            <TouchableOpacity style={styles.botao} onPress={Calcular}>
                <Text style={styles.botaoTexto}>Pensar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E6E6FA',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:26,
        color:'#000',
        fontWeight:'bold',
        marginBottom:40,
    },

    subtitulo:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold',
        marginBottom:20,
    },

    campo:{
        backgroundColor: '#F8F8FF',
        fontSize:18,
        padding:8,
        marginTop:10,
        width:300,
        borderRadius:10
    },

    botao:{
        backgroundColor:'#D8BFD8',
        alignItems: "center",
        padding:15,
        borderRadius:7,
        marginTop:20,
        width:250
    },

    botaoTexto:{
        color: '#4B0082',
        fontSize:17,
        fontWeight: "700",
    }
});