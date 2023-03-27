import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/logo.png')}
        style={styles.logo}
      />
      {/*<Text style={styles.title}>i-Tusk</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4FEED',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  title: {
    color:'#009D2C',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
