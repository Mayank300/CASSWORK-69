import React, { Component }from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native'
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class Searchscreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasCameraPermission : null,
      scanned: false,
      buttonState: 'normal',
      scannedData: '',
    }
  }

  getCameraPermission = (async () => {
    const { status } = await Permissions.requestPermissionAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
      buttonState: 'clicked',
    });
  })

  handelBarCodeScanned = ({ type, data }) => {
    this.setState({
      scanned:true,
    });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

    render() {
      const hasCameraPermission = this.state.hasCameraPermission;
      const buttonState = this.state.buttonState;
      const scanned = this.state.scanned;

     if(buttonState === 'clicked' && hasCameraPermission){
        return(
          <BarCodeScanner 
            onBarCodeScanned={ scanned? undefined : this.handelBarCodeScanned } 
            style={StyleSheet.absoluteFillObject }>
          </BarCodeScanner>
        )
        
      }else if(buttonState === 'normal' ) {
        return(
        <View style={styles.container}>
          <Text style={styles.displayText2}>BAR CODE SCANNER</Text>
          <Text style={styles.displayText}>
            {hasCameraPermission === true ? this.state.scannedData : 'request camer permission' }
          </Text>     
          {/* <img src="https://cdn.dribbble.com/users/1501052/screenshots/4545496/finding-signatures.gif" /> */}
          <TouchableOpacity
            onPress={this.getCameraPermissions}
            style={styles.scanButton}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
        )
      }
    }

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 20,
      margin: 50,
      textAlign: 'center',
      textDecorationLine : 'underline',
    },
    displayText2:{
      fontSize: 30,
      margin: 10,
      padding: 10,
      borderColor: 'black',
      borderWidth: 5,
      textAlign: 'center',
      borderRadius : 12,
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10,
      borderColor: 'black',
      borderWidth: 5,
      borderRadius : 12,
    },
    buttonText:{
      fontSize: 30,
    }
  });

// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };

//   if (hasPermission === null) {
//     return <Text style={styles.displayText}>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text style={styles.displayText}>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//        <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned && <Button style={styles.scanButton} title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
//     </View>
//   );
// }


