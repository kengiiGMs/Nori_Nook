import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function Dashboard() {
    const { signOut } = useContext(AuthContext)
    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo Pedido</Text>
            <TextInput placeholder='Número da Mesa' placeholderTextColor="black" style={styles.input} keyboardType='numeric' />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Abrir Mesa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={signOut}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 24,
    },
    input: {
        width: '90%',
        height: 60,
        backgroundColor: 'whitesmoke',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 22,
        color: 'black',
        borderColor: '#FF3F4B',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    button: {
        width: '90%',
        height: 40,
        backgroundColor: '#FF3F4B',
        borderRadius: 4,
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})