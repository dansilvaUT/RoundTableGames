import React, { useState } from 'react';
import colors from '../../../assets/colors/colors';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
const Login = () => {
    const [userInfo, setUserInfo] = useState({ username: '', password: '' });

    console.log(userInfo)

    const handleInputChange = (name) => (value) => {
        setUserInfo({ [name]: value });
    };

    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder='Username'
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
            />
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.btnText}>Login</Text>
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
    loginBtn: {
        backgroundColor: colors.green,
        borderRadius: 5,
        margin: 5,
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        color: colors.white,
        fontWeight: 'bold'
    }
})

export default Login;

