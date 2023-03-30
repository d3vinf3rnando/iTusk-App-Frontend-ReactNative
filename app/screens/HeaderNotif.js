import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
    render(); {
        //const { navigate } = this.props.navigation;
    const navigation = useNavigation();

    return (
        <NavigationContainer>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./images/back.png')} 
                style={styles.headerIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Alert Notifications</Text>        
            </View>
        </NavigationContainer>
    );
    };
};

const styles = StyleSheet.create({
header: {
    width : '90%' ,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    //paddingHorizontal: 16,
    paddingBottom: 30,
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
});


export default BackButton;
