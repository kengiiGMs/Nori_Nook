import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/Logo.png')} />

            <View style={styles.inputContainer}>
                <TextInput placeholder='Digite o seu Email' style={styles.input} />
                <TextInput placeholder='Digite a sua Senha' style={styles.input} secureTextEntry={true} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        marginBottom: 18
    },
    inputContainer: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    input: {
        width: '95%',
        height: 40,
        backgroundColor: 'whitesmoke',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: 'black'
    },
    button: {
        width: '95%',
        height: 40,
        backgroundColor: '#FF3F4B',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

})