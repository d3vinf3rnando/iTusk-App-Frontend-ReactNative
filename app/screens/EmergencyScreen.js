import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './EmergencyScreen/Card';
import CircleButton from './EmergencyScreen/CircleButton';
import Header from './EmergencyScreen/Header';
import PersonIcon from './EmergencyScreen/PersonIcon';
import TitleSection from './EmergencyScreen/TitleSection';
import { Component } from 'react';

function EmergencyScreen() {
  return (
    <View >
      <Header/>
      <TitleSection />
      <View style={styles.container}>
        <PersonIcon top={20} right={45} name="police" />
        <PersonIcon top={190} right={75} name="Wild life Dep" />
        <PersonIcon top={160} left={75} name="Dad" />
        <CircleButton />
      </View>
      <View>
        <Card location='22A lsac Lane, Yala Road , Katharagama' />
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    //flex:1,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingBottom: 200
  },
});

export default EmergencyScreen