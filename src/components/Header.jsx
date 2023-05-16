import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ATTENTION</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1A212C",
        width: "100%",
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .2,
        shadowRadius: 4,
    },
    title: {
        color: "#FFFDFB",
        textAlign: "center",
        fontSize: 30
    },
    
})