import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated , Image, Linking} from 'react-native';

const Panel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const togglePanel = () => {
    setIsOpen(!isOpen);
    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '45%'],
  });

  const handlePress = () => {
    Linking.openURL(`tel:${119}`);
  };

  return (
    <View style={styles.container}>
      {/*<TouchableOpacity onPress={togglePanel} style={styles.button}>
        <Image source={require('./images/call.png')} style={styles.callButton}/>
  </TouchableOpacity>*/}
      <Animated.View style={[styles.panel, { height }]}>
      <TouchableOpacity onPress={togglePanel}>
        <Image source={require('./images/dash.png')} style={styles.dashButton}/>
      </TouchableOpacity>
        <Text style={styles.panelTitle}>Elephant Sensors Activated!</Text>
        <Image source={require('./images/run.jpg')} style={styles.runImage}/>
        <TouchableOpacity style={styles.emergencyButton} onPress={handlePress}>
          <Text style={styles.callText}>Emergency Call</Text>
      </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  /*button: {
    marginBottom:300,
    marginLeft: 300,
    backgroundColor: '#DF9F9F',
    padding: 2,
    borderRadius: 50,
  },
  callButton: {
    borderRadius: 70,
    height:70,
    width:70,
  },*/
  panel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    alignItems: 'center',
  },
  dashButton:{
    height:30,
    width:30,
    //marginBottom:10,
    marginTop: -10,
  },
  panelTitle:{
    //marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    padding:10,
  },
  runImage:{
    padding:10,
    height:150,
    width: 150,
  },
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

export default Panel;
