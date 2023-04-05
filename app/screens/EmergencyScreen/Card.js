import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({name, location}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Sharing your location</Text>
        <Text style={styles.address}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal:43,
    marginTop: -50,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    lineHeight: 15,
    fontWeight:'600',
    color: '#666',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default Card;
