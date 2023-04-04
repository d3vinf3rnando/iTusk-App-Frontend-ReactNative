import React, { Component } from 'react';
import { StyleSheet, View, Text, Image , TouchableOpacity} from 'react-native';
import HeaderNotif from './HeaderNotif';


const notifications = [
  { id: 1, title: 'You are in the safe zone.', time:'10:00 AM' , icon:require('./images/shield.png')},
  { id: 2, title: 'iTusk alarm system activated around you!',time:'9:30 AM' ,icon:require('./images/warning1-red.png')},
  { id: 3, title: 'Emergency contacts updated!', message: 'The contacts you added to the emergency contact list has been saved successfully.' ,time:'9:00 AM' },
  { id: 4, title: 'Wild Elephant Attack!', message: 'We identified a wild elephant attack near your area.Please stay alert. In case contact emergency service.' ,time:'9:00 AM'  },
  { id: 5, title: 'Warning!!! Elephants detected 1km away from you.' ,time:'9:00 AM' ,icon:require('./images/warning-orange.png') },
  { id: 6, title: 'Warning!!! Elephants detected 1km away from you.' ,time:'9:00 AM',icon:require('./images/warning-orange.png') },
];

const NotificationCard1 = ({ notification }) => (
  <View style={[styles.card1, { height: notification.size }]}>
    <View style={styles.iconContainer}>
      <Image source={notification.icon} 
          style={styles.icon} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{notification.title}</Text>
    </View>
    <Text style={styles.time}>{notification.time}</Text>
  </View>
);

const NotificationCard2 = ({ notification }) => (
  <View style={[styles.card2, { height: notification.size }]}>
    <View style={styles.iconContainer}>
      <Image source={notification.icon} 
          style={styles.icon} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{notification.title}</Text>
    </View>
    <Text style={styles.time}>{notification.time}</Text>
  </View>
);

const NotificationCard3 = ({ notification }) => (
  <View style={[styles.card3, { height: notification.size }]}>
    <View style={styles.iconContainer}>
      <Image source={notification.icon} 
          style={styles.icon} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{notification.title}</Text>
    </View>
    <Text style={styles.time}>{notification.time}</Text>
  </View>
);

const NotificationCard = ({ notification }) => (
  <View style={[styles.card, { height: notification.size }]}>
    <Text style={styles.title}>{notification.title}</Text>
    <Text style={styles.message}>{notification.message}</Text>
    <Text style={styles.time}>{notification.time}</Text>
  </View>
);

export default class Notifications extends Component {
  render() {
    return (
  <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
            <Image source={require('./images/back.png')} 
                style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alert Notifications</Text>        
    </View>
    <NotificationCard1 notification={notifications[0]} />
    <NotificationCard2 notification={notifications[1]} />
    <NotificationCard notification={notifications[2]} />
    <NotificationCard notification={notifications[3]} />
    <NotificationCard3 notification={notifications[4]} />
    <NotificationCard3 notification={notifications[5]} />
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
    //justifyContent: 'space-between',
    //paddingHorizontal: 16,
    paddingBottom: 20,
  },
  
  headerIcon:{
    height: 25,
    width: 25,
  },
  headerTitle: {
    paddingLeft: 10,
    color: '#4d4b4b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    width: '85%',
  },
  card1: {
    flexDirection: 'row',
    backgroundColor: '#e8fce9',
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    width: '85%',
    borderColor: '#3fc22b',
    borderWidth: 1,
  },
  card2: {
    flexDirection: 'row',
    backgroundColor: '#fce8e8',
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    width: '85%',
    borderColor: '#e63535',
    borderWidth: 1,
  },
  card3: {
    flexDirection: 'row',
    backgroundColor: '#fff5e8',
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    width: '85%',
    borderColor: '#e08b2f',
    borderWidth: 1,
  },
  iconContainer: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 35,
    height: 35,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#545454',
  },
  time: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#aaa',
    fontSize: 12,
  },
});

//export default NotificationsScreen;
