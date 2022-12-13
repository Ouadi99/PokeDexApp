import * as React from "react";
import { Text, View, TextInput,StyleSheet,Button,ScrollView,Pressable, ViewStyle, StyleProp, FlatList,StatusBar, Image } from "react-native";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {useState, useEffect} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = () => {
    const navigation : any = useNavigation();
    return (
      <View style={{flexDirection: "column", flex: 1, justifyContent: "flex-start", alignItems: "stretch"}}>
           <View style={{flex: 2, backgroundColor: "red"}}/>
           <Pressable style={styles.homeButton} onPress={() => navigation.navigate("Pokedex")}>
              <View style={styles.outerCircle}/>
              <View style={styles.innerCircle}>
                    <Text style={styles.homeText}> POKEDÉX </Text>
              </View>
            </Pressable>
           {/* <Button title="Ga naar de PokeDex" onPress={() => navigation.navigate("PokeDex")}/> */}
           {/* <View style={styles.Outercircle}/> */}
           <View style={{flex: 1, backgroundColor: "white"}}/>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "#fff",
    },
    outerCircle: {
    width: 200,
     height: 200, 
     borderRadius: 200 / 2,
     backgroundColor: "white",
     borderColor: "black",
     borderWidth: 10,
     position: 'absolute', 
     justifyContent: 'center',
     alignItems: "center",
    },
    innerCircle: {
    width: 150,
     height: 150, 
    borderRadius: 150 / 2,  
     backgroundColor: "white", 
     borderColor: "black",
     borderWidth: 5,
     position: 'absolute', 
     justifyContent: 'center',
     alignItems: "center",
    },
    homeButton: {
      backgroundColor: "black",
      padding: 10,
      justifyContent: 'center',
      alignItems: "center"
    },
    homeText: {
      fontSize: 20,
      textAlign: "center",
    },
  });
export default HomeScreen;