import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Carousel from './Carousel';
import NavigationPane from './NavigationPane';

export default class HomeScreen extends Component{
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('./images/menu2.png')} 
                      style={styles.headerIcon} />
            <Text style={styles.title}>i TUSK</Text>
            <Image source={require('./images/search2.png')} 
                      style={styles.headerIcon} />
          </View>
          <Carousel/>
          <Text style={styles.title2}>Quick Access</Text>
          {/* Square buttons */}
          <View style={styles.buttonContainer}>
            
            <TouchableOpacity
              style={styles.button1}
              onPress={() => navigate('Carousel')}
              >
              <Image source={require('./images/map.png')} 
                    style={styles.buttonIcon} />
              <Text style={styles.buttonText}>iTusk {'\n'}sensor map</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => navigate('Emergency')}
              >
                <Image source={require('./images/emergency.png')} 
                    style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Emergency {'\n'}Help</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button3}
              onPress={() => navigate('Notifications')}
              >
                <Image source={require('./images/alert.png')} 
                    style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Alert {'\n'}Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button4}
              onPress={() => navigate('Tips')}
            >
              <Image source={require('./images/survival.png')} 
                    style={styles.buttonIcon} />
              <Text style={styles.buttonText4}>Survival {'\n'}Tips</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation pane
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
          onPress={() => navigate('Home')}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
        
      </View>
      */}
        <NavigationPane/>
      </View> 
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width : '90%' ,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  
  headerIcon:{
    height: 25,
    width: 25,
  },
  title: {
    color: '#4d4b4b',
    fontSize: 26,
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'left',
    color: '#000',
    marginTop: -15,
    marginLeft: -180,
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonIcon: {
    //padding: 10,
    marginLeft:-60,
    marginTop:5,
    marginBottom: 5,
    height: 40,
    width: 40,
    borderRadius: 8,
    //resizeMode: 'stretch',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
    marginLeft:-15,
    fontWeight: 'bold',
  },
  buttonText4: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
    marginLeft:-30,
    fontWeight: 'bold',
  },
  button1: {
    fontFamily: 'notoserif',
    width: '42%',
    height: 140,
    backgroundColor: '#D7EFFF',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,


  },
  button2: {
    width: '42%',
    height: 140,
    backgroundColor: '#F8DCDC',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,


  },
  button3: {
    width: '42%',
    height: 140,
    backgroundColor: '#EBE9FF',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

 
  },
  button4: {
    width: '42%',
    height: 140,
    backgroundColor: '#DBEFE0',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
       shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
 

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
/*    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  marginHorizontal:43*/
});
