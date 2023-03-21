import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';

const MapScreen = () => {
  const [panelHeight, setPanelHeight] = React.useState(0);
  const handlePanelLayout = e => setPanelHeight(e.nativeEvent.layout.height);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        Latitude: 6.4135,
        Longitude: 81.3326,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}>
        <Circle
          center={{Latitude: 6.4127,
            Longitude: 81.3158}}
          radius={20}
          strokeColor="red"
          fillColor="rgba(255, 0, 0, 0.1)"
        />
        <Circle
          center={{Latitude: 6.4123,
            Longitude: 81.3164}}
          radius={20}
          strokeColor="green"
          fillColor="rgba(0, 255, 0, 0.1)"
        />
      </MapView>
      <SlidingUpPanel
        draggableRange={{ top: panelHeight, bottom: 0 }}
        height={300}
        onLayout={handlePanelLayout}
      >
        <View style={styles.panel}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Emergency</Text>
          </TouchableOpacity>
        </View>
      </SlidingUpPanel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  panel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
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

export default MapScreen;
