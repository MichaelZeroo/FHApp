import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Picker } from "@react-native-picker/picker"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Checkbox from 'expo-checkbox'


const PatientHealthQuestionnaireP2 = () => {

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>

<View style={styles.banner}>
            <Text style={styles.bannerText}>2. Patient Health Questionnaire Section D</Text>
        </View>


      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} >

    <Text style={styles.text1}>SECTION D: YOUR CURRENT MEDICINE</Text>
   
   <Text style={styles.text1}>For your safety, it is extremely important that your doctors and nurses know precisely which medicines you are currently using.</Text>
   <Text style={styles.text1}>IMPORTANT INSTRUCTIONS</Text>
   <Text style={styles.text1}>1. List below all medicines you currentyl use, and bring them with you to the hospital in their original container.</Text>
   <Text style={styles.text1}>2. To ensure you are clear what to include, please use the MEDICINE REMINDERS table</Text>
   <Text style={styles.text1}>3. If you have a medication card or printout from your GP or pharmacist, please bring it with you to the hospital, as well as completing the list below</Text>

   <View style={styles.title}>
      <Text style={styles.titleText}>MEDICINE REMINDERS</Text>
    </View>

    <View style={styles.title2}>
    <Text style={styles.titleText2}>There are many types of medicine</Text>
    </View>

    <View>
      <Text>Prescription medicines</Text>
      <Text>herbal medicines</Text>
      <Text>natural medicines</Text>
      <Text>homeopathic remedies</Text>
      <Text>over-the-counter medicines</Text>
      <Text>vitamins</Text>
      <Text>supplements</Text>
      <Text>contraceptives</Text>
      <Text>steroids</Text>
    </View>

    <View style={styles.title2}>
    <Text style={styles.titleText2}>Medicines come in many forms</Text>
    </View>

    <View>
      <Text>tablets</Text>
      <Text>capsules</Text>
      <Text>inhalers</Text>
      <Text>drops</Text>
      <Text>syrups</Text>
      <Text>patches</Text>
      <Text>suppositories</Text>
      <Text>creams</Text>
      <Text>injections</Text>
      <Text>other liquids</Text>
    </View>

    <View style={styles.title2}>
    <Text style={styles.titleText2}>Medicines are ttaken for many common conditions</Text>
    </View>

    <View>
      <Text>heart disease</Text>
      <Text>high blood pressure</Text>
      <Text>blood thinning</Text>
      <Text>dietary deficiencies</Text>
      <Text>emotional conditions</Text>
      <Text>infections</Text>
      <Text>diabetes</Text>
      <Text>sleeplessness</Text>
      <Text>epilepsy</Text>
    </View>

    <View style={styles.title}>
      <Text style={styles.titleText}>D1. YOUR CURRENT MEDICATION</Text>
    </View>

    <Text>Patient to complete - list ALL medicines you currently use.</Text>

    


    
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default PatientHealthQuestionnaireP2

const styles = StyleSheet.create({
  scroll:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  container:{
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
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
  text1:{
    fontSize: 18,
  fontWeight: '500',
  color: '#115367',
  paddingLeft: 5,
  paddingBottom: 10,
  },
  checkboxView:{
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 10,
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
table:{
},
checkboxRow:{
flexDirection: 'row',
   
},
title:{
  width: '100%',
  height: 70,
  backgroundColor: '#54b3af',
  justifyContent: 'center',
  padding: 10,
  marginTop: 10,
},
titleText:{
  color: 'white',
  fontWeight: '600',
  fontSize: 16,
},
title2:{
  width: '100%',
  height: 40,
  backgroundColor: '#89cbc8',
  justifyContent: 'center',
  padding: 10,
  
  marginBottom: 10,
},
titleText2:{
  color: 'black',
  fontWeight: '600',
  fontSize: 16,
},
tableQ:{
  color: '#115367',
  fontWeight: '600',
  fontSize: 18,
},
tableT:{
  color: '#115367',
  fontWeight: '600',
  fontSize: 18,
},
textRow:{
  flexDirection: 'row',
},
})