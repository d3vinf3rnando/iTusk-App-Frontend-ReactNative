import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Linking } from 'react-native';

const handlePress = () => {
  Linking.openURL(`tel:${119}`);
}; 

const CircleButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.greenCircle} />
      <View style={styles.blueCircle}>
        <View style={styles.innerCircle} />
      </View>
      <Text style={styles.title}>SOS</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 210,
    height: 210,
    backgroundColor: '#fbeded',
    borderRadius: 105,
  },
  title: {
    fontSize: 20,
    color: '#f7f9ec',
  },
  blueCircle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#f9d2d3',
    opacity: 0.8,
  },
  innerCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e75c59',
    opacity: 0.8,
  },
});

export default CircleButton;
