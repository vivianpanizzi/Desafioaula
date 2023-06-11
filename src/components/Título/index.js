import React from "react";
import { Text, StyleSheet } from "react-native";

function Titulo (props){
    return(
        <Text style={css.titulo}>{props.titulo}</Text>
    );
}


const css = StyleSheet.create({
    titulo:{
        color: '#FF8A65',
        fontSize:45,
        marginBottom:18,
    }
});

export default Titulo