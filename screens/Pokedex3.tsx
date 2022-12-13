import * as React from "react";
import { Text, View, TextInput,StyleSheet,Button,ScrollView,Pressable, ViewStyle, StyleProp,  FlatList,StatusBar, Image } from "react-native";
import { RouteProp, NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {useState, useEffect} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



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
    return (
      <View style={styles.container}>
        <FlatList data={pokemonDetails} renderItem={renderPokemon} />
        <StatusBar style="auto" />
      </View>
    );
  }

  const Detail = () => {
    const route: RouteProp<any> = useRoute();
    return (
      
          <View style={{flexDirection: "column", flex: 1}}>
            <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: route.params?.type == "grass" ? "#A7DB8D" : 
            route.params?.type == "fire" ? "#F08030" :
            route.params?.type == "water" ? "#6890F0" :
            route.params?.type == "bug" ? "#A8B820" :
            route.params?.type == "dark" ? "#7C7D81" :
            route.params?.type== "dragon" ? "#7662E0" : 
            route.params?.type == "electric" ? "#FAE078" :
            route.params?.type == "fairy" ? "#FFB8CC" :
            route.params?.type== "fighting" ? "#C03028" :
            route.params?.type == "flying" ? "#C6B7F5" :
            route.params?.type == "ghost" ? "#A292BC" :
            route.params?.type == "ground" ? "#EBD69D" :
            route.params?.type == "ice" ? "#BCE6E6" :
            route.params?.type == "poison" ? "#A040A0" :
            route.params?.type== "psychic" ? "#FA92B2" :
            route.params?.type == "rock" ? "#B39E51" :
            route.params?.type == "steel" ? "#B8B9C6" :"#A8A878",
          }}>
            <Image
                  source={require("./Pokebal.png")}
                  style={{opacity: 0.3, width: 250, height: 250, position: "absolute", alignItems: 'flex-end', }}/>
              <Image style={styles.pokemonPhoto}source={{uri: route.params?.art}}/>
            </View>
            <View style={{borderTopWidth: 3, borderBottomWidth: 3, 
            borderColor:
                route.params?.type == "grass" ? "#127C3D" : 
                route.params?.type == "fire" ? "#9C531F" :
                route.params?.type == "water" ? "#445E9C" :
                route.params?.type == "bug" ? "#1C4B27" :
                route.params?.type == "dark" ? "#040706" :
                route.params?.type == "dragon" ? "#001044" : 
                route.params?.type == "electric" ? "#DCB82B" :
                route.params?.type == "fairy" ? "#FA6271" :
                route.params?.type == "fighting" ? "#48180B" :
                route.params?.type == "flying" ? "#48180B" :
                route.params?.type == "ghost" ? "#705898" :
                route.params?.type == "ground" ? "#997353" :
                route.params?.type == "ice" ? "#528AAE" :
                route.params?.type == "poison" ? "#37013F" :
                route.params?.type == "psychic" ? "#A13959" :
                route.params?.type == "rock" ? "#48180B" :
                route.params?.type == "steel" ? "#787887" :"#75515B"  }}>
              <Text style={styles.pokemonName}> {route.params?.id}. {route.params?.name.charAt(0).toUpperCase() + route.params?.name.slice(1)} </Text>  
            </View>

            <View style={{flex: 2, backgroundColor: "white"}}>
              <View style={{flexDirection : "row"}}> 
                      <Text style={{fontSize: 15, flex: 1, padding: 5, textAlign: "center",
                        backgroundColor: route.params?.type == "grass" ? "#A7DB8D" : 
                        route.params?.type == "fire" ? "#F08030" :
                        route.params?.type == "water" ? "#6890F0" :
                        route.params?.type == "bug" ? "#A8B820" :
                        route.params?.type == "dark" ? "#7C7D81" :
                        route.params?.type == "dragon" ? "#7662E0" : 
                        route.params?.type == "electric" ? "#FAE078" :
                        route.params?.type == "fairy" ? "#FFB8CC" :
                        route.params?.type == "fighting" ? "#C03028" :
                        route.params?.type == "flying" ? "#C6B7F5" :
                        route.params?.type == "ghost" ? "#A292BC" :
                        route.params?.type == "ground" ? "#EBD69D" :
                        route.params?.type == "ice" ? "#BCE6E6" :
                        route.params?.type == "poison" ? "#A040A0" :
                        route.params?.type == "psychic" ? "#FA92B2" :
                        route.params?.type == "rock" ? "#B39E51" :
                        route.params?.type == "steel" ? "#B8B9C6" :"#A8A878",
                        }}>
                        {route.params?.type.charAt(0).toUpperCase() + route.params?.type.slice(1)}
                    </Text>
                {route.params?.type2 && (
                        <Text style={{fontSize: 15, flex: 1, padding: 5, textAlign: "center",
                        backgroundColor: route.params?.type2 == "grass" ? "#4E8234" : 
                        route.params?.type2 == "fire" ? "#F08030" :
                        route.params?.type2 == "water" ? "#6890F0" :
                        route.params?.type2 == "bug" ? "#A8B820" :
                        route.params?.type2 == "dark" ? "#7C7D81" :
                        route.params?.type2 == "dragon" ? "#7662E0" : 
                        route.params?.type2 == "electric" ? "#FAE078" :
                        route.params?.type2 == "fairy" ? "#FFB8CC" :
                        route.params?.type2 == "fighting" ? "#C03028" :
                        route.params?.type2 == "flying" ? "#C6B7F5" :
                        route.params?.type2 == "ghost" ? "#A292BC" :
                        route.params?.type2 == "ground" ? "#EBD69D" :
                        route.params?.type2 == "ice" ? "#BCE6E6" :
                        route.params?.type2 == "poison" ? "#A040A0" :
                        route.params?.type2 == "psychic" ? "#FA92B2" :
                        route.params?.type2 == "rock" ? "#B39E51" :
                        route.params?.type2 == "steel" ? "#B8B9C6" :"#A8A878",
                        }}>
                            {route.params?.type2.charAt(0).toUpperCase() + route.params?.type2.slice(1)}
                        </Text>
                  )}
              </View>
              <View style={styles.pokemonDetailHalf}>
                <Text style={styles.pokemonDetailText}>Regular version </Text>
                <Text style={styles.pokemonDetailText} >Shiny version </Text>
              </View>
              <View style={styles.pokemonDetailHalf}>
                <Image style={styles.pokemonSprite} source={{uri:route.params?.spriteFront}}/>
                <Image style={styles.pokemonSprite} source={{uri:route.params?.spriteBack}}/>
                <Image style={styles.pokemonSprite} source={{uri:route.params?.spriteFrontShiny}}/>
                <Image style={styles.pokemonSprite} source={{uri:route.params?.spriteFrontShiny}}/>
              </View>




            <View style={{
                        backgroundColor: route.params?.type == "grass" ? "#A7DB8D" : 
                        route.params?.type == "fire" ? "#F08030" :
                        route.params?.type == "water" ? "#6890F0" :
                        route.params?.type == "bug" ? "#A8B820" :
                        route.params?.type == "dark" ? "#7C7D81" :
                        route.params?.type == "dragon" ? "#7662E0" : 
                        route.params?.type == "electric" ? "#FAE078" :
                        route.params?.type == "fairy" ? "#FFB8CC" :
                        route.params?.type == "fighting" ? "#C03028" :
                        route.params?.type == "flying" ? "#C6B7F5" :
                        route.params?.type == "ghost" ? "#A292BC" :
                        route.params?.type == "ground" ? "#EBD69D" :
                        route.params?.type == "ice" ? "#BCE6E6" :
                        route.params?.type == "poison" ? "#A040A0" :
                        route.params?.type == "psychic" ? "#FA92B2" :
                        route.params?.type == "rock" ? "#B39E51" :
                        route.params?.type == "steel" ? "#B8B9C6" :"#A8A878",
                        }}>



                <View style={styles.whiteBox}>
                  <View style={styles.pokemonDetailHalf}>
                    <Text style={styles.pokemonDetailText}><Text style={styles.pokemonDetailTitle}>Height:</Text> {route.params?.height/ 10}M</Text>
                    <Text style={styles.pokemonDetailText}><Text style={styles.pokemonDetailTitle}>Height:</Text> {route.params?.weight/ 10}KG</Text>
                  </View>
                  <Text style={{fontSize: 2}}> </Text>


                  {route.params?.thirdAbility ?
                    <> 
                      <Text style={styles.pokemonDetailText}><Text style={styles.pokemonDetailTitle}>Abilities:</Text> {route.params?.firstAbility}, {route.params?.secondAbility} </Text>
                      <Text style={styles.pokemonDetailText}><Text style={styles.pokemonDetailTitle}>Hidden Ability:</Text> {route.params?.thirdAbility}</Text> 
                    </>
                    : 
                    
                    <View style={styles.pokemonDetailHalf}>
                      <Text style={styles.pokemonDetailText}><Text style={styles.pokemonDetailTitle}>Abilities:</Text> {route.params?.firstAbility}</Text>
                      <Text style={styles.pokemonDetailText}><Text style={styles.pokemonDetailTitle}>Hidden Ability:</Text> {route.params?.secondAbility}</Text> 
                    </View>
                  }

                  <Text style={styles.pokemonDetailTitle}> Moves:</Text>
                    {route.params?.move10 ? 
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}, {route.params?.move3}, {route.params?.move4}, {route.params?.move5}, {route.params?.move6}, {route.params?.move7}, {route.params?.move8}, {route.params?.move9}, {route.params?.move10}</Text>
                    : route.params?.move9 ? 
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}, {route.params?.move3}, {route.params?.move4}, {route.params?.move5}, {route.params?.move6}, {route.params?.move7}, {route.params?.move8}, {route.params?.move9}</Text>
                    : route.params?.move8 ? 
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}, {route.params?.move3}, {route.params?.move4}, {route.params?.move5}, {route.params?.move6}, {route.params?.move7}, {route.params?.move8}</Text>
                    : route.params?.move7 ? 
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}, {route.params?.move3}, {route.params?.move4}, {route.params?.move5}, {route.params?.move6}, {route.params?.move7}</Text>
                    : route.params?.move6 ?  
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}, {route.params?.move3}, {route.params?.move4}, {route.params?.move5}, {route.params?.move6}</Text>
                    : route.params?.move5 ? 
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}, {route.params?.move3}, {route.params?.move4}, {route.params?.move5}</Text>
                    : route.params?.move4 ?  
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}, {route.params?.move3}, {route.params?.move4}</Text>
                    : route.params?.move3 ?
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}, {route.params?.move3}</Text>
                    : route.params?.move2 ?
                      <Text style={styles.pokemonDetailMoves}>{route.params?.move1}, {route.params?.move2}</Text>
                    : <Text style={styles.pokemonDetailMoves}>{route.params?.move1}</Text>
              }
            </View>

            <View style={styles.whiteBox}>
            <Text style={styles.pokemonDetailTitle}>Stats:</Text>
              <View style={styles.pokemonStats}> 
                  <Text style={styles.pokemonStatsTitle} >HP:</Text>
                  <View  style={{flex: 1.5}}></View>
                      <View style={{width: route.params?.hp, height: 25, backgroundColor: "#FF5959", borderWidth: 3, borderColor: "#FF0000"}}>
                          <Text style={styles.pokemonStatsText}>{route.params?.hp}</Text>
                        </View>
                  </View>
              <View style={styles.pokemonStats}> 
                  <Text style={styles.pokemonStatsTitle} >Attack:</Text>
                  <View style={{width: route.params?.attack, height: 25, backgroundColor: "#F5AC78", borderWidth: 3, borderColor: "#F08030"}}>
                      <Text style={styles.pokemonStatsText}>{route.params?.attack}</Text>
                   </View>
              </View>
              <View style={styles.pokemonStats}> 
                  <Text style={styles.pokemonStatsTitle} >Defense:</Text>
                  <View style={{width: route.params?.defense, height: 25, backgroundColor: "#FAE078", borderWidth: 3, borderColor: "#F8D030"}}>
                      <Text style={styles.pokemonStatsText}>{route.params?.defense}</Text>
                   </View>
              </View>
              <View style={styles.pokemonStats}> 
                  <Text style={styles.pokemonStatsTitle} >Special Attack:</Text>
                  <View style={{width: route.params?.specialAttack, height: 25, backgroundColor: "#9DB7F5", borderWidth: 3, borderColor: "#6890F0"}}>
                      <Text style={styles.pokemonStatsText}>{route.params?.specialAttack}</Text>
                   </View>
              </View>
              <View style={styles.pokemonStats}> 
                  <Text style={styles.pokemonStatsTitle} >Special Defense:</Text>
                  <View style={{width: route.params?.specialDefense, height: 25, backgroundColor: "#A7DB8D", borderWidth: 3, borderColor: "#78C850"}}>
                      <Text style={styles.pokemonStatsText}>{route.params?.specialDefense}</Text>
                   </View>
              </View>
              <View style={styles.pokemonStats}> 
                  <Text style={styles.pokemonStatsTitle} >Speed:</Text>
                  <View style={{width: route.params?.speed, height: 25, backgroundColor: "#FA92B2", borderWidth: 3, borderColor: "#F85888"}}>
                      <Text style={styles.pokemonStatsText}>{route.params?.speed}</Text>
                   </View>
              </View>
            </View>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    </View>
    )
  }


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
    pokemonContainer: { 
      // backgroundColor: wantedSpeed == 0 ? "#000000" : item.sprites.front_default >= 5 ? "#280e19" : "#0c1322" , 
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
    pokemonPhoto: {
      width: 250,
      height: 250,
      justifyContent: 'center'
    },
    pokemonName: {
      fontSize: 35,
      textAlign: "center",
    },
    pokemonStats: {
      justifyContent: "flex-start",
      marginLeft: 15,
      marginRight: 15,
      flexDirection: "row", 
      padding: 3
    },
    pokemonStatsTitle: {
      fontSize: 15,
      flex: 1,
    },
    pokemonDetailText: {
      fontSize: 15,
      textAlign: "center",
      flex: 1,
    },
    pokemonDetailHalf: {
      flexDirection: "row", 
      justifyContent: "center"
    },
    pokemonDetailMoves: {
      fontSize: 13,
      textAlign: "center",
    },
    pokemonDetailTitle: {
      marginTop: 5,
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
    },
    pokemonStatsText: {
      textAlign: "center", 
      color: "white",
      fontSize: 15
    },
    whiteBox: {
      backgroundColor: "white",
      marginTop: 15,
      padding: 10,
    }
  });

  // export default Pokemon;