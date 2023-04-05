import React from 'react';
import { Text, View } from 'react-native';


const TitleSection = () => {
  return (
    <View>
      <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 24, paddingBottom: 10 }}>
        Are you in Emergency ?
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#666', fontWeight: '600' }}>
        Press the SOS button below help
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, paddingBottom: 50, color: '#666', fontWeight: '600' }}>
        will reach you soon
      </Text>
    </View>
  );
};

export default TitleSection;
