import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

type RouteDetailParams = {
    Order: {
        number: string | number;
        order_id: string
    }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>

export default function Order() {
    const route = useRoute<OrderRouteProps>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mesa {route.params.number}</Text>
                <TouchableOpacity>
                    <Feather name="trash-2" size={28} color="#FF3F4b" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'black' }}>Pizzas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'black' }}>Pizzas</Text>
            </TouchableOpacity>

            <View style={styles.qtdContainer}>
                <Text style={styles.qtdText}>Quantidade</Text>
                <TextInput placeholderTextColor="whitesmoke" keyboardType="numeric" value="1" style={[styles.input, { width: '60%', textAlign: 'center' }]} />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%'
    },
    header: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        marginTop: 24
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 14
    },
    input: {
        backgroundColor: 'whitesmoke',
        borderRadius: 4,
        width: '100%',
        height: 40,
        marginBottom: 12,
        justifyContent: 'center',
        paddingHorizontal: 8,
        color: 'black',
        fontSize: 22
    },
    qtdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    qtdText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    actions: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    buttonAdd: {
        width: '20%',
        backgroundColor: 'gray',
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#FF3F4B',
        borderRadius: 4,
        height: 40,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})