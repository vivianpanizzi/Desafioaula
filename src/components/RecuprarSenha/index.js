import React from "react";
import { TouchableHighlight, StyleSheet, View, Text, Alert } from "react-native";

const RecuperarSenhaButton = (props) => {
    return (
        <TouchableHighlight 
        style={style.recuperarSenhaButton}
        onPress={() => Alert.alert("Um e-mail foi enviado com as instruções de recuperação" )}
        >
            <View style={style.button}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    recuperarSenhaButton:{

    },
    button:{
        alignItems: 'center',
        padding:12,
    },
    valor:{
        fontSize:17,
        color: "#FF8A65",
        textDecorationLine: 'underline',
    }

});


export default RecuperarSenhaButton;
