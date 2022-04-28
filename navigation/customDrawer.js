import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  LogBox,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screens/Home';
import Profile from '../src/screens/Profile';

import ImageInfo from '../src/Components/ImageInfo';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';

LogBox.ignoreLogs(['Warning: Cannot update a component']);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={{}}>
        <View style={styles.infoImg}>
          <View
            style={{ paddingLeft: 3, paddingTop: 20, flexDirection: 'row' }}
          >
            <ImageInfo
              sizes="NORMAL"
              imageUri={
                'https://lh3.googleusercontent.com/a-/AOh14GhEzRsiqM3UHopC-BS5bjG2CG9eWeHSBt-sC7gA_w=s288-p-rw-no'
              }
            />
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  marginLeft: 18,
                }}
              >
                Felipe Resende
              </Text>
              {/* <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  marginLeft: 18,
                  marginTop: 5,
                }}
              >
                dev.feliperesende@gmail.com
              </Text> */}
            </View>
          </View>
          <View
            style={{
              paddingVertical: '2%',
              justifyContent: 'center',
              alignItems: 'center',

              // marginLeft: '10%',
            }}
          >
            <Text
              style={{ color: 'white', fontSize: 18, marginLeft: 18 }}
            ></Text>
          </View>
        </View>
        <View style={{ paddingVertical: '5%' }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              marginLeft: 18,
            }}
            onPress={() => props.navigation.navigate('Profile')}
          >
            <FontAwesome name="home" size={23} color="white" />
            <Text style={{ color: 'white', fontSize: 21, marginLeft: 30 }}>
              Início
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingVertical: '5%' }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              marginLeft: 18,
            }}
            //   onPress={() => props.navigation.navigate('Profile')}
          >
            <FontAwesome name="user-o" size={23} color="white" />
            <Text style={{ color: 'white', fontSize: 21, marginLeft: 30 }}>
              Perfil
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '170%' }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              marginLeft: 18,
            }}
            onPress={() => {
              props.navigation.navigate('Root');
            }}
          >
            <Feather name="log-out" size={23} color="white" />
            <Text style={{ color: 'white', fontSize: 21, marginLeft: 30 }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </Animated.View>
  );
};
export default () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={['#4530b1', '#4530b1', '#6857d7']}
      >
        {/* <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}
        source={require('../src/assets/ballons.jpg')}
      > */}
        <Drawer.Navigator
          screenOptions={{ headerTransparent: true, headerTitle: null }}
          backBehavior="none"
          initialRouteName="Home"
          drawerType="slide"
          overlayColor="transparent"
          drawerStyle={styles.drawerStyles}
          contentContainerStyle={styles.container}
          drawerContentOptions={{
            activeBackgroundColor: 'transparent',
            activeTintColor: 'white',
            inactiveTintColor: 'white',
          }}
          sceneContainerStyle={styles.scene}
          drawerContent={(props) => {
            setProgress(props.progress);
            return <DrawerContent {...props} />;
          }}
        >
          <Drawer.Screen name="Screens">
            {(props) => <Screens {...props} style={animatedStyle} />}
          </Drawer.Screen>
        </Drawer.Navigator>
        {/* </ImageBackground> */}
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: { flex: 1, width: '65%', backgroundColor: 'transparent' },
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
  },
  drawerLblStylee: {
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
    borderWidth: 1,
    paddingLeft: 15,
    paddingTop: 7,
    height: 40,

    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    width: 150,
    borderColor: 'white',
    borderRadius: 15,
  },
});
