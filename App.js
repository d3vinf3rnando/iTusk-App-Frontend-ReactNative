//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen2 from './app/screens/HomeScreen2';
import EmergencyScreen from './app/screens/EmergencyScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MapScreen from './app/screens/MapScreen';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    Home: { screen: HomeScreen2 }, 
    //First entry by default be our first screen if we do not define initialRouteName
    Map: {screen: MapScreen},
    Emergency: { screen: EmergencyScreen },
    Welcome: {screen: WelcomeScreen}, 
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);