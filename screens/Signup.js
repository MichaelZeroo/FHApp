import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { authentication } from '../firebase/firebaseconfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const RegisterUser = ()=>{
      createUserWithEmailAndPassword(authentication,email,password)
      .then((re)=>{
          console.log(re);
      })
    .catch((re)=>{
      console.log("error");
      })
      
}

  return (

    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>

    <KeyboardAvoidingView  style={styles.container} behavior="padding">
       
      <View>
            <Text style={styles.header2}>Register</Text>
      </View>

      <View styles={styles.inputContainer}>
        <TextInput 
        placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
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
        onPress={RegisterUser}
        style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

      </View>
      
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

    
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor:'white',
        width: 325,  
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#bbbbbb',
    },
    button:{
        backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    },
    buttonContainer:{
        width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    
    },
    buttonOutline:{
        backgroundColor: '#54b3af',
    marginTop: 5,
    borderColor: 'transparent',
    borderWidth: 2,
    },
    buttonOutlineText:{
        color: 'white',
    fontWeight: '700',
    fontSize: 16,
    },
    header2:{
      fontSize: 40,
      paddingBottom: 20, 
      color:'#115367',
      fontWeight: 'bold',
    }
})