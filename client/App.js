import { StatusBar } from 'expo-status-bar';
import React from 'react';
import colors from './assets/colors/colors';
import landing from './assets/app/landing/landing.jpg';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <ImageBackground source={landing} style={styles.landing}>
      <View style={styles.landingMain}>
        <Text style={styles.landingText}>RoundTable Reviews</Text>
        <View>
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
    flex: 1
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
  btnContainer: {
    flex: 1
  },
  loginBtn: {
    backgroundColor: colors.green,
    borderRadius: 5
  },
  signUpBtn: {
    backgroundColor: colors.blue,
    borderRadius: 5
  },
  btnText: {
    textAlign: 'center',
    padding: 10
  }
});
