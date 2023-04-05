import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, onBackPress, onUploadPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress} style={{ flexDirection: 'row' }}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 18, marginTop: 2, marginLeft: 5 }}>Emergency Help</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onUploadPress}>
                <Ionicons name="cloud-upload" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        //flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 56,
        marginBottom:50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
};

export default Header;
