import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MeuInput from "../../components/Input";

function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cadastre-se para criar sua conta</Text>
            <MeuInput
                label="Nome Completo"
                placeholder="João Silva" />

            <MeuInput
                label="E-mail"
                placeholder="exemplo@exemplo.com" />

            <     MeuInput
                label="Senha"
                placeholder="123456" />

                <     MeuInput
                label="Confirme a senha"
                placeholder="123456" />

        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            marginBottom:50,
            backgroundColor: "#FFF8DC",
            
        },
    
        text: {
            fontSize:20,
            color: "#FF8A65",
            fontWeight:'bold',
            marginTop:50,
            marginBottom:43
        }
    });

export default Cadastro;
