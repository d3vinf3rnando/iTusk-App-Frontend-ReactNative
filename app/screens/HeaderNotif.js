import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class HeaderNotif extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
            <Image source={require('./images/back.png')} 
                style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alert Notifications</Text>        
      </View>
    );
  };
};



const styles = StyleSheet.create({
header: {
    width : '90%' ,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    //paddingHorizontal: 16,
    paddingBottom: 30,
  },
  
  headerIcon:{
    height: 25,
    width: 25,
  },
  headerTitle: {
    paddingLeft: 10,
    color: '#4d4b4b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

