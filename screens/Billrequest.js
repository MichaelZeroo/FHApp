import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking'



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

  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bill request</Text>
      <Text style={styles.header2}>If you have a bill left to pay, you can request your bill here and you will get an email with your bill</Text>
      <Text style={styles.header2}>Please enter these details to get your bill</Text>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={sendMail}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Send Details</Text>
        </TouchableOpacity>
      </View>

    </View>
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
  paddingBottom:20,
  paddingLeft: 20,
  paddingRight: 20,
  fontWeight: 'bold',
},
header2:{
  color:'#115367',
  fontSize:20,
  padding:10,
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
})