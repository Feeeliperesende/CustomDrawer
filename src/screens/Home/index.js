import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('CustomDrawer')}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
