import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component{
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          {/* Square buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1}>
              <Text>iTusk sensor map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text>Emergency Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
              <Text>Alert Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
              <Text>Survival Tips</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation pane */}
          <View style={styles.navContainer}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigate('Home')}
            >
            <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigate('Emergency')}
            >
              <Text>News</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigate('Welcome')}
            >
              <Text>Report</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigate('Map')}
            >
              <Text>Profile</Text>
            </TouchableOpacity>
            
          </View>
        </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  button1: {
    width: '40%',
    height: 120,
    backgroundColor: '#D7EFFF',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: '40%',
    height: 120,
    backgroundColor: '#F8DCDC',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button3: {
    width: '40%',
    height: 120,
    backgroundColor: '#EBE9FF',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button4: {
    width: '40%',
    height: 120,
    backgroundColor: '#DBEFE0',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
