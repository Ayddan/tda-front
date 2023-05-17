import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';
import { Link } from '@react-navigation/native';

import Header from '../components/Header';



export default function RegisterValidation() {
    return(
        <SafeAreaView style={styles.safeArea}>
            <Header/>
            <ScrollView style={styles.pageContainer}>
                <Lottie style={styles.lottieAnimation} source={require('../assets/lottie/mail-sent.json')} autoPlay loop={false}/>
                <Text style={styles.text}>We sent a confirmation email to :</Text>
                <Text style={styles.mailText}>email@hotmail.fr</Text>
                <Text style={styles.text}>Check your email and click on the confirmation link to continue</Text>
                <Pressable style={styles.button1}><Text style={styles.buttonText}>Resend email</Text></Pressable>
                <Pressable style={styles.button1}>
                    <Link style={styles.buttonText} to={{ screen: "Login" }}>Sign in</Link>
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
        minHeight: "100%",
        padding: 20,
    },
    text: {
        color: "#FFFDFB",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20
    },
    mailText: {
        color: "#FFFDFB",
        fontSize: 24,
        textAlign: "center",
        textDecorationLine: "underline",
        marginBottom: 20
    },
    lottieAnimation: {
        width: 130,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
    },
    button1: {
        backgroundColor: "#3A3F4B",
        borderRadius: 10,
        padding: 20,
        marginTop: 20
    },
    buttonText: {
        color: "#FFFDFB",
        fontSize: 24,
        textAlign: "center"
    },
})