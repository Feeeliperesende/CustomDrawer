import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../Components/Header';
import { styles } from './styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </View>
  );
};

export default Profile;
