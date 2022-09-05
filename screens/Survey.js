import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Picker } from "@react-native-picker/picker"



const Survey = () => {

  const [DOP, setDOP] = useState('')
  const [patientName, setPatientName] = useState('')
  const [wardNumber, setwardNumber] = useState('')
  const [comment, setComment] = useState('')




  const [Q1, setQ1] = useState('')
  const [Q2, setQ2] = useState('')
  const [Q3, setQ3] = useState('')
  const [Q4, setQ4] = useState('')
  const [Q5, setQ5] = useState('')
  const [Q6, setQ6] = useState('')
  const [Q7, setQ7] = useState('')
  const [Q8, setQ8] = useState('')
  const [Q9, setQ9] = useState('')
  const [Q10, setQ10] = useState('')


  return (
    <ScrollView  contentContainerStyle={styles.scroll}>

<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView  style={styles.container} >

<View style={styles.banner}>
            <Text style={styles.bannerText}>Patient Satisfaction Survey</Text>
        </View>

        <Text style={styles.header1}>Thank you for choosing to have your procedure at Franklin Hospital. 
        For onging quality improvement and to improve on our services, we would appreciate your feedback:</Text>

     

      <Text  style={styles.header2}>Date of procedure:</Text>

      <View styles={styles.containerInput}>

        <TextInput 
        placeholder='Date of procedure'
        value={DOP}
        onChangeText={text => setDOP(text)}
        style={styles.input}
        />
        </View>

      <Text style={styles.header2}>Patient name:</Text>

      <View styles={styles.containerInput}>

        <TextInput 
        placeholder='Patient Name'
        value={patientName}
        onChangeText={text => setPatientName(text)}
        style={styles.input}
        />
        </View>

      <Text style={styles.header2}>Ward number:</Text>

      <View styles={styles.containerInput}>

        <TextInput 
        placeholder='Ward Number'
        value={wardNumber}
        onChangeText={text => setwardNumber(text)}
        style={styles.input}
        />
        </View>

     

        <Text style={styles.header2}>How would you rate the service from our booking team?</Text>

      <View style={styles.pickerView}>
        <Picker
        selectedValue={Q1}
        onValueChange={(value, index) => setQ1(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>

        <Text style={styles.header2}>How would you rate the service received at from our Reception team?</Text>

        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q2}
        onValueChange={(value, index) => setQ2(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>


        <Text style={styles.header2}>How would you rate the service received from our Pre-addmisions team?</Text>

        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q3}
        onValueChange={(value, index) => setQ3(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>


        <Text style={styles.header2}>How would you rate the service received from our Ward Nurses?</Text>

        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q4}
        onValueChange={(value, index) => setQ4(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>


        <Text style={styles.header2}>How would you rate the overall service recieved from our Nurses team?</Text>

        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q5}
        onValueChange={(value, index) => setQ5(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>


        <Text style={styles.header2}>How would you rate the meals provided?</Text>

        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q6}
        onValueChange={(value, index) => setQ6(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>


        <Text style={styles.header2}>How would you rate the cleanliness of our facility</Text>

        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q7}
        onValueChange={(value, index) => setQ7(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>


        <Text style={styles.header2}>How would you rate the overall service recieved at Franklin Hospital?</Text>


        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q8}
        onValueChange={(value, index) => setQ8(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>


        <Text style={styles.header2}>Did our services meet your expectations?</Text>

        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q9}
        onValueChange={(value, index) => setQ9(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>


        <Text style={styles.header2}>How likely is it that you would recommend Franklin Hospital to a friend or family member?</Text>

        <View style={styles.pickerView}>
        <Picker
        selectedValue={Q10}
        onValueChange={(value, index) => setQ10(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select rating" value="Unknown" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>

        <Text style={styles.header2}>Any comment that you may have where we can improve our service or facility:</Text>

        <View styles={styles.containerInput}>

        <TextInput 
        placeholder='Comments'
        value={comment}
        onChangeText={text => setComment(text)}
        style={styles.input}
        />
        </View>

        <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={{}}
        style={[styles.button]}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>


    </ScrollView>

  )
}

export default Survey

const styles = StyleSheet.create({
  scroll:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  picker: {
    width: '80%',
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
  header1:{
    fontSize: 20,
  padding: 10,
  fontWeight: '500',
  color: '#115367',
  },
  header2:{
    color:'#115367',
    fontSize:20,
    paddingTop: 10, 
    padding: 10,
  },
  containerInput:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: 'black',
},
input:{
    backgroundColor:'white',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#bbbbbb', 
    width: '100%',  
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
},
buttonContainer:{
  width: '100%',
justifyContent: 'center',
alignItems: 'center',
marginTop: 40,

},
button:{
  backgroundColor: '#33838c',
width: '70%',
padding: 15,
borderRadius: 10,
alignItems: 'center',
},
buttonText:{
  color: 'white',
fontWeight: '700',
fontSize: 16,
},
pickerView:{
  width: '100%',
  alignItems: 'center',
  
}
})