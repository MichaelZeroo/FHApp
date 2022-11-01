import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, ScrollView, Image } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import logo from '../assets/logo_FHNobg-preview.png'
import arrow from '../assets/arrow.png'




const Home = (App) => {



  const foodOrdering = () => App.navigation.navigate("Order Food")
  const preAdmission = () => App.navigation.navigate("PreAdmission")
  const survey = () => App.navigation.navigate("Survey")
  const map = () => App.navigation.navigate("Location")
  const aboutUs = () => App.navigation.navigate("About Us")
  const billRequest = () => App.navigation.navigate("BillRequest")
  const whatYouCanExpect = () => App.navigation.navigate("WhatYouCanExpect")
  const WhatYouNeedToDo = () => App.navigation.navigate("WhatYouNeedToDo")

  return (
    
    
    <KeyboardAwareScrollView  contentContainerStyle={styles.scroll}>

      <View style={styles.head}>
      <Image source={logo} style={styles.logoheader} />
      <Text style={[styles.header1]}>Franklin Hospital</Text>
      <Text style={[styles.header3]}>Te Haumanu Kohekohe</Text>

      </View>

      <Text style={[styles.header2]}>Welcome</Text>

    <View  style={styles.container}>

    <TouchableOpacity
     onPress={whatYouCanExpect}
      style={[styles.button]}>
      <View style={styles.block}>
        <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.titlecontainer}>
      <Text style={[styles.title1]}>What You Can Expect</Text>
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={arrow} style={styles.arrow} />
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
     onPress={WhatYouNeedToDo}
      style={[styles.button]}>
      <View style={styles.block}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.titlecontainer}>
      <Text style={[styles.title1]}>What You Need To Do</Text>
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={arrow} style={styles.arrow} />
      </View>

      </View>
      </TouchableOpacity>

      <TouchableOpacity
     onPress={foodOrdering}
      style={[styles.button]}>
      <View style={styles.block}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.titlecontainer}>
      <Text style={[styles.title1]}>Patient Catering</Text>
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={arrow} style={styles.arrow} />
      </View>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity
      onPress={preAdmission}
      style={[styles.button]}>
      <View style={styles.block}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.titlecontainer}>
      <Text style={[styles.title1]}>Pre Admission Forms</Text>
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={arrow} style={styles.arrow} />
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={billRequest}
      style={[styles.button]}>
      <View style={styles.block}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.titlecontainer}>
      <Text style={[styles.title1]}>Request Your Bill</Text>
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={arrow} style={styles.arrow} />
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={map}
      style={[styles.button]}>
      <View style={styles.block}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.titlecontainer}>
      <Text style={[styles.title1]}>Our Location</Text>
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={arrow} style={styles.arrow} />
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={survey}
      style={[styles.button]}>
      <View style={styles.block}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.titlecontainer}>
      <Text style={[styles.title1]}>Patient Satisfaction Survey</Text>
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={arrow} style={styles.arrow} />
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={aboutUs}
      style={[styles.button]}>
      <View style={styles.block}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.titlecontainer}>
      <Text style={[styles.title1]}>About Us</Text>
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={arrow} style={styles.arrow} />
      </View>
      </View>
      </TouchableOpacity>

      
      
    </View>


    </KeyboardAwareScrollView>

  
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
  },
block:{
backgroundColor: '#33838c',
height: 125,
width: '90%',
margin: 10,
borderRadius: 10,
alignItems: 'center',
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 15,
    flexDirection: 'row'
},
head:{
  width: '100%',
  backgroundColor: '#33838c',
  padding: 20,
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
  logoheader:{
    width: 75, 
    height: 75,
    margin: 10, 
  },
  logo:{
    width: 50, 
    height: 50,
    margin: 10, 
  },
  arrow:{
    width: 40,
    height: 40,
  },
  logocontainer:{
    
    flex: 1,
  },
  arrowcontainer:{
flex: 1,
  },
  titlecontainer:{
    flex: 3,
  }

})