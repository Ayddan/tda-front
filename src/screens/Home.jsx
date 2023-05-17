import React, { useState, useEffect } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";

import Header from "../components/Header";

export default function Home({ navigation }) {
    const [ userToken, setUserToken ] = useState(null)

    useEffect(()=>{
        const bootstrapAsync = async () => {
            let token = await SecureStore.getItemAsync('userToken')
            setUserToken(token)
        }
        bootstrapAsync()
    },[])

    useEffect(()=>{
        console.log(userToken)
    },[userToken])

    return(
        <SafeAreaView style={styles.safeArea}>
            <Header/>
            <ScrollView style={styles.pageContainer}>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
                <Pressable style={styles.listItem}>
                    <Text style={styles.itemText}>New checkList</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#1A212C"
    },
    pageContainer: {
        height: "88.3%",
        padding: 20,
    },
    listItem: {
        backgroundColor: "#3A3F4B",
        borderRadius: 10,
        padding: 30,
        marginBottom: 30
    },
    itemText: {
        color: "#FFFDFB",
        fontSize: 20,
        textAlign: "center"
    }
})