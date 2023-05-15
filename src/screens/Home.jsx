import React from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function Home({ navigation }) {
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
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#26282C"
    },
    pageContainer: {
        minHeight: "100%",
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
        fontSize: 20
    }
})