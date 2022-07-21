import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking'
import MapView, { Marker } from 'react-native-maps'


const Map = () => {

  const openMap = () => {
         console.log('open directions')     
         if (Platform.OS === "ios") { 
          Linking.openURL('http://maps.google.com/maps?daddr=-37.207602612692604, 174.90884621225135') }     
          else { Linking.openURL('http://maps.apple.com/maps?daddr=-37.207602612692604, 174.90884621225135'); }   };

          



  return (
    <View style={styles.container}>

      <Text style={styles.header2}>Need Directions to Franklin Hospital?</Text>
      <Text style={styles.header1}>Map</Text>
      

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

  <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={openMap}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Directions</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
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
    height: '15%',
    alignItems: 'center',
    padding: 10,
  },

})