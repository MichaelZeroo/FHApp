import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking'
import MapView, { Marker } from 'react-native-maps'
import { ScrollView } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const Map = () => {

  const openMap = () => {
         console.log('open directions')     
         if (Platform.OS === "ios") { 
          Linking.openURL('http://maps.google.com/maps?daddr=-37.207602612692604, 174.90884621225135') }     
          else { Linking.openURL('http://maps.apple.com/maps?daddr=-37.207602612692604, 174.90884621225135'); }   };

          



  return (

    


 <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>


      
<View style={styles.banner}>
            <Text style={styles.bannerText}>Our Location</Text>
        </View>

    <View style={styles.container}>


    <Text style={styles.header2}>You can find us at:</Text>

<Text style={styles.header2}>12 Glasgow Road Pukekohe 2120</Text>


      <Text style={styles.header2}>Map</Text>
      

      <View  style={styles.mapContainer}>
      <MapView
      style={styles.map}
    initialRegion={{
      latitude: -37.207602612692604,
      longitude: 174.90884621225135,
      latitudeDelta: 0.0052,
      longitudeDelta: 0.0051,
    }}
  >
      <Marker coordinate={{
      latitude: -37.207602612692604,
      longitude: 174.90884621225135,
      }} />

  </MapView>

  </View>

  <Text style={styles.header2}>Need Directions to Franklin Hospital?</Text>

  <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={openMap}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Directions</Text>
        </TouchableOpacity>
      </View>


    </View>
   </KeyboardAwareScrollView> 

    
  )
}

export default Map

const styles = StyleSheet.create({
  scroll:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  
  container:{
    backgroundColor: 'white',
    flex: 1,
    height: 600,
  },
  map:{
    width: '80%',
    height: '100%',
  },
  mapContainer:{
    width: '100%',
    height: '60%',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#33838c',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  buttonText:{
    fontWeight: 'bold',
    color: 'white',
  },  
  buttonContainer:{
    width: '100%',
    alignItems: 'center',
    padding: 10,
    height: '30%',
  },
  header2:{
    fontSize: 20,
  padding: 15,
  fontWeight: '500',
  color: '#115367',

  },
  header1:{
    fontSize: 24,
  padding: 10,
  fontWeight: '600',
  color: '#115367',
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