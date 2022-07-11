import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Map = () => {
  return (
    <View style={styles.container}>

      <Text>Map</Text>
      <Text>Need Directions to Franklin Hospital?</Text>

      <View>
      <TouchableOpacity
        onPress={() => {}}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Directions</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Map

const styles = StyleSheet.create({

})