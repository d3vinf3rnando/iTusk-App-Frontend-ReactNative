import React from 'react'
import { SafeAreaView,Text,StyleSheet } from 'react-native'

//type rfce in every new empty screens to create a new instance

//watch https://youtu.be/0-S5a0eXPoc this video before getting started

function HomeScreen() {
  return (
    //if you are inserting new <tags> like this, add them to the above import list
    //import {SafeAreaView, Text, Button } from 'react-native
    <SafeAreaView>
        <Text style={styles.ituskText}>iTusk </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    ituskText:{
        fontSize:28,
        fontWeight: 'bold',
        color:'#009D2C',
        justifyContent: 'center',
        textAlign: 'center',
        top: 400,
        
       
    }
})
export default HomeScreen
