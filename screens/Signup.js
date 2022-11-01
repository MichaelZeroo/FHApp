import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState} from 'react'
import { authentication } from '../firebase/firebaseconfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import logo from '../assets/logo_FHNobg-preview.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


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

    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>

    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>

    <KeyboardAvoidingView  style={styles.container} behavior="padding">


       
      <View style={styles.container2}>

      <Image source={logo} style={styles.logo} />

      <Text style={styles.header1}>Franklin Hospital</Text>

            <Text style={styles.header1}>Welcome</Text>

            <Text style={styles.header2}>Signup</Text>
      </View>

      <Text style={styles.header3}>If you do not have an account, please signup here</Text>


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
            <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

      </View>
      
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>

    
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10,
        backgroundColor: 'white',
    },
    scroll:{
      backgroundColor: 'white',
      paddingBottom: 150,
      flex: 1,
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
        fontSize:24,
        padding:10,
        fontWeight: 'bold',
    },
    container2:{
      width: '100%',
      justifyContent: 'center',
  alignItems: 'center',
    },
    header3:{
      color:'#115367',
      fontSize:18,
      paddingBottom:2,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 10,
  },
  logo:{
    height: 100,
    width: 100,
  }
})