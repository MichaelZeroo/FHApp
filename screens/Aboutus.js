import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Aboutus = () => {
  return (

   
   <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>


<View style={styles.banner}>
            <Text style={styles.bannerText}>About Us</Text>
        </View>


    <View style={styles.container}>

    <Text style={styles.header1}>Proudly transforming healthcare in Franklin</Text>
<Text style={styles.header3}>Franklin Hospital is New Zealand’s newest private hospital. 
It has been purpose-built to give the Franklin community and surrounding areas greater 
access to some of New Zealand’s top specialists, and the ability to receive treatment closer to home. </Text>

<Text style={styles.header3}>The new facility offers surgical and endoscopy services, a new urgent care, family doctors, radiology, pharmacy and a café all under the same roof</Text>
      
    <Text style={styles.header3}>If you would like to find out more about us, Please refer to our website at:</Text>
    <Text style={styles.header2} onPress={() => Linking.openURL('https://www.franklinhospital.co.nz/about/')}>www.franklinhospital.co.nz</Text>



    </View>
   </KeyboardAwareScrollView> 
  )
}

export default Aboutus

const styles = StyleSheet.create({
  scroll:{
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 150,
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
    fontSize: 20,
  padding: 10,
  fontWeight: '500',
  color: 'blue',
  },
  header3:{
    fontSize: 20,
  padding: 10,
  fontWeight: '500',
  color: 'black',
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