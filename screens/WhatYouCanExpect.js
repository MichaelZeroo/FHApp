import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const WhatYouCanExpect = () => {
  return (
    
    
    <ScrollView  contentContainerStyle={styles.scroll}>

        <View style={styles.banner}>
            <Text style={styles.bannerText}>What you can Expect</Text>
        </View>

        <Text style={styles.header1}>Here's what you can expect from Franklin Hospital:</Text>

        <Text style={styles.text1}>To make your stay as comfortable as possible, 
        all inpateint rooms have an ensuite and smart TV.
         They are centrally heated and air conditioned in the summer.</Text>

         <Text style={styles.text1}>Meals are provided by a local restaurant.
          They are of high standard and menus are overseen by a dietician. 
          We will provide a varied menu to meet the requirements of all our patients.
           Meals for visitors can be arranged at an addition cost if requested on admission.</Text>

           <Text style={styles.text1}>Visiting hours are 11am to 8pm but special arrangements can be made 
           with staff where that does not meet your personal needs.</Text>

           <Text style={styles.text1}>If you require suppport in limiting your visitors, please let us know. 
           We aim to ensure a restful and private environment for all our patients.</Text>


    </ScrollView>

   
  )
}

export default WhatYouCanExpect

const styles = StyleSheet.create({
scroll:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  header1:{
    fontSize: 24,
  padding: 10,
  fontWeight: '600',
  color: '#115367',
  },
  text1:{
    padding: 5,
  paddingLeft: 10,
  fontSize: 18,
  padding: 10,
  fontWeight: '400',
  color: 'black',
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
})