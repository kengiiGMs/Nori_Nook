import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'

export function FinishOrder() {
    return (
        <View style={styles.container}>
            <Text style={styles.alert}>Você Deseja Finaliza esse Pedido?</Text>
            <Text style={styles.title}>Mesa 30</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Finalizar Pedido</Text>
                <Feather size={20} name="shopping-cart" color="white" />

            </TouchableOpacity>
        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alert: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 12
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 12
    },
    button: {
        backgroundColor: '#FF3F4B',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    textButton: {
        fontSize: 18,
        marginRight: 8,
        fontWeight: 'bold',
        color: 'white'
    }
})