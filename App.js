//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen2 from './app/screens/HomeScreen2';
import EmergencyScreen from './app/screens/EmergencyScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
/*import MapScreen from './app/screens/MapScreen';*/
import Notifications from './app/screens/Notifications';
import SurvivalTips from './app/screens/SurvivalTips';
import NavigationPane from './app/screens/NavigationPane';
import Carousel from './app/screens/Carousel';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
  Welcome: {screen: WelcomeScreen}, 
    Home: { screen: HomeScreen2 }, 
    //First entry by default be our first screen if we do not define initialRouteName
    //Map: {screen: MapScreen},
    Nav: { screen: NavigationPane},
    Carousel: {screen: Carousel},
    Emergency: { screen: EmergencyScreen },
    Notifications: {screen: Notifications},
    Tips: {screen: SurvivalTips},
  },
  {
    initialRouteName: 'Welcome',
  }
);
export default createAppContainer(App);