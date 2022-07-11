import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Billrequest = () => {
  return (
    <View style={styles.container}>
      <Text>Billrequest</Text>
      <Text>If you have a bill left to pay, you can request your bill here and you will get an email with your bill</Text>
      <Text>Please enter these details to get your bill</Text>

      <View>
      <TextInput 
        placeholder='Name'
        style={styles.input}
        />

        <TextInput 
        placeholder='NHI Number'
        style={styles.input}
        />

      </View>

      <View>
      <TouchableOpacity
        onPress={() => {}}
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