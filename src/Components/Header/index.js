import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome, Entypo } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const Header = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconMenu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={23} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => {}} style={{ marginRight: 40 }}>
          <FontAwesome name="bell" size={21} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
