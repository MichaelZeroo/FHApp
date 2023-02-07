import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Picker } from "@react-native-picker/picker"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Checkbox from 'expo-checkbox'

const PatientHealthQuestionnaireP1 = () => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>

<View style={styles.banner}>
            <Text style={styles.bannerText}>2. Patient Health Questionnaire Section A</Text>
        </View>


      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} >


    <Text style={styles.text1}>IMPORTANT: Please return this form the Franklin Hospital</Text>

    <Text style={styles.text1}>The Hospital needs to receive all three forms at least one week prior to your admission.</Text>
    <Text style={styles.text1}>You can hand deliver, scan and email, or post the forms. If you post the forms, please allow 1-2 extra weeks for delivery.</Text>
    <Text style={styles.text1}>Please complete this questionnaire carefully as the information you supply helps us to provide you with the best and safest possible
      care during your stay at our hospital. The questionnaire has four sections:
    </Text>
    <Text style={styles.text1}>Section A: Your general health</Text>
    <Text style={styles.text1}>Section B: In preparation for you hospital admission</Text>
    <Text style={styles.text1}>Section C: In preparation for you procedure</Text>
    <Text style={styles.text1}>Section D: Your current medicines</Text>

    <Text style={styles.text1}>All questions in this questionnaire are about the persin being treasted at the hospital (the patient). If you are filling this out for the patient,
       only provide information relating to the patient's health</Text>

       <Text>SECTION A: YOUR GENERAL HEALTH</Text>

       <View style={styles.title}>
      <Text style={styles.titleText}>A1. MEDICAL PROCEDURE HEALTH ALERTS</Text>
    </View>
   
    <View style={styles.title2}>
    <Text style={styles.titleText2}>Do any of the folllowing apply to you?</Text>
    </View>

      <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q1: </Text>
      <Text style={styles.tableT}>Difficulty climbing more than a flight of stairs?</Text>
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
      placeholder='What restricts this activity?'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q2: </Text>
      <Text style={styles.tableT}>Motion sickness</Text>
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
      placeholder='Mild / Moderate / Severe, pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q3: </Text>
      <Text style={styles.tableT}>Jaw problems (difficulty opening mouth)</Text>
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
      <Text style={styles.tableQ}>Q4: </Text>
      <Text style={styles.tableT}>Problems with precious anaesthetic</Text>
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
      <Text style={styles.tableQ}>Q5: </Text>
      <Text style={styles.tableT}>Family history of problems with an anaesthetic</Text>
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
      <Text style={styles.tableQ}>Q6: </Text>
      <Text style={styles.tableT}>Pacemaker or heart valve replacement</Text>
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
      <Text style={styles.tableQ}>Q7: </Text>
      <Text style={styles.tableT}>Joint implants</Text>
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
      <Text style={styles.tableQ}>Q8: </Text>
      <Text style={styles.tableT}>Other implants or prostheses</Text>
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
      <Text style={styles.tableQ}>Q9: </Text>
      <Text style={styles.tableT}>Substance use or dependancy</Text>
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
      <Text style={styles.tableQ}>Q10: </Text>
      <Text style={styles.tableT}>Former smoker</Text>
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
      placeholder='When did you quit?'
      style={styles.input}
      />
      </View>
            </View>


            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q11: </Text>
      <Text style={styles.tableT}>Current on smoking cessation streatment</Text>
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
      <Text style={styles.tableQ}>Q12: </Text>
      <Text style={styles.tableT}>Current smoker</Text>
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
      placeholder='How manty per day?'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q13: </Text>
      <Text style={styles.tableT}>Pregant or possible pregnant</Text>
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
      placeholder='Approximate due date:'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q14: </Text>
      <Text style={styles.tableT}>Medic Alert breacelet or neckalce wearer</Text>
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
            <View style={styles.title}>
      <Text style={styles.titleText}>A2. YOUR MEDICAL CONDITIONS</Text>
    </View>
   
    <View style={styles.title2}>
    <Text style={styles.titleText2}>Do you currently have, or have you previously had, any of the following conditions?</Text>
    <Text>if YES, please pick any applicable options and prodive a comment</Text>
    </View>


            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q15: </Text>
      <Text style={styles.tableT}>Breathing conditions</Text>
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
        <Text  style={styles.tableT}>If yes pick one: asthma | wheeziness | shortness of breath | bronchitis | croup | emphysema | COPD</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q16: </Text>
      <Text style={styles.tableT}>Sleeping conditions</Text>
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
        <Text  style={styles.tableT}>If yes pick one: sleeplessness | severe snoring | obstructive sleep apnoea | CPAP used</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q17: </Text>
      <Text style={styles.tableT}>Heart conditions</Text>
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
        <Text  style={styles.tableT}>If yes pick one: palpitations | irregular heart beat | heart murmur | angiona | heart attack | chest pain | congestive heart failure | rheumatic fever</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q18: </Text>
      <Text style={styles.tableT}>Stroke or Transient Ischaemic Attack (TIA)</Text>
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
      <Text style={styles.tableQ}>Q19: High blood pressure or blood pressure controlled with medication</Text>
      <Text style={styles.tableT}></Text>
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
      <Text style={styles.tableQ}>Q20: </Text>
      <Text style={styles.tableT}>Blood clots</Text>
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
        <Text  style={styles.tableT}>If yes pick one: deep vein thrombosis (DVT) | pulmonary em bolus (PE)</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q21: </Text>
      <Text style={styles.tableT}>Family history of blood clots</Text>
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
      <Text style={styles.tableQ}>Q22: </Text>
      <Text style={styles.tableT}>Blood or bleeding condition</Text>
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
        <Text  style={styles.tableT}>If yes pick one: anaemia | bruising</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q23: </Text>
      <Text style={styles.tableT}>Family history of blood or bleeding conditions</Text>
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
      <Text style={styles.tableQ}>Q24: </Text>
      <Text style={styles.tableT}>Stomach and digestive conditions</Text>
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
        <Text  style={styles.tableT}>If yes pick one: indegestion | heartburn | acid reflux | hiatus hernia | peptic ulcer</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q25: </Text>
      <Text style={styles.tableT}>Bowel conditions</Text>
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
        <Text  style={styles.tableT}>If yes pick one: irratable bowel syndrome | constipation | bowel disease</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q26: </Text>
      <Text style={styles.tableT}>Liver disease</Text>
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
        <Text  style={styles.tableT}>If yes pick one: jaundice | hepatitis</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q27: </Text>
      <Text style={styles.tableT}>Kidney conditions</Text>
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
      <Text style={styles.tableQ}>Q28: </Text>
      <Text style={styles.tableT}>Diabetes</Text>
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
        <Text  style={styles.tableT}>If yes pick one: requiring insulin | requiring tablets | diet controlled</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q29: </Text>
      <Text style={styles.tableT}>Thyroid condition</Text>
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
      <Text style={styles.tableQ}>Q30: </Text>
      <Text style={styles.tableT}>Parkinson's disease</Text>
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
      <Text style={styles.tableQ}>Q31: </Text>
      <Text style={styles.tableT}>Epilepsy, seizures, blackouts or faintin</Text>
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
      <Text style={styles.tableQ}>Q32: </Text>
      <Text style={styles.tableT}>Migraines or sever headaches</Text>
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
      <Text style={styles.tableQ}>Q33: </Text>
      <Text style={styles.tableT}>Alzheimers or dementia</Text>
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
      <Text style={styles.tableQ}>Q34: </Text>
      <Text style={styles.tableT}>Mental function conditions</Text>
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
        <Text  style={styles.tableT}>If yes pick one: head injury | concussion | confusion or disorientation</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q35: </Text>
      <Text style={styles.tableT}>Mental health condition</Text>
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
      <Text style={styles.tableQ}>Q36: </Text>
      <Text style={styles.tableT}>Emotional condition</Text>
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
        <Text  style={styles.tableT}>If yes pick one: anxiety | phobia | post traumatic stress disorder (PTSD)</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q37: </Text>
      <Text style={styles.tableT}>Arthritis</Text>
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
      <Text style={styles.tableQ}>Q38: </Text>
      <Text style={styles.tableT}>Neck or back conditions</Text>
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
      <Text style={styles.tableQ}>Q39: </Text>
      <Text style={styles.tableT}>Gum or dental health condition</Text>
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
      <Text style={styles.tableQ}>Q40: </Text>
      <Text style={styles.tableT}>Tuberculosis (TB)</Text>
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
      <Text style={styles.tableQ}>Q41: </Text>
      <Text style={styles.tableT}>HIV and AIDS</Text>
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
      <Text style={styles.tableQ}>Q42: </Text>
      <Text style={styles.tableT}>Infection or treatment for resistant organisms</Text>
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
        <Text  style={styles.tableT}>If yes pick one: MRSA | ESBL | VRE | OTHER</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q43: </Text>
      <Text style={styles.tableT}>Cancer</Text>
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
        <Text  style={styles.tableT}>If yes, please specify and provide details of any recent treatment in the comment box below</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Comment'
      style={styles.input}
      />
      </View>
            </View>

            <View style={styles.table}>
        <View style={styles.textRow}>
      <Text style={styles.tableQ}>Q44: </Text>
      <Text style={styles.tableT}>Other condition(s) not listed above</Text>
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
        <Text  style={styles.tableT}>If yes, please specify in the comment box below</Text>
        <View styles={styles.containerInput}>
      <TextInput 
      placeholder='Pick one'
      style={styles.input}
      />
      </View>
            </View>

            


    </KeyboardAvoidingView>

    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default PatientHealthQuestionnaireP1

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
      height: 50,
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