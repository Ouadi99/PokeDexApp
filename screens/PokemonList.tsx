import * as React from "react";
import { Text, View,  TouchableOpacity, TextInput,StyleSheet,Button,ScrollView,Pressable, ViewStyle, StyleProp,  FlatList,StatusBar, Image } from "react-native";
import { RouteProp, NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {useContext, useState, useEffect} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./Details"


const Pokemon = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const navigation : any = useNavigation();
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
        // 
        // const filterPokemon = pokemonDetails.filter(item => item.name);
        //pokemonDetails.name.toUpperCase().startsWith(filter.toUpperCase())
        

    const renderPokemon = ({ item }) => {
      return (
        <View style={{
          borderRadius: 10,
          margin:5,
          backgroundColor: item.types[0].type.name == "grass" ? "#A7DB8D" : 
          item.types[0].type.name == "fire" ? "#F08030" :
          item.types[0].type.name == "water" ? "#6890F0" :
          item.types[0].type.name == "bug" ? "#88950C" :
          item.types[0].type.name == "dark" ? "#7C7D81" :
          item.types[0].type.name == "dragon" ? "#7662E0" : 
          item.types[0].type.name == "electric" ? "#FAE078" :
          item.types[0].type.name == "fairy" ? "#FFB8CC" :
          item.types[0].type.name == "fighting" ? "#C03028" :
          item.types[0].type.name == "flying" ? "#C6B7F5" :
          item.types[0].type.name == "ghost" ? "#A292BC" :
          item.types[0].type.name == "ground" ? "#EBD69D" :
          item.types[0].type.name == "ice" ? "#BCE6E6" :
          item.types[0].type.name == "poison" ? "#A040A0" :
          item.types[0].type.name == "psychic" ? "#FA92B2" :
          item.types[0].type.name == "rock" ? "#B39E51" :
          item.types[0].type.name == "steel" ? "#B8B9C6" :"#A8A878",
          borderWidth: 3,
          borderColor:
          item.types[0].type.name == "grass" ? "#4E8234" : 
          item.types[0].type.name == "fire" ? "#9C531F" :
          item.types[0].type.name == "water" ? "#445E9C" :
          item.types[0].type.name == "bug" ? "#1C4B27" :
          item.types[0].type.name == "dark" ? "#040706" :
          item.types[0].type.name == "dragon" ? "#001044" : 
          item.types[0].type.name == "electric" ? "#DCB82B" :
          item.types[0].type.name == "fairy" ? "#FA6271" :
          item.types[0].type.name == "fighting" ? "#48180B" :
          item.types[0].type.name == "flying" ? "#48180B" :
          item.types[0].type.name == "ghost" ? "#705898" :
          item.types[0].type.name == "ground" ? "#997353" :
          item.types[0].type.name == "ice" ? "#528AAE" :
          item.types[0].type.name == "poison" ? "#37013F" :
          item.types[0].type.name == "psychic" ? "#A13959" :
          item.types[0].type.name == "rock" ? "#48180B" :
          item.types[0].type.name == "steel" ? "#787887" :"#75515B"  
        }}>
              <Pressable onPress={() => { 
                navigation.navigate("Detail", 
                { name: item.name, 
                  type: item.types[0].type.name,
                  type2: item.types[1] && (
                     item.types[1].type.name),
                  id: item.id, 
                  art: item.sprites.other["official-artwork"].front_default,
    
                  firstAbility: item.abilities[0].ability.name,
                  secondAbility: item.abilities[1] && (
                    item.abilities[1].ability.name),
                  thirdAbility: item.abilities[2] && (
                    item.abilities[2].ability.name),
    
                    move1: item.moves[0].move.name,
                    move2: item.moves[1] && (
                           item.moves[1].move.name),
                    move3: item.moves[2] && (
                           item.moves[2].move.name),
                    move4: item.moves[3] && (
                           item.moves[3].move.name),
                    move5: item.moves[4] && (
                           item.moves[4].move.name),
                    move6: item.moves[5] && (
                           item.moves[5].move.name),
                    move7: item.moves[6] && (
                           item.moves[6].move.name),
                    move8: item.moves[7] && (
                           item.moves[7].move.name),
                    move9: item.moves[8] && (
                           item.moves[8].move.name),
                    move10: item.moves[9] && (
                            item.moves[9].move.name),
                            
                  spriteFront: item.sprites.front_default,
                  spriteBack: item.sprites.back_default,
                  spriteFrontShiny: item.sprites.front_shiny,
                  spriteBackShiny: item.sprites.back_shiny,
    
                  weight: item.weight, 
                  height: item.height, 
    
                  hp: item.stats[0].base_stat,
                  attack: item.stats[1].base_stat,
                  defense: item.stats[2].base_stat,
                  specialAttack: item.stats[3].base_stat,
                  specialDefense: item.stats[4].base_stat,
                  speed: item.stats[5].base_stat,
                }
                )}}>
                                 
                 <View style={{flex: 1, flexDirection : "row", justifyContent: "space-between", alignItems: "stretch"}}>
                  <View style={{flex: 1, flexDirection : "column", justifyContent: "center"}}>
                     <Text style={styles.pokemonTitle}>{item.id}. {item.name.charAt(0).toUpperCase() + item.name.slice(1)} </Text>
                     <View style={{flex: 1, flexDirection : "row",}}> 
                          <Text style={styles.pokemonType}>{item.types[0].type.name.charAt(0).toUpperCase() + item.types[0].type.name.slice(1)}</Text>
                          {item.types[1] && (
                            <Text style={styles.pokemonType}>{item.types[1].type.name.charAt(0).toUpperCase() + item.types[1].type.name.slice(1)}</Text>)}
                        </View>
                    </View>
                  <View style={{position: 'relative', alignItems: 'flex-end', justifyContent: "flex-end", }}>
                    <Image
                      source={require("./Pokebal.png")}
                      style={{opacity: 0.3, width: 80, height: 80, position: "absolute", alignItems: 'flex-end', }}/>
                    {/* <Image style={styles.pokemonSprite}source={{uri: item.sprites.other.home.front_default}}/> */}
                <Image style={styles.pokemonSprite}source={{uri: item.sprites.other["official-artwork"].front_default}}/>
                    </View>
                  </View>
                </Pressable>



          
        </View>
      );
    };

    const [searchFilter, setSearchFilter] = useState<string>("");
    const filteredPokemons = pokemonDetails.filter((item) =>  
    item.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    return (
      <View style={styles.container}>
        <TextInput
          style={{alignSelf: "center", padding: 10,  width: "100%", fontSize: 20, borderBottomWidth: 5}}
          placeholder="Search Pokemon"
          clearButtonMode="always"
          onChangeText={(value) => setSearchFilter(value)}
          value={searchFilter}
        />
        <FlatList data={filteredPokemons} renderItem={renderPokemon} />
        <StatusBar/>
      </View>
    );
  }


export default Pokemon;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#fff",
    },
    pokemonContainer: { 
      marginTop: 10},
      pokemonTitle: {
      paddingLeft:25,
      fontSize: 25,
    },
    pokemonType: {
      marginLeft:25,
      fontSize: 15,
    },
    pokemonSprite: {
      width: 100,
      height: 100,
    },
  });



