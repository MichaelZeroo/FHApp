import * as React from 'react'
import { View } from 'react-native'
import PDFReader from 'rn-pdf-reader-js-no-loading'

export default class App extends React.Component {
  render() {
    return (
     
 <View>
 <PDFReader
 source={{uri: 'file//../assets/3_Patient Health Questionnaire.pdf'}}
 webviewProps={{
   startInLoadingState: true,
 }}
 useGoogleReader={ true }
 noLoader={true}
 />
 </View>
    )
  }
}