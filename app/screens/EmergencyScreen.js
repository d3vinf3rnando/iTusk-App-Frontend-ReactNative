import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
//import call from 'react-native-phone-call';

  const CallButton = ({ phoneNumber }) => {
    const handlePress = () => {
      Linking.openURL(`tel:${119}`);
    };

  return (
    <TouchableOpacity style={styles.emergencyButton} onPress={handlePress}>
      <Text style={styles.callText}>Emergency Call</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emergencyButton:{
    marginTop: 20,
    padding:5,
    backgroundColor: '#9e1c13',
    borderRadius: 20,
    width: '50%',
  },
  callText:{
    textAlign:'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    padding:10,
  },
});

export default CallButton;
