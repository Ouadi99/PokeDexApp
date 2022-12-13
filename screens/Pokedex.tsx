import * as React from "react";
import { Text, View, TextInput,StyleSheet,Button,ScrollView,Pressable, ViewStyle, StyleProp,  FlatList,StatusBar, Image } from "react-native";
import { RouteProp, NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {useState, useEffect} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./Details"
import Pokemon from "./PokemonList"

export default function Dex() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Pokemon" component={Pokemon} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#fff",
    },
  });

  // export default Pokemon;