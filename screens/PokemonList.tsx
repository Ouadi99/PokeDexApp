import * as React from "react";
import { Text, ActivityIndicator, View,  TouchableOpacity, TextInput,StyleSheet,Button,ScrollView,Pressable, ViewStyle, StyleProp,  FlatList,StatusBar, Image } from "react-native";
import { RouteProp, NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {useContext, useState, useEffect} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./Details"
import TypeColor from "./Color"
import { json } from "react-router-dom";


const LoadingIndicator = () =>{
  return(
    <ActivityIndicator size="large" color="red" />
  )
}


const Pokemon = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [pokemonFavorites, setpokemonFavorites] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const navigation : any = useNavigation();
    const storeData = async () => {
      await AsyncStorage.setItem("pokemonFavoriteStorage", JSON.stringify(pokemonFavorites));
    };


    useEffect(() => {
      setLoading(true);
        const fetchPokemons = async () => {
        const pokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=251&offset=0";
        const response = await fetch(pokemonURL);
        const pokemonResponse = await response.json();
        try {
            const pokemonDetails: any = await Promise.all(
                pokemonResponse.results.map(async (solePokemon: any) => {
                    const pokeDetails = await fetch(solePokemon.url);
                    setLoading(false);
                    return await pokeDetails.json();
                })
              );
             setPokemonDetails(pokemonDetails);

              } catch (error) {
              console.error(error);
              }};

              fetchPokemons();
              const getData = async () => {
                const value = await AsyncStorage.getItem("pokemonFavoriteStorage");
                if (value !== null) {
                  setpokemonFavorites(JSON.parse(value));
                }
              };
              getData();
        }, []);

       
        useEffect(() => {
          // console.log(pokemonFavorites.toString());
          storeData();
        }, [pokemonFavorites])
        
        










      const renderPokemon = ({ item }) => {
          let color = "#A8A878";
          switch (item.types[0].type.name) {
            case "grass":          color =  "#A7DB8D";   break;
            case "fire":           color =  "#F08030";   break;
            case "water":          color =  "#6890F0";   break;
            case "bug":            color =  "#88950C";   break;
            case "dark":           color =  "#7C7D81";   break;
            case "dragon":         color =  "#7662E0";   break;
            case "electric":       color =  "#FAE078";   break;
            case "fairy":          color =  "#FFB8CC";   break;
            case "fighting":       color =  "#C03028";   break;
            case "flying":         color =  "#C6B7F5";   break;
            case "ghost":          color =  "#A292BC";   break;
            case "ground":         color =  "#EBD69D";   break;
            case "ice":            color =  "#BCE6E6";   break;
            case "poison":         color =  "#A040A0";   break;
            case "psychic":         color =  "#FA92B2";   break;
            case "rock":           color =  "#B39E51";   break;
            case "steel":          color =  "#B8B9C6";   break;
          }
          let borderPokemonColor = "#75515B";
          switch (item.types[0].type.name) {
            case "grass":          borderPokemonColor  =  "#4E8234";   break;
            case "fire":           borderPokemonColor  =  "#9C531F";   break;
            case "water":          borderPokemonColor  =  "#445E9C";   break;
            case "bug":            borderPokemonColor  =  "#1C4B27";   break;
            case "dark":           borderPokemonColor  =  "#040706";   break;
            case "dragon":         borderPokemonColor =  "#001044";   break;
            case "electric":       borderPokemonColor  =  "#DCB82B";   break;
            case "fairy":          borderPokemonColor =  "#FA6271";   break;
            case "fighting":       borderPokemonColor =  "#48180B";   break;
            case "flying":         borderPokemonColor =  "#6890D5";   break;
            case "ghost":          borderPokemonColor  =  "#705898";   break;
            case "ground":         borderPokemonColor  =  "#997353";   break;
            case "ice":            borderPokemonColor  =  "#528AAE";   break;
            case "poison":         borderPokemonColor  =  "#37013F";   break;
            case "psychic":         borderPokemonColor  =  "#A13959";   break;
            case "rock":           borderPokemonColor  =  "#B39E51";   break;
            case "steel":          borderPokemonColor  =  "#787887";   break;     
          }
      
          return (
            <View
              style={{
                borderRadius: 10,
                margin: 5,
                backgroundColor: color,
                borderWidth: 3,
                borderColor: borderPokemonColor,
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("Detail", {
                    name: item.name,
                    type: item.types[0].type.name,
                    type2: item.types[1] && item.types[1].type.name,
                    id: item.id,
                    art: item.sprites.other["official-artwork"].front_default,
      
                    firstAbility: item.abilities[0].ability.name,
                    secondAbility:
                      item.abilities[1] && item.abilities[1].ability.name,
                    thirdAbility: item.abilities[2] && item.abilities[2].ability.name,
      
                    move1: item.moves[0].move.name,
                    move2: item.moves[1] && item.moves[1].move.name,
                    move3: item.moves[2] && item.moves[2].move.name,
                    move4: item.moves[3] && item.moves[3].move.name,
                    move5: item.moves[4] && item.moves[4].move.name,
                    move6: item.moves[5] && item.moves[5].move.name,
                    move7: item.moves[6] && item.moves[6].move.name,
                    move8: item.moves[7] && item.moves[7].move.name,
                    move9: item.moves[8] && item.moves[8].move.name,
                    move10: item.moves[9] && item.moves[9].move.name,
      
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
                  });
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={styles.pokemonTitle}>
                      {item.id}.{" "}
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}{" "}
                    </Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <Text style={styles.pokemonType}>
                        {item.types[0].type.name.charAt(0).toUpperCase() +
                          item.types[0].type.name.slice(1)}
                      </Text>
                      {item.types[1] && (
                        <Text style={styles.pokemonType}>
                          {item.types[1].type.name.charAt(0).toUpperCase() +
                            item.types[1].type.name.slice(1)}
                        </Text>
                      )}
                    </View>
                  </View>
      
                  {pokemonFavorites.filter((fav: { id: any }) => fav.id == item.id)
                    .length ? (
                    <Pressable
                      onPress={() => {
                        for (var i = 0; i < pokemonFavorites.length; i++) {
                          pokemonFavorites.splice(i, 1);
                        }
                        storeData();
                        console.log("Hij word verwijderd");
                      }}
                    >
                      <Image style={styles.star} source={require("./staryu.png")} />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => {
                        console.log(`${item.name} toegevoegd`);
                        setpokemonFavorites((pokemonFavorites) => [
                          ...pokemonFavorites,
                          item,
                        ]);
                      }}
                    >
                      <Image style={styles.star} source={require("./star.png")} />
                    </Pressable>
                  )}
      
                  <View
                    style={styles.positionImage}
                  >
                    <Image
                      source={require("./Pokebal.png")}
                      style={{
                        opacity: 0.3,
                        width: 80,
                        height: 80,
                        position: "absolute",
                        alignItems: "flex-end",
                      }}
                    />
                    <Image
                      style={styles.pokemonSprite}
                      source={{
                        uri: item.sprites.other["official-artwork"].front_default,
                      }}
                    />
                  </View>
                </View>
              </Pressable>
            </View>
          );
        };
      
        const [searchFilter, setSearchFilter] = useState<string>("");
        const [favoriteFilter, setFavoriteFilter] = useState(false);
        const filteredPokemons = pokemonDetails.filter((item) =>
          item.name.toLowerCase().includes(searchFilter.toLowerCase())
        );
        return (
          <View style={styles.container}>
            <TextInput
              style={{
                alignSelf: "center",
                padding: 10,
                width: "100%",
                fontSize: 20,
                borderBottomWidth: 5,
              }}
              placeholder="Search Pokemon"
              clearButtonMode="always"
              onChangeText={(value) => setSearchFilter(value)}
              value={searchFilter}
            />
            {favoriteFilter == true ? (
              <Button
                title="Show all pokemon"
                color="#D14C4B"
                onPress={() => {
                  setFavoriteFilter(false);
                }}
              />
            ) : (
              <Button
                title="Show favorites"
                color="#D14C4B"
                onPress={() => {
                  pokemonFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
                  setFavoriteFilter(true);
                }}
              />
            )}
      
            {loading && <LoadingIndicator />}
            {favoriteFilter ? (
              <FlatList data={pokemonFavorites} renderItem={renderPokemon} />
            ) : (
              <FlatList data={filteredPokemons} renderItem={renderPokemon} />
            )}
            <StatusBar />
          </View>
        );
      };


export default Pokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maringTop: 15,
    backgroundColor: "#fff",
  },
  pokemonContainer: {
    marginTop: 10,
  },
  pokemonTitle: {
    paddingLeft: 25,
    fontSize: 25,
  },
  pokemonType: {
    marginLeft: 25,
    fontSize: 15,
  },
  pokemonSprite: {
    width: 100,
    height: 100,
  },
  star: {
    height: 50,
    width: 50,
    marginRight: 10,
    marginTop: 25,
  },
  positionImage:
  {
    position: "relative",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});


