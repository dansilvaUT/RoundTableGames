import React, { useState } from 'react';
import axios from 'axios';
import colors from '../../../assets/colors/colors';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const SignUp = () => {

    const [newUser, setNewUser] = useState({ email: '', username: '', password: '' });

    const signUp = (email, username, password) => {
        axios.post('http://localhost:4444/api/register', { email, username, password })
            .then(res => console.log(res.data))
            .catch(err => console.log(`Error: ${err.message}`));
    }

    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={val => setNewUser({ ...newUser, email: val })}
                defaultValue={newUser.email}
            />
            <TextInput
                style={styles.input}
                placeholder='Username'
                onChangeText={val => setNewUser({ ...newUser, username: val })}
                defaultValue={newUser.username}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={val => setNewUser({ ...newUser, password: val })}
                defaultValue={newUser.password}
            />
            <TouchableOpacity style={styles.signUpBtn} onPress={() => signUp(newUser.email, newUser.username, newUser.password)}>
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

