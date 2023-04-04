import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import SlidingPanel from './SlidingPanel';

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

  return (
    <>
      <MapView style={styles.map} region={region} showsUserLocation onRegionChange={handleRegionChange}>
        <Circle
          center={{
            latitude: 6.4135,
            longitude: 81.3326,
          }}
          radius={500}
          strokeWidth={2}
          strokeColor="green"
          fillColor="rgba(0, 128, 0, 0.2)"
        >
          <View style={styles.circle}>
            <Text style={styles.circleText}>Safe Zone</Text>
          </View>
        </Circle>

        <Circle
          center={{
            latitude: 6.4123,
            longitude: 81.3164,
          }}
          radius={300}
          strokeWidth={2}
          strokeColor="red"
          fillColor="rgba(255, 0, 0, 0.2)"
        >
          <View style={styles.circle}>
            <Text style={styles.circleText}>Danger Zone</Text>
          </View>
        </Circle>
      </MapView>
      <SlidingPanel />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    //flex: 1,
  },
  circle: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MapScreen;
