import * as React from "react";
import { Text, View, TextInput,StyleSheet,Button,ScrollView,Pressable, ViewStyle, StyleProp, FlatList,StatusBar, Image } from "react-native";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {useState, useEffect} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Pokemon = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    useEffect(() => {
        const fetchPokemons = async () => {
        const pokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=251&offset=0";
        const response = await fetch(pokemonURL);
        const pokemonResponse = await response.json();
        try {
            const pokemonDetails = await Promise.all(
                pokemonResponse.results.map(async (solePokemon) => {
                    const pokeDetails = await fetch(solePokemon.url);
                    return await pokeDetails.json();
                })
              );
             setPokemonDetails(pokemonDetails);
              } catch (error) {
              console.error(error);
              }};
              fetchPokemons();
        }, []);
        const Stack = createNativeStackNavigator();
        
    const renderPokemon = ({ item }) => {
      return (
        <View style={{
          borderRadius: 10,
          margin:5,
          backgroundColor: item.types[0].type.name == "grass" ? "#71C335" : 
          item.types[0].type.name == "fire" ? "#C42202" :
          item.types[0].type.name == "water" ? "#55A4F3" :
          item.types[0].type.name == "bug" ? "#88950C" :
          item.types[0].type.name == "dark" ? "#7C7D81" :
          item.types[0].type.name == "dragon" ? "#7662E0" : 
          item.types[0].type.name == "electric" ? "#FAB713" :
          item.types[0].type.name == "fairy" ? "#FFB8CC" :
          item.types[0].type.name == "fighting" ? "#8E4F39" :
          item.types[0].type.name == "flying" ? "#5D699F" :
          item.types[0].type.name == "ghost" ? "#5C5BA7" :
          item.types[0].type.name == "ground" ? "#CAAA50" :
          item.types[0].type.name == "ice" ? "#6ED2F7" :
          item.types[0].type.name == "poison" ? "#8C438F" :
          item.types[0].type.name == "psychic" ? "#EA457F" :
          item.types[0].type.name == "rock" ? "#B39E51" :
          item.types[0].type.name == "steel" ? "#B8B9C6" :"#C3BFB3",
          borderWidth: 3,
          borderColor: item.types[0].type.name == "grass" ? "#127C3D" : 
          item.types[0].type.name == "fire" ? "#4D0104" :
          item.types[0].type.name == "water" ? "#1552E2" :
          item.types[0].type.name == "bug" ? "#1C4B27" :
          item.types[0].type.name == "dark" ? "#040706" :
          item.types[0].type.name == "dragon" ? "#001044" : 
          item.types[0].type.name == "electric" ? "#BA822D" :
          item.types[0].type.name == "fairy" ? "#FA6271" :
          item.types[0].type.name == "fighting" ? "#48180B" :
          item.types[0].type.name == "flying" ? "#48180B" :
          item.types[0].type.name == "ghost" ? "#261C37" :
          item.types[0].type.name == "ground" ? "#997353" :
          item.types[0].type.name == "ice" ? "#528AAE" :
          item.types[0].type.name == "poison" ? "#37013F" :
          item.types[0].type.name == "psychic" ? "#9D2274" :
          item.types[0].type.name == "rock" ? "#48180B" :
          item.types[0].type.name == "steel" ? "#2D2E2F" :"#75515B"
          
        }}>
         
          <View style={{flex: 1, flexDirection : "row", justifyContent: "space-between", alignItems: "stretch"}}>
              <View style={{flex: 1, flexDirection : "column", justifyContent: "center"}}>
                 <Text style={styles.pokemonTitle}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)} </Text>
                <Text style={styles.pokemonType}>{item.types[0].type.name}</Text>
                </View>
            <Image style={styles.pokemonSprite}source={{uri: item.sprites.front_default}}/>
          </View>
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <FlatList data={pokemonDetails} renderItem={renderPokemon} />
        <StatusBar style="auto" />
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#fff",
    },
    pokemonContainer: { 
      // backgroundColor: wantedSpeed == 0 ? "#000000" : item.sprites.front_default >= 5 ? "#280e19" : "#0c1322" , 
      marginTop: 10},
    pokemonTitle: {
      paddingLeft:25,
      fontSize: 25,
      alignSelf: "center",
    },
    pokemonType: {
      paddingLeft:25,
      fontSize: 15,
      alignSelf: "center",
    },
    pokemonSprite: {
      width: 150,
      height: 150,
      alignSelf: "center",
    },
  });

  export default Pokemon;