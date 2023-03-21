import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//pm import { useNavigation } from '@react-navigation/native';

const HomeScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iTusk</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('MapScreen')}
      >
        <Text style={styles.buttonText}>iTusk sensor map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen2;
