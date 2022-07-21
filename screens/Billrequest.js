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
      <Text>Billrequest</Text>
      <Text>If you have a bill left to pay, you can request your bill here and you will get an email with your bill</Text>
      <Text>Please enter these details to get your bill</Text>

      <View>
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

})