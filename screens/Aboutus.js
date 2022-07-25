import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Aboutus = () => {
  return (
    <View style={styles.container}>
      <Text>Aboutus</Text>
      <Text>Proudly transforming healthcare in Franklin</Text>
      <Text>Franklin Hospital is New Zealand’s newest private hospital. It has been purpose-built to give the Franklin 
        community and surrounding areas greater access to some of New Zealand’s top specialists, and the ability to receive treatment closer to home. 
         The new facility offers surgical and endoscopy services, a new urgent care, family doctors, radiology, pharmacy and a café all under the same roof
      </Text>

      <Text>Hospital service</Text>

      <Text>Franklin Hospital provides a range of services including:</Text>

    <Text>Gastroenterology
Dr. Ravinder Ogra:
Interventional and diagnostic endoscopy, bariatric balloon
Orthopaedics
Kevin Karpik:
Hip, knee and general orthopaedics
Cardiology
Patrick Kay:
Interventional and diagnostic cardiologist
General surgery
Gynaecology
Dental
Maxillofacial
Plastics
</Text>

<Text>Additional services</Text>

    </View>
  )
}

export default Aboutus

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
})