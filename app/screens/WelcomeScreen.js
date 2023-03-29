import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'); // Replace 'Home' with the name of your main screen
    }, 2000); // 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./images/logo.png')} 
      style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
  },
});

export default WelcomeScreen;
