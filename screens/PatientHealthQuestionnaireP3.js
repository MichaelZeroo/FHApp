import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Picker } from "@react-native-picker/picker"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Checkbox from 'expo-checkbox'


const PatientHealthQuestionnaireP2 = () => {

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>

<View style={styles.banner}>
            <Text style={styles.bannerText}>2. Patient Health Questionnaire Section C</Text>
        </View>


      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} >

    <Text>SECTION C: IN PREPERATION FOR YOUR PROCEDURE</Text>
    
    <View style={styles.title}>
      <Text style={styles.titleText}>C1, MEDICAL PROCEDURE HISTORY</Text>
    </View>

    <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q55: </Text>
      <Text style={styles.tableT}>Have you previously had any procedures/operations or other hospital admissions?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
            </View>

    <View style={styles.title}>
      <Text style={styles.titleText}>C2, ANAESTHESIA CONSIDERATIONS</Text>
    </View>

    <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q56: </Text>
      <Text style={styles.tableT}>Have you had an anaesthetic before?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes please specify: general | spinal | epidural | unsure </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='general | spinal | epidural | other'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q57: </Text>
      <Text style={styles.tableT}>Do you have any of these dental features?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes please specify: upper denture | lower denture | crown(s) \ cap(s) | partial plate | loose or chipped teeth </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='upper denture | lower denture | crown(s) \ cap(s) | partial plate | loose or chipped teeth'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q58: </Text>
      <Text style={styles.tableT}>Do you drink alcohol?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes: How Much? </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='How much'
      style={styles.input}
      />
      </View>
            </View>

    <View style={styles.title}>
      <Text style={styles.titleText}>C3, PERSONAL ITEMS</Text>
    </View>

    <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q59: </Text>
      <Text style={styles.tableT}>Mobility aids such as walking stick or cane?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes: provide details </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='details'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q60: </Text>
      <Text style={styles.tableT}>Glasses or contact lenses?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes: provide details </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='details'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q61: </Text>
      <Text style={styles.tableT}>Hearing aids?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes: provide details </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='details'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q62: </Text>
      <Text style={styles.tableT}>Earrings or other piercing jewellery?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes: provide details </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='details'
      style={styles.input}
      />
      </View>
            </View>

    <View style={styles.title}>
      <Text style={styles.titleText}>C4, BLOOD CLOT AND INFECTION CONSIDERATIONS</Text>
    </View>

    <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q63: </Text>
      <Text style={styles.tableT}>Have you recently been on a long distance flight?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q64: </Text>
      <Text style={styles.tableT}>In the past 3 days, have you had, or been in contact with anyone who has had, vomiting or diarrhoea?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q65: </Text>
      <Text style={styles.tableT}>In the past 7 days, have you experienced flu-like symptoms, or been in contact with anyyone diagnosed with influenza?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q66: </Text>
      <Text style={styles.tableT}>in the past 4 weeks, have you had a head cold, throat or chest infection, or bronchitis?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q67: </Text>
      <Text style={styles.tableT}>In the past 12 months, have you travelled overseas, or been in a patient or employee in a hospital or rest home in New Zealand or overseas?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes: please specify </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='specify'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q68: </Text>
      <Text style={styles.tableT}>Do you ahve any boils, cuts, sores, scratches or other skin or urine infections?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
            </View>

    <View style={styles.title}>
      <Text style={styles.titleText}>C5, OTHER CONCERNS</Text>
    </View>

    <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q69: </Text>
      <Text style={styles.tableT}>Is there anything we need to know that you prefer not to write on this questionnaire? If Yes, please discuss with your nurse or medical specialist when you arrive at the hospital</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q70: </Text>
      <Text style={styles.tableT}>Do you have anxieties, concersn, or quistions you wish yo discuss before your pocedure?</Text>
      </View>
      <View style={styles.checkboxRow}>
      <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>
        </View>
        <Text  style={styles.tableT}>If Yes: who would you like to speak to? Your surgeon | your anaeshetist | a nurse | one of our admin staff </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Please choose one'
      style={styles.input}
      />
      </View>
            </View>
   
    
    
    
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