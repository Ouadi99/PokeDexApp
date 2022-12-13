import * as React from "react";
import { Text, View, TextInput,StyleSheet,Button,ScrollView,Pressable, ViewStyle, StyleProp,FlatList,StatusBar, Image, ImageBackground } from "react-native";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {useState, useEffect} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// npm i react-native-debugger
import HomeScreen from "./screens/Home";
import Pokedex from "./screens/Pokedex";

const Map = () => {
  return (
    <text>Test</text>
  );
}
const TabScreens =() => {
  return (
    <Tab.Navigator 
      screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "black",
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => <Image source={require('./assets/menuIcon.png')} style={{marginTop:'10%'}} />           
        }} 
        />
        <Tab.Screen name="Pokedex" component={Pokedex}
         options={{
            tabBarIcon: ({color, size}) => <Image source={require('./assets/pokedex.png')} style={{marginTop:'10%'}} />
        }} 
        />
        <Tab.Screen name="Map" component={Map}
         options={{
            tabBarIcon: ({color, size}) => <Image source={require('./assets/pokeMap.png')} style={{marginTop:'10%'}} />
        }} 
        />
      </Tab.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={TabScreens} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//npx expo start