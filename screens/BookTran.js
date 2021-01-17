import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'


export default class BookTran extends React.Component{
    render(){
      return(
        <View>
          <Text style={styles.displayText} > THIS IS TRANSCATION SCREEN </Text>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 40,
    marginTop: 100,
    marginLeft: 700,
    width:500,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius : 12,
  },
  displayText2:{
    fontSize: 30,
    margin: 10,
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 30,
  }
});