import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
/*import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faNewspaper, faFileAlt, faUser } from '@fortawesome/free-solid-svg-icons';*/

const NavigationPane = () => {
  return (
    <View>
      <View style={styles.menu}>
        <TouchableOpacity
            style={styles.menuItem}
            //</View>onPress={() => navigate('Home')}
            >
          <Image source={require('./images/home_icon.png')} 
            style={styles.navIcon} />
          <Text style={styles.menuText1}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.menuItem}
            //onPress={() => navigate('Home')}
            >
          <Image source={require('./images/news_icon.png')}
            style={styles.navIcon} />
          <Text style={styles.menuText}>News</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.menuItem}
            //onPress={() => navigate('Home')}
            >
          <Image source={require('./images/report_icon.png')} 
            style={styles.navIcon}/>
          <Text style={styles.menuText}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.menuItem}
            //onPress={() => navigate('Home')}
            >
          <Image source={require('./images/user_icon.png')} 
            style={styles.navIcon}/>
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    borderRadius:10,
    backgroundColor: '#b3c2e3',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },*/
  navIcon:{
    height: 25,
    width: 25,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius:20,
    width: '100%',
    backgroundColor: '#d9e4fa',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 60,
    marginTop:30,
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
  },
  menuText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
    fontWeight: 'bold',
  },
  menuText1: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default NavigationPane;
