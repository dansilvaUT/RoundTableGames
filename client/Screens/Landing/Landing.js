import React, { useState } from 'react';
import colors from '../../assets/colors/colors';
import landing from '../../assets/app/landing/landing.jpg';
import Login from '../Landing/Login/Login';
import SignUp from '../Landing/SignUp/SignUp';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';

const Landing = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <ImageBackground source={landing} style={styles.landing}>
            <View style={styles.landingMain}>
                <Text style={styles.landingText}>RoundTable Reviews</Text>
                <Text style={styles.secondText}>Love it, hate it, gotta have it...Let the world know!</Text>
                <View style={styles.authContainer}>
                    {
                        open
                            ?
                            <>
                                <SignUp />
                                <Text style={styles.spanText}>Already a member? login <Text style={styles.hereBtn} onPress={() => setOpen(!open)}>here</Text></Text>
                            </>
                            :
                            <>
                                <Login navData={props.navigation} />
                                <Text style={styles.spanText}>Don't have an account? sign up <Text style={styles.hereBtn} onPress={() => setOpen(!open)}>here</Text></Text>
                            </>
                    }

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
    authContainer: {
        width: '80%'
    },
    spanText: {
        color: colors.white,
        textAlign: 'center'
    },
    hereBtn: {
        textDecorationLine: 'underline'
    }
});

export default Landing;