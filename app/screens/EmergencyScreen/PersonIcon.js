import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PersonIcon = ({ top, right, name, left }) => {
  return (
    <View style={[styles.iconContainer, {
      top,
      right,
      left,
    }]} >
      <FontAwesome name="user" size={25} color="#ff3736" />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#ff3736',
    fontSize: 12,
  },

});

export default PersonIcon;
