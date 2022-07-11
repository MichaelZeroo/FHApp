import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Map from './screens/Map';
import Aboutus from './screens/Aboutus';
import Foodordering from './screens/Foodordering';
import Survey from './screens/Survey';
import Preadmission from './screens/Preadmission';
import Billrequest from './screens/Billrequest';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' >
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="AboutUs" component={Aboutus} />
      <Stack.Screen name="FoodOrdering" component={Foodordering} />
      <Stack.Screen name="Survey" component={Survey} />
      <Stack.Screen name="PreAdmission" component={Preadmission} />
      <Stack.Screen name="BillRequest" component={Billrequest} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}






const styles = StyleSheet.create({
});
