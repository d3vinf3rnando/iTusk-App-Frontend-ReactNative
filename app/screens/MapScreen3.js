import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [safeZone, setSafeZone] = useState({ latitude: 37.78825, longitude: -122.4324, radius: 1000 });
    const [dangerZone, setDangerZone] = useState({ latitude: 37.78825, longitude: -122.4324, radius: 500 });
  
    useEffect(() => {
      Geolocation.getCurrentPosition(
        position => {
          setLocation(position.coords);
        },
        error => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
});
    return (
        <View style={styles.container}>
          {location && (
            <MapView
              style={styles.map}
              region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
    
              <Circle
                center={{ latitude: safeZone.latitude, longitude: safeZone.longitude }}
                radius={safeZone.radius}
                strokeWidth={2}
                strokeColor={'green'}
                fillColor={'rgba(0, 128, 0, 0.2)'}
              />
    
              <Circle
                center={{ latitude: dangerZone.latitude, longitude: dangerZone.longitude }}
                radius={dangerZone.radius}
                strokeWidth={2}
                strokeColor={'red'}
                fillColor={'rgba(255, 0, 0, 0.2)'}
              />
            </MapView>
          )}
        </View>
      );
};     