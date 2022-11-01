import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Keyboard, Alert  } from 'react-native'
import React, { useState } from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Foodordering = () => {

  const menu = [
    {
      ChickenMeal: [
        ['Chicken, Rice, Vegetables'],
      ],
    },
    {
      menuItem2: [['Item Description']],
    },
    {
      menuItem3: [['Item Description']],
    },
    {
      menuItem4: [['Item Description']],
    },
    {
      menuItem5: [['Item Description']],
    },
    {
      menuItem6: [['Item Description']],
    },
    {
      menuItem7: [['Item Description']],
    },
  ];

  const alert = () =>
    Alert.alert(
      "Place order",
      "Are you sure you want to place an order for this meal?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelled"),
          style: "cancel"
        },
        { text: "Place Order", onPress: () => console.log("Order Placed") }
      ]
    );

  return (


    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>


<View style={styles.banner}>
            <Text style={styles.bannerText}>Franklin Hospital Patient Catering</Text>
        </View>

<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} >

    <Text style={styles.header1}>Select one of the following meals and an order will be placed for you.</Text>

    <View style={styles.headerAlign}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Breakfast</Text>
    </View>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Cereal</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Dairy</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Fruit</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Bakery</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Hot Drink</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.headerAlign}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Lunch</Text>
    </View>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Monday - select one</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Tuesday - select one</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Wednesday - select one</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Thursday - select one</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Friday</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.headerAlign}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Dinner Menu/Monday-Friday</Text>
    </View>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Monday</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Tuesday</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Wednesday</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Thursday</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Friday</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>Dessert Options</Text>
      <Text style={styles.text1}>Select from-</Text>
    </View>

    <View style={styles.headerAlign}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Morning Tea</Text>
    </View>
    </View>

    <View style={styles.headerAlign}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Afternoon Tea</Text>
    </View>
    </View>

    <View style={styles.headerAlign}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Texture Modified</Text>
    </View>
    </View>
    
    
    {menu.map((item, index) => (
  <TouchableOpacity onPress={alert} style={styles.menuView} key={index.toString()}>
    <Text style={styles.textDescription}>
      {Object.keys(item)[0]}:{' '}
      {item[Object.keys(item)[0]].map((time, timeIndex) => (
        <Text key={timeIndex}>
          {time[0]}
          {'  '}
          {time[1]}{' '}
        </Text>
      ))}
    </Text>
  </TouchableOpacity>
))}
    
    
    
    
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>


    </KeyboardAwareScrollView>
  )
}

export default Foodordering

const styles = StyleSheet.create({
  scroll:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  container:{
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    
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
  menuView:{
    width: '100%',
    height: 75,
    backgroundColor: '#e8f7f4',
    borderColor: '#33838c',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    
  },
  textDescription:{
    fontSize: 18,
  },
  header1:{
    fontSize: 20,
  padding: 10,
  fontWeight: '500',
  color: '#115367',
  },
  headerContainer:{
    width: '90%',
    backgroundColor: '#663366',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontSize: 24,
    fontWeight: '500',
    color: 'white'
  },
  subHeader:{
    padding: 10,
  },
  subHeaderText:{
    color: '#663366',
    fontSize: 18,
    fontWeight: '400'
  },
  headerAlign:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

})