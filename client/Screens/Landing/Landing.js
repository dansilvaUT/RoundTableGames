import React from 'react';
import colors from '../../assets/colors/colors';
import landing from '../../assets/app/landing/landing.jpg';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

const Landing = () => {
    return (
        <ImageBackground source={landing} style={styles.landing}>
            <View style={styles.landingMain}>
                <Text style={styles.landingText}>RoundTable Reviews</Text>
                <Text style={styles.secondText}>Love it, hate it, gotta have it...Let the world know!</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpBtn}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    landing: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    landingMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    landingText: {
        fontSize: 40,
        color: colors.white
    },
    secondText: {
        fontSize: 12,
        color: colors.white,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    btnContainer: {
        width: '80%'
    },
    loginBtn: {
        backgroundColor: colors.green,
        borderRadius: 5,
        margin: 5,
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
});

export default Landing;