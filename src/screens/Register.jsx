import React from "react";
import { KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@react-navigation/native";

const formSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    cpassword: Yup.string()
        .required("Confirm Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters")
        .oneOf([Yup.ref("password")], "Passwords do not match")
});

export default function Register({ navigation }) {
    const { register, control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: {
            email: 'nathanleduc@hotmail.fr',
            password: '1234',
            cpassword: '1234'
        }
    })

    const onSubmit = async (data) => {
        // Remove cpassword from data to be ok with api schema restrictions
        delete data.cpassword
        return console.log(data)
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
                                    />
                                )}
                                name="cpassword"
                            />
                            {errors.cpassword && <Text style={styles.errorMessage}>{errors.cpassword.message}</Text>}
                        </View>
                    </View>
                    <Pressable style={styles.button1} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Send</Text>
                    </Pressable>
                    <Text style={styles.signInText}>
                        You already have an account ?
                        <Link style={styles.link} to={{ screen: "Home" }}> Sign in</Link>
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
        borderBottomColor: "#FFFDFB"
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
    }
})