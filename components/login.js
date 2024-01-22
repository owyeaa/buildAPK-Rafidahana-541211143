import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import CustomBtn from './Custom/CustomButton';
import CustomImg from './Custom/CustomImage';
import CustomInput from './Custom/CustomInput';

export default function Login({navigation}) {

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate("Home")
  };

  const handleForgotPassword = () => {
    // Implement your logic for forgot password here
    console.log('Forgot Password');
  };

  const handleGoogleLogin = () => {
    // Implement your Google login logic here
    console.log('Logging in with Google');
  };

  const handleRegister = () => {
    // Implement your logic for registration here
    console.log('Redirect to Registration Page');
  };

  return (
    <View style={styles.container}>
      <CustomImg
        stylegambar={styles.logo}
        gambarnya={require('../assets/telkom.png')}
      />
        <CustomInput
          placeholder="Email"
        />
        <CustomInput
          secureTextEntry
          placeholder="Password"
        />
      <TouchableOpacity style={styles.forgotPasswordBtn} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
      </TouchableOpacity>
      <CustomBtn 
      loginBtn={styles.loginBtn}
      title="Masuk" 
      loginText={styles.loginText}
      onPress={handleLogin}

      />
      <Image
        style={styles.Line}
        source={require('../assets/line.png')}
      />
      <CustomBtn 
      loginBtn={styles.googleBtn}
      title="Masuk dengan Google" 
      loginText={styles.loginText}
      />
      <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
        <Text style={styles.registerText}>Belum punya akun? Daftar sekarang</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 65,
    height: 80,
    marginBottom: 40,
  },
  Line: {
    width: 250,
    height: 10,
    marginTop: 25,
    marginBottom: 25,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#B31312',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  googleBtn: {
    width: '80%',
    backgroundColor: '#A8A196',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  forgotPasswordBtn: {
    width: '80%',
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
  },
  loginText: {
    color: 'white',
  },
  forgotPasswordText: {
    color: 'grey',
    textDecorationLine: 'underline',
  },
  registerBtn: {
    marginTop: 10,
  },
  registerText: {
    color: 'grey',
  },
});