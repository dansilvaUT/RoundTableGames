import React, { useState } from 'react';
import colors from '../../../assets/colors/colors';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

const Login = props => {
    console.log('props', props)
    const [userInfo, setUserInfo] = useState({ username: '', password: '' });

    const login = (username, password) => {
        axios.post('http://localhost:4444/api/login', { username, password })
            .then(res => console.log(res.data))
            .catch(err => console.log(`Error: ${err.response.request.response}`));
    }

    return (
        <View >
            <TextInput
                name='username'
                style={styles.input}
                placeholder='Username'
                onChangeText={val => setUserInfo({ ...userInfo, username: val })}
                defaultValue={userInfo.username}
            />
            <TextInput
                name='password'
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={val => setUserInfo({ ...userInfo, password: val })}
                defaultValue={userInfo.password}
            />
            <TouchableOpacity style={styles.loginBtn} onPress={() => login(userInfo.username, userInfo.password)}>
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

