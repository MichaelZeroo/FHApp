import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { authentication } from '../firebase/firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import App from '../App' 
import { LinearGradient } from 'expo-linear-gradient'



 
const Login = (App) => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = () => App.navigation.navigate("SignUp")
  const home = () => App.navigation.navigate("Home")

  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re)=>{
        setIsSignedIn(true);
      })
      .then((re)=>{
        App.navigation.navigate("Home")
      })
      .catch((re)=> {
        console.log("error");
      })
  }


 

  return (

    
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} behavior="padding">

      <View  style={styles.container2} >
         
         <View>
            <Text style={styles.header1}>Franklin Hospital</Text>
        </View>

        <View>
            <Text style={styles.header1}>Welcome </Text>
        </View>

        <View>
            <Text style={styles.header2}>Login</Text>
        </View>

        <View>
            <Text style={styles.header3}>To use full functionality of this app, please login or register</Text>
        </View>

        </View>

        
       
      

      <View>
            <Text style={styles.header3}>Email:</Text>
        </View>

        <View styles={styles.containerInput}>

        <TextInput 
        placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        </View>

        <View>
            <Text style={styles.header3}>Password:</Text>
        </View>

        <View styles={styles.containerInput}>
           <TextInput 
        placeholder='Password'
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />       
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.or}>or</Text>

        <TouchableOpacity
        onPress={register}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={home}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
     

  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    containerInput:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       backgroundColor: 'black',
    },
    input:{
        backgroundColor:'white',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#bbbbbb', 
        width: '100%',  
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        
    },
    
    buttonContainer:{
        width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    
    },
    button:{
        backgroundColor: '#33838c',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    },
    buttonText:{
        color: 'white',
    fontWeight: '700',
    fontSize: 16,
    },
    header1:{
        color:'#115367',
        fontSize:40,
        paddingBottom:20,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    header2:{
        color:'#115367',
        fontSize:20,
        padding:10,
        fontWeight: 'bold',
        
    },
    header3:{
        color:'#115367',
        fontSize:16,
        paddingBottom:2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        
    },
    or:{
       color: '#bbbbbb',
       padding: 5,
    },
    container2:{
      width: '100%'
    }

})
