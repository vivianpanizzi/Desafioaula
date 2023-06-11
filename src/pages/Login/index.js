import React from 'react';
import { StyleSheet, View, Text, Button,TouchableOpacity } from 'react-native';

import Titulo from '../../components/Título';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';
import RecuperarSenhaButton from '../../components/RecuprarSenha';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Titulo titulo="Login" />
            <MeuInput
                label="E-mail"
                placeholder="exemplo@exemplo.com" />

            <     MeuInput
                label="Senha"
                placeholder="123456" />

            <SuperButton valor="Entrar"> </SuperButton>

            <RecuperarSenhaButton valor="Recuperar senha"/>
            
            <Text style={styles.text}>Não tem uma conta?</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF8DC",
    },

    text: {
        fontSize:19,
        color: "#FF8A65",
        marginTop:100
    },
    button:{
        alignItems: 'center',
        padding:12,
        backgroundColor: "#FFA07A",
        borderRadius: 5,
        width:180,

    },
    buttonText: {
        fontSize: 16,
        color: "#FFF",
    }

});
