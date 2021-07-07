import React, { useState } from 'react';
import colors from '../../../assets/colors/colors';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
const SignUp = () => {

    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder='Email'
            />
            <TextInput
                style={styles.input}
                placeholder='Username'
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
            />
            <TouchableOpacity style={styles.signUpBtn}>
                <Text style={styles.btnText}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        margin: 5,
        padding: 5,
        backgroundColor: colors.white,
        borderRadius: 5
    },
    signUpBtn: {
        backgroundColor: colors.blue,
        borderRadius: 5,
        margin: 5
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        color: colors.white,
        fontWeight: 'bold'
    }
})

export default SignUp;

