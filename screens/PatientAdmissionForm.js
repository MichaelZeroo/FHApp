import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState, useRef } from 'react'
import { Picker } from "@react-native-picker/picker"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Checkbox from 'expo-checkbox'
import Signature from 'react-native-signature-canvas';
import { WebView } from 'react-native-webview';



const PatientAdmissionForm = () => {

  const signatureRef = useRef(null);

  const saveSignature = () => {
    signatureRef.current.saveImage();
  };

  const resetSignature = () => {
    signatureRef.current.resetImage();
  };
    
  return (
    
    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>

<View style={styles.banner}>
            <Text style={styles.bannerText}>1. Patient admission form</Text>
        </View>

      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} >

    <Text style={styles.text2}>IMPORTANT: Please return this completed form to Franklin Hospital</Text>

    <View style={styles.title}>
      <Text style={styles.titleText}>PERSONAL AND ADMINISTRATION DETAILS</Text>
    </View>

    <Text  style={styles.header2}>Surname/family name:</Text>

      <View styles={styles.containerInput}>

        <TextInput 
        placeholder='Surname'
        style={styles.input}
        />
        </View>

        <Text  style={styles.header2}>First name:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='First name'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Preferred name:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Preferred name'
  style={styles.input}
  />
  </View>

  <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Mr</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Mrs</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Ms</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Miss</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Mstr</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Dr</Text>
        </View>

        <Text  style={styles.header2}>Date of birth:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='dd/mm/yyyy'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Gender:</Text>

  <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Male</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Female</Text>
        </View>

        <Text  style={styles.header2}>NHI:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='NHI'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Residential Address:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Residential address'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Postal address:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Postal address'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Email address:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Email address'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Telephone:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Home'
  style={styles.input}
  />
  </View>

  <View styles={styles.containerInput}>

  <TextInput 
  placeholder='Business'
  style={styles.input}
  />
  </View>

  <View styles={styles.containerInput}>

  <TextInput 
  placeholder='Mobile'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>New Zealand Resident:</Text>

  <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>

  
  <Text  style={styles.header2}>Ethnicity:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Ethnicity'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>General Practitioner:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='General Practitioner Name '
  style={styles.input}
  />
  </View>

  
  <Text  style={styles.header2}>General Practitioner telephone:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='General Practitioner telephone'
  style={styles.input}
  />
  </View>


  <Text  style={styles.header2}>General Practitioner Medical Centre:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='General Practitioner Medical Centre'
  style={styles.input}
  />
  </View>

    <Text style={styles.text2}>NEXT OF KIN/CONTACT PERSON</Text>

    
  <Text  style={styles.header2}>Name:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Name'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Relationship to patient:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Relationship to patient'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Address:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Address'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Telephone:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Telephone'
  style={styles.input}
  />
  </View>
  

    <View style={styles.title}>
      <Text style={styles.titleText}>PAYMENT DETAILS</Text>
    </View>

    <Text  style={styles.text2}>How will your procedure be paid for? Tick and complete as many as applies:</Text>

    <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Health insurance</Text>
        </View>

    <Text  style={styles.header2}>Name of insurer:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Name of insurer'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Insurance plan name:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Insurance plan name'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Membership No:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Membership No'
  style={styles.input}
  />
  </View>

  <Text style={styles.text2}>Have you obtained 'prior approval' for payment:</Text>

    <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Yes</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>No</Text>
        </View>

        <Text  style={styles.header2}>Approval No:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Approval No'
  style={styles.input}
  />
  </View>

  <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>ACC - personal expenses such as telephone calls are excluded</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>DHB - personal expenses such as telephone calls are excluded</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Paid personally - If you are paying for the procedure yourself, you may be asked to pay 
        an estimated deposit 3-5 days before admission. the balamnnce of you account must be settled on discharge.</Text>
        </View>

        <Text  style={styles.header2}>I will pay my account by:</Text>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>EFTPOS</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Credit card</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Debit card</Text>
        </View>
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox}/>
        <Text style={styles.text1}>Internet banking</Text>
        </View>

        <Text  style={styles.header2}>For Internet banking:</Text>
        <Text  style={styles.header2}>Payee: Franklin Private Hospital Limited</Text>
        <Text  style={styles.header2}>Bank a/c: 12-3109-0123585-00</Text>
        <Text  style={styles.header2}>Particulars: Patient name</Text>
        <Text  style={styles.header2}>Code: Date of Surgery e.g 12 September 2021</Text>
        <Text  style={styles.header2}>Reference: Invoice number</Text>




    <View style={styles.title}>
      <Text style={styles.titleText}>AGREEMENT</Text>
    </View>


    <View>
      <Text style={styles.text2}>I agree to settle my hospital account in full at the time of my discharge when personally
        paying my account or where I do not have prior approval' from my insurer. I understand I am responsible for any outstanding 
        balance if my procedure is not fully covered by insurance, ACC or other contract.</Text>

        <Text style={styles.text2}>I give permission for Franklin Hospital to obtain any information relating to the approval/claim for this admission from the relevant funders, 
          and I authorise that person or organisation to disclose such information to Franklin Hospital. 
          I accept that, in the event my hospital account is not met, Franklin Hospital reserves the right to add all costs of collection to this account.</Text>

          <Text style={styles.text2}>I give permission to Franklin Hospital or any health professional involved in my care for this admission to hospital,
             to access health information about me that is relevant to my current treatment, which may be held by Franklin Hospital,
              other health professionals or other health organisations. I understand that other clinical team members such as student
               nurses and qualified medical trainees may have supervised involvement with my care and that I have the right to decline 
               their presence or contribution to my care delivery.</Text>
               
          <Text style={styles.text2}>I understand the admitting Surgeon, Anaesthetist and other Doctors or health professionals using Franklin Hospital facilities are independent and not employees of Franklin Hospital,
             with respect to both my treatment, care and account payment. I accept that this agreement is covered by New Zealand law. The details above have been completed by:</Text>
    </View>

    <Text  style={styles.header2}>Name:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='Name'
  style={styles.input}
  />
  </View>

  <Text  style={styles.header2}>Date:</Text>

<View styles={styles.containerInput}>

  <TextInput 
  placeholder='dd/mm/yyyy'
  style={styles.input}
  />
  </View>


  <Text  style={styles.header2}>If not patient, state relationship to patient:</Text>

    <View>
  <TextInput 
  placeholder='Name'
  style={styles.input}
  />
  </View>

  <View style={styles.signatureView}>
  <Signature
        ref={signatureRef}
        onSaveEvent={saveSignature}
        onDragEvent={resetSignature}
        style={styles.signature}
      />
      </View>

    

    </KeyboardAvoidingView>

    </TouchableWithoutFeedback>
    
    </KeyboardAwareScrollView>

      
      

    
  )
}

export default PatientAdmissionForm

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
  title:{
    width: '100%',
    height: 50,
    backgroundColor: '#54b3af',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  titleText:{
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  header2:{
    color:'#115367',
    fontSize:18,
    paddingTop: 20, 
    padding: 10,
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
checkboxView:{
  flexDirection: 'row',
  paddingTop: 15,
},
text1:{
  fontSize: 18,
fontWeight: '500',
color: '#115367',
paddingLeft: 5,
},
text2:{
  fontSize: 20,
  fontWeight: '400',
  color: '#115367',
  padding: 5,
  paddingTop: 10,
},
signature: {
  flex: 1,
  borderColor: '#000',
  borderWidth: 1,
},
signatureView:{
  flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 400,
},
})