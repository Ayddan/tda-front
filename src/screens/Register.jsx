import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@react-navigation/native";
import Lottie  from "lottie-react-native";

import Header from "../components/Header";
import { API_URL } from '@env';

const formSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    cpassword: Yup.string()
        .required("Confirm Password is required")
        .min(8, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters")
        .oneOf([Yup.ref("password")], "Passwords do not match")
});

export default function Register({ navigation }) {
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const { register, control, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: {
            email: 'nathanleduc@hotmail.fr',
            password: '12341234',
            cpassword: '12341234'
        }
    })
    

    const onSubmit = async (data) => {
        setLoading(true)
        fetch(`${API_URL}/auth/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => {
            setLoading(false)
            if(!data.success) return setError(data.message)
            reset({
                email: "",
                password: "",
                cpassword: ""
            })
            navigation.replace('RegisterConfirmation')
        })
        .catch(err => {
            setError("Une erreur est survenue, réessayez plus tard")
            setLoading(false)
            console.log("Une erreur est survenue : " + err)
        })
    }

    return(
        <SafeAreaView style={styles.safeArea}>
            <Header/>
            <KeyboardAvoidingView keyboardVerticalOffset={20} behavior="padding">
                <ScrollView style={styles.pageContainer}>
                    <Text style={styles.pageTitle}>Sign up</Text>
                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Email</Text>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    maxLength: 100
                                }}
                                render={({field:{onChange,onBlur,value}})=>(
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        type="email"
                                        placeholder='email@hotmail.fr'
                                        placeholderTextColor='#969696'
                                    />
                                )}
                                name="email"
                            />
                            {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Password</Text>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    maxLength: 100
                                }}
                                render={({field:{onChange,onBlur,value}})=>(
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder='*********'
                                        placeholderTextColor='#969696'
                                        type="password"
                                        {...register("password")}
                                    />
                                )}
                                name="password"
                            />
                            {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Confirm password</Text>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    maxLength: 100
                                }}
                                render={({field:{onChange,onBlur,value}})=>(
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        type="password"
                                        placeholder='*********'
                                        placeholderTextColor='#969696'
                                    />
                                )}
                                name="cpassword"
                            />
                            {errors.cpassword && <Text style={styles.errorMessage}>{errors.cpassword.message}</Text>}
                        </View>
                    </View>
                    <Pressable style={styles.button1} onPress={handleSubmit(onSubmit)}>
                        {loading ? 
                            <Lottie style={styles.loadingDots} source={require('../assets/lottie/loader.json')} autoPlay loop/>
                            :
                            <Text style={styles.buttonText}>Send</Text>
                        }   
                    </Pressable>
                    <View>
                        {error && <Text style={styles.errorMessage}>{error}</Text>}
                    </View>
                    <Text style={styles.signInText}>
                        You already have an account ?
                        <Link style={styles.link} to={{ screen: "Login" }}> Sign in</Link>
                    </Text>
                </ScrollView>
            </KeyboardAvoidingView>
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
    pageTitle: {
        color: "#FFFDFB",
        fontSize: 30,
        textAlign: "center",
        marginBottom: 50
    },
    form: {
        marginBottom: 40
    },
    input: {
        color: "#FFFDFB",
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 5,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#FFFDFB",
    },
    formLabel: {
        color: "#FFFDFB",
        fontSize: 25, 
    },
    button1: {
        backgroundColor: "#3A3F4B",
        borderRadius: 10,
        padding: 20,
    },
    buttonText: {
        color: "#FFFDFB",
        fontSize: 25,
        textAlign: "center"
    },
    signInText: {
        color: "#FFFDFB",
        textAlign: "center",
        marginTop: 10
    },
    link: {
        color: "#0D8BFF",
    },
    errorMessage: {
        color: "#FE4A3E"
    },
    loadingDots: {
        // backgroundColor: "red",
        transform: [{scale: 3}],
        height: 30,
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto"
    }
})