import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Picker } from "@react-native-picker/picker"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Checkbox from 'expo-checkbox'


const PatientHealthQuestionnaireP2 = () => {

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>

<View style={styles.banner}>
            <Text style={styles.bannerText}>2. Patient Health Questionnaire Section B</Text>
        </View>


      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} >

    <Text>SECTION B: IN PREPERATION FOR YOUR HOSPITAL ADMISSION</Text>
    
    <View style={styles.title}>
      <Text style={styles.titleText}>B1. YOUR ALLERGIES, SENSITIVITIES OR INTOLERANCES</Text>
    </View>
   
    <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q45: </Text>
      <Text style={styles.tableT}>Are you allergic to latex?</Text>
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
      <Text style={styles.tableQ}>Q46: </Text>
      <Text style={styles.tableT}>Do you have any other allergies, sensitivities or intolerances?</Text>
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
        <Text  style={styles.tableT}>If Yes: please specify and describe the reaction using the box below</Text>
        <Text  style={styles.tableT}>Skin related item (example: Plasters)</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Item'
      style={styles.input}
      />
      </View>
      <Text  style={styles.tableT}>Skin related reaction (example: Rash)</Text>
      <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Reaction'
      style={styles.input}
      />
      </View>
      <Text  style={styles.tableT}>Medicine related item</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Item'
      style={styles.input}
      />
      </View>
      <Text  style={styles.tableT}>Medicine related reaction</Text>
      <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Reaction'
      style={styles.input}
      />
      </View>
      <Text  style={styles.tableT}>Food related item</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Item'
      style={styles.input}
      />
      </View>
      <Text  style={styles.tableT}>Food related reaction</Text>
      <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Reaction'
      style={styles.input}
      />
      </View>
      <Text  style={styles.tableT}>Other related item</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Item'
      style={styles.input}
      />
      </View>
      <Text  style={styles.tableT}>Other related reaction</Text>
      <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Reaction'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.title}>
      <Text style={styles.titleText}>B2. YOU NEEDS AND PREFERENCES</Text>
    </View>
   
    <View style={styles.title2}>
    <Text style={styles.titleText2}>Please answer these questions to help us to tailor how we care for you. If you answer YES to any of these questions, we may contact you to discuss your specific needs.</Text>
    </View>

    <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q47: </Text>
      <Text style={styles.tableT}>Do you have a disability?</Text>
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
        <Text  style={styles.tableT}>If Yes: </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Specify'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q48: </Text>
      <Text style={styles.tableT}>Do you have difficulty understanding English?</Text>
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
        <Text  style={styles.tableT}>If Yes: </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Your preferred language'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q49: </Text>
      <Text style={styles.tableT}>Do you have any religous or spiritual needs you would like us to know about?</Text>
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
        <Text  style={styles.tableT}>If Yes: </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Specify'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q50: </Text>
      <Text style={styles.tableT}>Do you have any cultural or family needs you would like us to know about?</Text>
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
        <Text  style={styles.tableT}>If Yes:</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Specify'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q51: </Text>
      <Text style={styles.tableT}>Do you have any other special needs you would like us to know about?</Text>
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
        <Text  style={styles.tableT}>If Yes: </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Specify'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q52: </Text>
      <Text style={styles.tableT}>If your procedure requires removal of body parts, woulsd you like them returned to you if this is possible?</Text>
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
      <Text style={styles.tableQ}>Q53: </Text>
      <Text style={styles.tableT}>Do you have any dietary requirements?</Text>
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
        <Text  style={styles.tableT}>If Yes: vegeterian | vegan | diabetic | gluten free | halal | dairy free | other</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='vegeterian, vegan, diabetic, gluten free, halal, dairy free, other?'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q54: </Text>
      <Text style={styles.tableT}>Do you have any specific food dislikes? for allergies please refer to question 46</Text>
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
        <Text  style={styles.tableT}>If Yes: </Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='What restricts this activity?'
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