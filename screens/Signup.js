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
       
      <View style={styles.container2}>

      <Text style={styles.header2}>Franklin Hospital</Text>

            <Text style={styles.header2}>Register</Text>
      </View>

      <View>
            <Text style={styles.header3}>Email:</Text>
        </View>

      <View styles={styles.inputContainer}>
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

<View styles={styles.inputContainer}>
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
        style={[styles.button]}>
            <Text style={styles.buttonText}>Register</Text>
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
        padding: 10,
        backgroundColor: 'white',
    },
    inputContainer:{
        width: '100%'
    },
    input:{
        backgroundColor:'white',
        width: '100%',  
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#bbbbbb',
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
    header2:{
      fontSize: 40,
      paddingBottom: 20, 
      color:'#115367',
      fontWeight: 'bold',
    },
    container2:{
      width: '100%',
    },
    header3:{
      color:'#115367',
      fontSize:16,
      paddingBottom:2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      
  },
})