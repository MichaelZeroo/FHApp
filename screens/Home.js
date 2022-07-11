import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'

const Home = (App) => {



  const foodOrdering = () => App.navigation.navigate("FoodOrdering")
  const preAdmission = () => App.navigation.navigate("PreAdmission")
  const survey = () => App.navigation.navigate("Survey")
  const map = () => App.navigation.navigate("Map")
  const aboutUs = () => App.navigation.navigate("AboutUs")
  const billRequest = () => App.navigation.navigate("BillRequest")

  return (

    <ScrollView  style={styles.scroll}>

      <Text style={[styles.header1]}>Franklin Hospital</Text>
      <Text style={[styles.header2]}>Welcome</Text>

    <View  style={styles.container}>

      <TouchableOpacity
     onPress={foodOrdering}
      style={[styles.button]}>
      <View style={styles.block}>

      <Text style={[styles.title1]}>Food</Text>

      </View>
      </TouchableOpacity>
      
      <TouchableOpacity
      onPress={preAdmission}
      style={[styles.button]}>
      <View style={styles.block}>

      <Text style={[styles.title1]}>Pre Admission Form</Text>

      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={billRequest}
      style={[styles.button]}>
      <View style={styles.block}>
        <Text style={[styles.title1]}>Bill Request</Text>

      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={map}
      style={[styles.button]}>
      <View style={styles.block}>

      <Text style={[styles.title1]}>Map</Text>

      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={survey}
      style={[styles.button]}>
      <View style={styles.block}>

      <Text style={[styles.title1]}>Survey</Text>

      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={aboutUs}
      style={[styles.button]}>
      <View style={styles.block}>

      <Text style={[styles.title1]}>About Us</Text>

      </View>
      </TouchableOpacity>
      
    </View>


    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
block:{
backgroundColor: '#33838c',
height: 150,
width: 160,
margin: 10,
borderRadius: 10,
justifyContent: 'center',
    alignItems: 'center',
},
header1:{
fontSize: 30,
},
header2:{
  fontSize: 25,
  },
  title1:{
    color: 'white',
  },
})