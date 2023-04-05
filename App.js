//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

//import all the screens to add to stack navigator
import HomeScreen2 from './app/screens/HomeScreen2';
import EmergencyScreen from './app/screens/EmergencyScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MapScreen from './app/screens/MapScreen';
import Notifications from './app/screens/Notifications';
import SurvivalTips from './app/screens/SurvivalTips';
import NavigationPane from './app/screens/NavigationPane';
import Carousel from './app/screens/Carousel';

/*import messaging from '@react-native-firebase/messaging';



messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Received background message:', remoteMessage);
});

messaging().onNotificationOpenedApp(remoteMessage => {
  console.log('Notification clicked:', remoteMessage);
});*/

//Creating stack navigator for navigation through screens
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen2}
        />
        <Stack.Screen
          name="Carousel"
          component={Carousel}
        />
        <Stack.Screen
          name="Nav"
          component={NavigationPane}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
        />
        <Stack.Screen
          name="Emergency"
          component={EmergencyScreen}
        />
        <Stack.Screen
          name="Notifs"
          component={Notifications}
        />
        <Stack.Screen
          name="Tips"
          component={SurvivalTips}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
