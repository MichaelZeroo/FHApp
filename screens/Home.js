import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, ScrollView, Image } from 'react-native'
import React from 'react'



const Home = (App) => {



  const foodOrdering = () => App.navigation.navigate("FoodOrdering")
  const preAdmission = () => App.navigation.navigate("PreAdmission")
  const survey = () => App.navigation.navigate("Survey")
  const map = () => App.navigation.navigate("Map")
  const aboutUs = () => App.navigation.navigate("AboutUs")
  const billRequest = () => App.navigation.navigate("BillRequest")
  const whatYouCanExpect = () => App.navigation.navigate("WhatYouCanExpect")
  const WhatYouNeedToDo = () => App.navigation.navigate("WhatYouNeedToDo")

  return (
    <View style={styles.screen}>
    
    <ScrollView  contentContainerStyle={styles.scroll}>

      <View style={styles.head}>
      <Text style={[styles.header1]}>Franklin Hospital</Text>
      <Text style={[styles.header3]}>Te Haumanu Kohekohe</Text>

      </View>

      <Text style={[styles.header2]}>Welcome</Text>

    <View  style={styles.container}>

    <TouchableOpacity
     onPress={whatYouCanExpect}
      style={[styles.button]}>
      <View style={styles.block}>

      <Text style={[styles.title1]}>What You Can Expect</Text>

      </View>
      </TouchableOpacity>

      <TouchableOpacity
     onPress={WhatYouNeedToDo}
      style={[styles.button]}>
      <View style={styles.block}>

      <Text style={[styles.title1]}>What You Need To Do</Text>

      </View>
      </TouchableOpacity>

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
        <Text style={[styles.title1]}>Request your bill</Text>

      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={map}
      style={[styles.button]}>
      <View style={styles.block}>

      <Text style={[styles.title1]}>Our Location</Text>

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

    </View>
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
    backgroundColor: 'white',
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
head:{
  width: '100%',
  backgroundColor: '#33838c',
  height: '20%',
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
header1:{
fontSize: 30,
fontWeight: '600',
color: 'white',
},
header2:{
  fontSize: 25,
  padding: 10,
  fontWeight: '500',
  },
  title1:{
    color: 'white',
    fontSize: 20,
  },
  scroll:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  header3:{
    fontSize: 16,
fontWeight: '600',
color: 'white',
  },
  screen:{
    flex: 1,
  },
})