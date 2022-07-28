import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Aboutus = () => {
  return (

    <ScrollView contentContainerStyle={styles.scroll}>


    <View style={styles.container}>
      <Text style={styles.header1}>Aboutus</Text>
      <Text style={styles.header2}>Proudly transforming healthcare in Franklin</Text>
      <Text style={styles.text1}>Franklin Hospital is New Zealand’s newest private hospital. It has been purpose-built to give the Franklin 
        community and surrounding areas greater access to some of New Zealand’s top specialists, and the ability to receive treatment closer to home. 
         The new facility offers surgical and endoscopy services, a new urgent care, family doctors, radiology, pharmacy and a café all under the same roof
      </Text>

      <Text style={styles.header2}>Hospital service</Text>

      <Text  style={styles.header3}>Franklin Hospital provides a range of services including:</Text>

    <Text style={styles.text1}>Gastroenterology</Text>
    <Text style={styles.text1}>Dr. Ravinder Ogra: Interventional and diagnostic endoscopy, bariatric balloon</Text>
    <Text style={styles.text1}> Orthopaedics</Text>
    <Text style={styles.text1}> Kevin Karpik: Hip, knee and general orthopaedics</Text>
    <Text style={styles.text1}>Cardiology</Text>
    <Text style={styles.text1}>Patrick Kay: Interventional and diagnostic cardiologist</Text>
    <Text style={styles.text1}>General surgery</Text>
    <Text style={styles.text1}>Gynaecology</Text>
    <Text style={styles.text1}>Dental</Text>
    <Text style={styles.text1}>Maxillofacial</Text>
    <Text style={styles.text1}>Plastics</Text>



<Text style={styles.header2}>Additional services</Text>

    </View>
    </ScrollView>
  )
}

export default Aboutus

const styles = StyleSheet.create({
  scroll:{
    flex: 1,
    backgroundColor: 'white',
    },
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  header1:{
    fontSize: 24,
  padding: 10,
  fontWeight: '600',
  color: '#115367',
  },
  header2:{
    fontSize: 18,
  padding: 10,
  fontWeight: '500',
  color: '#115367',
  },
  header3:{
    fontSize: 16,
  padding: 10,
  fontWeight: '500',
  color: '#115367',
  },
  text1:{
    fontSize: 14,
  padding: 5,
  paddingLeft: 10,
  fontWeight: '400',
  color: '#115367',
  }
})