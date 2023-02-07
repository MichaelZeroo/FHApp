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
import WhatYouNeedToDo from './screens/WhatYouNeedToDo';
import WhatYouCanExpect from './screens/WhatYouCanExpect';
import PatientAdmissionForm from './screens/PatientAdmissionForm';
import PatientHealthQuestionnaireP1 from './screens/PatientHealthQuestionnaireP1';
import PatientHealthQuestionnaireP2 from './screens/PatientHealthQuestionnaireP2';
import PatientHealthQuestionnaireP3 from './screens/PatientHealthQuestionnaireP3';
import PatientHealthQuestionnaireP4 from './screens/PatientHealthQuestionnaireP4';




const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' >
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Location" component={Map} />
      <Stack.Screen name="About Us" component={Aboutus} />
      <Stack.Screen name="Order Food" component={Foodordering} />
      <Stack.Screen name="Survey" component={Survey} />
      <Stack.Screen name="PreAdmission" component={Preadmission} />
      <Stack.Screen name="BillRequest" component={Billrequest} />
      <Stack.Screen name="WhatYouCanExpect" component={WhatYouCanExpect} />
      <Stack.Screen name="WhatYouNeedToDo" component={WhatYouNeedToDo} />
      <Stack.Screen name="PatientAdmissionForm" component={PatientAdmissionForm} />
      <Stack.Screen name="PatientHealthQuestionnaireP1" component={PatientHealthQuestionnaireP1} />
      <Stack.Screen name="PatientHealthQuestionnaireP2" component={PatientHealthQuestionnaireP2} />
      <Stack.Screen name="PatientHealthQuestionnaireP3" component={PatientHealthQuestionnaireP3} />
      <Stack.Screen name="PatientHealthQuestionnaireP4" component={PatientHealthQuestionnaireP4} />



  
    </Stack.Navigator>
  </NavigationContainer>
  );
}






const styles = StyleSheet.create({
});
