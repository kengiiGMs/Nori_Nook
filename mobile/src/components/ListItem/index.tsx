import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface ItemProps {
    data: {
        id: string;
        product_id: string;
        name: string;
        amount: string | number
    };
    deleteItem: (item_id: string) => void
}

export function ListItem({ data, deleteItem }: ItemProps) {
    function handleDeleteItem() {
        deleteItem(data.id)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{data.amount} - {data.name}</Text>
            <TouchableOpacity onPress={handleDeleteItem}>
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