import React, { useState } from 'react';
import { StyleSheet, View, Text , TouchableOpacity, Image, Linking} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 6.416665,
    longitude: 81.333332,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  const handlePress = () => {
    Linking.openURL(`tel:${119}`);
  };


  return (
      <><MapView style={styles.map} region={region} showsUserLocation onRegionChange={handleRegionChange}>
      <Marker coordinate={{ latitude: 6.4115, longitude: 81.3326 }}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>Safe {'\n'} Zone</Text>
        </View>
      </Marker>

      <Circle
        center={{
          latitude: 6.4135,
          longitude: 81.3326,
        }}
        radius={700}
        strokeWidth={2}
        strokeColor="green"
        fillColor="rgba(0, 128, 0, 0.2)" />

      <Marker coordinate={{ latitude: 6.4093, longitude: 81.3172 }}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>Danger {'\n'} Zone</Text>
        </View>
      </Marker>

      <Circle
        center={{
          latitude: 6.4123,
          longitude: 81.3164,
        }}
        radius={600}
        strokeWidth={2}
        strokeColor="red"
        fillColor="rgba(255, 0, 0, 0.2)" />
    </MapView>
    <View style={styles.panel}>
          <TouchableOpacity >
            <Image source={require('./images/dash.png')} style={styles.dashButton} />
          </TouchableOpacity>
          <Text style={styles.panelTitle}>Elephant Sensors Activated!</Text>
          <Image source={require('./images/run.jpg')} style={styles.runImage} />
          <TouchableOpacity style={styles.emergencyButton} onPress={handlePress}>
            <Text style={styles.callText}>Emergency Call</Text>
          </TouchableOpacity>
      </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  map: {
    flex: 1,
  },
  circle: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#000',
    fontWeight: 'bold',
  },
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
    height: '40%',
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
    marginTop: 10,
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

export default MapScreen;
