import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Keyboard, Alert  } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { StorageAccessFramework } from 'expo-file-system';
import PDFReader from 'rn-pdf-reader-js-no-loading'
import Constants from 'expo-constants'
import WebView from 'react-native-webview';
import { render } from 'react-dom';




const Preadmission = (App) => {

 
  const PatientAdmissionForm = () => App.navigation.navigate("PatientAdmissionForm")

  const PatientHealthQuestionnaireP1 = () => App.navigation.navigate("PatientHealthQuestionnaireP1")
  const PatientHealthQuestionnaireP2 = () => App.navigation.navigate("PatientHealthQuestionnaireP2")
  const PatientHealthQuestionnaireP3 = () => App.navigation.navigate("PatientHealthQuestionnaireP3")
  const PatientHealthQuestionnaireP4 = () => App.navigation.navigate("PatientHealthQuestionnaireP4")



 

  return (

    


    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>


    <View style={styles.banner}>
            <Text style={styles.bannerText}>Pre Admission Forms</Text>
        </View>

<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} >

      <View style={styles.container1}>
        <Text  style={styles.header1}>Forms to Fill Out</Text>
      </View>

      <View style={styles.container1}>
        <Text  style={styles.text}>We need you to complete three admission forms</Text>
        <Text  style={styles.text}>We appreciate it can be a chore to complete forms, but to provide safe and personalised care we need current information from you.</Text>
      </View>

      <View style={styles.container1}>
        <Text  style={styles.text1}>1: Agreement to treatment</Text>
        <Text  style={styles.text1}>2: Patient admission form</Text>
        <Text  style={styles.text1}>3: Pateint health questionanaire</Text>
      </View>

      <View style={styles.container2}>
        <Text  style={styles.text2}>We need to recieve your completed forms before your admission</Text>
        <Text></Text>
        <Text  style={styles.text2}>To enable us to properly prepare for your admission, we need to receive all three completed forms at least one week prior to your admission.</Text>
        <Text></Text>
        <Text  style={styles.text2}>You can hand deliver, scan and email, or post the forms.</Text>
        <Text></Text>
        <Text  style={styles.text2}>If you post the forms allow 1-2 weeks extra for delivery</Text>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={PatientAdmissionForm}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Patient Admission Form</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={PatientHealthQuestionnaireP1}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Patient Health Questionnaire Section A</Text>
        </TouchableOpacity>
     

      <TouchableOpacity
        onPress={PatientHealthQuestionnaireP2}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Patient Health Questionnaire Section B</Text>
        </TouchableOpacity>
       

        <TouchableOpacity
        onPress={PatientHealthQuestionnaireP3}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Patient Health Questionnaire Section C</Text>
        </TouchableOpacity>
        

        <TouchableOpacity
        onPress={PatientHealthQuestionnaireP4}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Patient Health Questionnaire Section D</Text>
        </TouchableOpacity>
        
        </View>
      


    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>


    </KeyboardAwareScrollView>

  )
}



export default Preadmission

const styles = StyleSheet.create({
  scroll:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  container:{
    flex: 1,
    backgroundColor: 'white',
    
  },
  banner:{
    width: '100%',
    backgroundColor: '#33838c',
    height: 125,
    justifyContent: 'center',
    borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
  },
  bannerText:{
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    padding: 20,
  },
  container1:{
    padding: 10,
  },
  container2:{
    padding: 10,
    backgroundColor: '#e8f7f4',
    margin: 10,
  },
  header1:{
    fontSize: 26,
    fontWeight: '600',
    color: '#115367',
  },
  text:{
    fontSize: 20,
  fontWeight: '400',
  color: 'black',
  },
  text1:{
    fontSize: 20,
  fontWeight: '400',
  color: 'black',
  },
  text2:{
    fontSize: 18,
  fontWeight: '600',
  color: 'black',
  },
  button:{
    backgroundColor: '#33838c',
width: '70%',
padding: 15,
borderRadius: 10,
alignItems: 'center',
marginBottom: 10,
},
buttonText:{
    color: 'white',
fontWeight: '700',
fontSize: 16,
},
buttonContainer:{
  width: '100%',
justifyContent: 'center',
alignItems: 'center',
marginTop: 40,

},
})