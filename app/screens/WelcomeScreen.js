import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

//setting up the splash screen to navigate to homescreen after 2 seconds
const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'); 
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
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: 120,
    height: 120,
  },
});

export default WelcomeScreen;
