import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Card1 = ({ title, imageSource, description }) => {
  return (
    <View style={styles.card1}>
      <View style={styles.cardContent}>
        <Text style={styles.title1}>{title}</Text>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const Card2 = ({ title, imageSource, description }) => {
  return (
    <View style={styles.card2}>
      <View style={styles.cardContent}>
        <Text style={styles.title2}>{title}</Text>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default class Notifications extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
            <Image source={require('./images/back.png')} 
                style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Survival Tips</Text>        
      </View>
      <Card1
        title="First Aid in case of Emergency. "
        imageSource= {require('./images/firstAid.png')}
        description="First aid is the first and immediate assistance given to any person 
        with either a minor or serious illness or injury, with care provided...read more"
      />
      <Card2
        title="How to survive from elephant attack"
        imageSource= {require('./images/elephant1.png')}
        description="The best way to survive an elephant attack is to avoid the animal. 
        If you're the target of an attack, you should be aware of its movements. This...read more"
      />
    </View>
  );
};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
  card1: {
    backgroundColor: '#c0dffc',
    borderRadius: 20,
    /*shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,*/
    marginBottom: 20,
    width: '90%',
    height: 330,
    marginLeft: 20,
  },
  card2: {
    backgroundColor: '#cafcce',
    borderRadius: 20,
    /*shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,*/
    marginBottom: 20,
    width: '90%',
    height: 350,
    marginLeft: 20,
  },
  image: {
    marginBottom:15,
    marginLeft: 80,
    height: 150,
    width: 150,
    resizeMode: 'cover',
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
  cardContent: {
    padding: 20,
  },
  title1: {
    color: '#3769d4',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  title2: {
    color: '#0d4f11',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: -10,
  },
  description: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '98%',
    //marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});

