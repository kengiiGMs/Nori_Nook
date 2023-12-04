import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface ItemProps {
    data: {
        id: string;
        product_id: string;
        name: string;
        amount: string | number
    }
}

export function ListItem({ data }: ItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{data.amount} - {data.name}</Text>
            <TouchableOpacity>
                <Feather name="trash-2" color="#FF3F4b" size={25} />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 0.3,
        borderStyle: "solid",
        borderColor: '#FF3F4b',
        borderRadius: 5,
        marginBottom: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,

    },
    item: {
        color: 'black'
    }
})