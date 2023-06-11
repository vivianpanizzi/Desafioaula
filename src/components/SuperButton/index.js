import React from "react";
import { TouchableHighlight, StyleSheet, View, Text, Alert } from "react-native";

const SuperButton = (props) => {
    return (
        <TouchableHighlight 
        style={style.superButton}
        onPress={() => Alert.alert("Login efetuado com sucesso!")}
        >
            <View style={style.button}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    superButton:{

    },
    button:{
        alignItems: 'center',
        backgroundColor: '#FFA07A',
        padding:12,
        width:300,
        borderRadius: 5,    
    },
    valor:{
        fontSize:20,
        color: "#fff",
        fontWeight:'bold'        
    }

});

export default SuperButton;