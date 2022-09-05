import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as Linking from 'expo-linking'
import Checkbox from 'expo-checkbox'





const Billrequest = () => {

  const sendMail = async () => {

    try {

       const recipient = "michaelsngh99@gmail.com"
       const title = "Bill Request"
       const body = "Please provide your Name and NHI Number"

      const url = `mailto:${recipient}?cc=&subject=${title}&body=${body}`;
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  const [endoscopyCheck, setEndoscopyChecked] = useState(false);
  const [orthopaedicCheck, setOrthopaedicChecked] = useState(false);
  const [generalSurgeryCheck, setGeneralSurgeryChecked] = useState(false);
  const [plasticSurgeryCheck, setPlasticSurgeryChecked] = useState(false);
  const [gynaecologyCheck, setGynaecologyChecked] = useState(false);
  const [dentalCheck, setDentalChecked] = useState(false);





  
  return (

    <ScrollView  contentContainerStyle={styles.scroll}>


    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} behavior="padding">

    


    

    <View style={styles.banner}>
            <Text style={styles.bannerText}>Request Bill</Text>
        </View>

        <View style={styles.container1}>
    
      <Text style={styles.header2}>If you have a bill left to pay, you can request your bill here and you will get an email with your bill</Text>
      <Text style={styles.header2}>Please enter these details to get your bill</Text>

      <Text style={styles.header2}>Full name:</Text>

      <View styles={styles.containerInput}>
      <TextInput 
        placeholder='Full name'
        value={{}}
        onChangeText={{}}
        style={styles.input}
        />
        </View>

      <Text style={styles.header2}>Date of birth:</Text>

      <View styles={styles.containerInput}>
      <TextInput 
        placeholder='Date of birth'
        value={{}}
        onChangeText={{}}
        style={styles.input}
        />
        </View>

      <Text style={styles.header2}>NHI Number:</Text>

      <View styles={styles.containerInput}>
      <TextInput 
        placeholder='NHI Number'
        value={{}}
        onChangeText={{}}
        style={styles.input}
        />
        </View>

        <Text style={styles.header2}>Please check the procedures which apply to you:</Text>


        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox} value={endoscopyCheck} onValueChange={setEndoscopyChecked} />
        <Text style={styles.text1}>Endoscopy</Text>
        </View>
        
        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox} value={orthopaedicCheck} onValueChange={setOrthopaedicChecked} />
        <Text style={styles.text1}>Orthopaedic</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox} value={generalSurgeryCheck} onValueChange={setGeneralSurgeryChecked} />
        <Text style={styles.text1}>General Surgery</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox} value={plasticSurgeryCheck} onValueChange={setPlasticSurgeryChecked} />
        <Text style={styles.text1}>Plastic Surgery</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox} value={gynaecologyCheck} onValueChange={setGynaecologyChecked} />
        <Text style={styles.text1}>Gynaecology</Text>
        </View>

        <View style={styles.checkboxView}>
        <Checkbox style={styles.checkbox} value={dentalCheck} onValueChange={setDentalChecked} />
        <Text style={styles.text1}>Dental</Text>
        </View>
       

      <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={sendMail}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </View>

    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

    </ScrollView>
  )
}

export default Billrequest

const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: 'white',
  
},
header:{
  color:'#115367',
  fontSize:40,
  paddingBottom:10,
  paddingLeft: 0,
  paddingRight: 10,
  fontWeight: 'bold',
},
header2:{
  color:'#115367',
  fontSize:20,
  paddingTop: 10, 
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
buttonContainer:{
        width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    
    },
    scroll:{
      backgroundColor: 'white',
      paddingBottom: 150,
    },
    checkboxView:{
      flexDirection: 'row',
      paddingTop: 15,
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
  containerInput:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: 'black',
},
text1:{
  fontSize: 18,
fontWeight: '500',
color: '#115367',
paddingLeft: 5,
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

})