import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

const Detail = () => {
  const route: RouteProp<any> = useRoute();
  let color = "#A8A878";
    switch (route.params?.type) {
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
      case "psycic":         color =  "#FA92B2";   break;
      case "rock":           color =  "#B39E51";   break;
      case "steel":          color =  "#B8B9C6";   break;
    }
    let color2 = "#A8A878";
    switch (route.params?.type2) {
      case "grass":          color2 =  "#A7DB8D";   break;
      case "fire":           color2 =  "#F08030";   break;
      case "water":          color2 =  "#6890F0";   break;
      case "bug":            color2 =  "#88950C";   break;
      case "dark":           color2 =  "#7C7D81";   break;
      case "dragon":         color2 =  "#7662E0";   break;
      case "electric":       color2 =  "#FAE078";   break;
      case "fairy":          color2 =  "#FFB8CC";   break;
      case "fighting":       color2 =  "#C03028";   break;
      case "flying":         color2 =  "#C6B7F5";   break;
      case "ghost":          color2 =  "#A292BC";   break;
      case "ground":         color2 =  "#EBD69D";   break;
      case "ice":            color2 =  "#BCE6E6";   break;
      case "poison":         color2 =  "#A040A0";   break;
      case "psycic":         color2 =  "#FA92B2";   break;
      case "rock":           color2 =  "#B39E51";   break;
      case "steel":          color2 =  "#B8B9C6";   break;
    }
    let borderPokemonColor = "#75515B";
    switch (route.params?.type) {
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
      case "psycic":         borderPokemonColor  =  "#A13959";   break;
      case "rock":           borderPokemonColor  =  "#B39E51";   break;
      case "steel":          borderPokemonColor  =  "#787887";   break;     
    }
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color,
          }}
        >
          <Image
            source={require("./Pokebal.png")}
            style={styles.pokeball}
          />
          <Image
            style={styles.pokemonPhoto}
            source={{ uri: route.params?.art }}
          />
        </View>
        <View
          style={{
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderColor: borderPokemonColor
          }}
        >
          <Text style={styles.pokemonName}>
            {" "}
            {route.params?.id}.{" "}
            {route.params?.name.charAt(0).toUpperCase() +
              route.params?.name.slice(1)}{" "}
          </Text>
        </View>

        <View style={{ flex: 2, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 15,
                flex: 1,
                padding: 5,
                textAlign: "center",
                backgroundColor: color
              }}
            >
              {route.params?.type.charAt(0).toUpperCase() +
                route.params?.type.slice(1)}
            </Text>
            {route.params?.type2 && (
              <Text
                style={{
                  fontSize: 15,
                  flex: 1,
                  padding: 5,
                  textAlign: "center",
                   backgroundColor: color2
                }}
              >
                {route.params?.type2.charAt(0).toUpperCase() +
                  route.params?.type2.slice(1)}
              </Text>
            )}
          </View>
          <View style={styles.pokemonDetailHalf}>
            <Text style={styles.pokemonDetailText}>Regular version </Text>
            <Text style={styles.pokemonDetailText}>Shiny version </Text>
          </View>
          <View style={styles.pokemonDetailHalf}>
            <Image
              style={styles.pokemonSprite}
              source={{ uri: route.params?.spriteFront }}
            />
            <Image
              style={styles.pokemonSprite}
              source={{ uri: route.params?.spriteBack }}
            />
            <Image
              style={styles.pokemonSprite}
              source={{ uri: route.params?.spriteFrontShiny }}
            />
            <Image
              style={styles.pokemonSprite}
              source={{ uri: route.params?.spriteFrontShiny }}
            />
          </View>

          <View
            style={{
              backgroundColor: color
            }}
          >
            <View style={styles.whiteBox}>
              <View style={styles.pokemonDetailHalf}>
                <Text style={styles.pokemonDetailText}>
                  <Text style={styles.pokemonDetailTitle}>Height:</Text>{" "}
                  {route.params?.height / 10}M
                </Text>
                <Text style={styles.pokemonDetailText}>
                  <Text style={styles.pokemonDetailTitle}>Height:</Text>{" "}
                  {route.params?.weight / 10}KG
                </Text>
              </View>
              <Text style={{ fontSize: 2 }}> </Text>

              {route.params?.thirdAbility ? (
                <>
                  <Text style={styles.pokemonDetailText}>
                    <Text style={styles.pokemonDetailTitle}>Abilities:</Text>{" "}
                    {route.params?.firstAbility}, {route.params?.secondAbility}{" "}
                  </Text>
                  <Text style={styles.pokemonDetailText}>
                    <Text style={styles.pokemonDetailTitle}>
                      Hidden Ability:
                    </Text>{" "}
                    {route.params?.thirdAbility}
                  </Text>
                </>
              ) : (
                <View style={styles.pokemonDetailHalf}>
                  <Text style={styles.pokemonDetailText}>
                    <Text style={styles.pokemonDetailTitle}>Abilities:</Text>{" "}
                    {route.params?.firstAbility}
                  </Text>
                  <Text style={styles.pokemonDetailText}>
                    <Text style={styles.pokemonDetailTitle}>
                      Hidden Ability:
                    </Text>{" "}
                    {route.params?.secondAbility}
                  </Text>
                </View>
              )}


              <Text style={styles.pokemonDetailTitle}> Moves:</Text>
              {route.params?.move10 ? (
                <Text style={styles.pokemonDetailMoves}>
                  {route.params?.move1}, {route.params?.move2},{" "}
                  {route.params?.move3}, {route.params?.move4},{" "}
                  {route.params?.move5}, {route.params?.move6},{" "}
                  {route.params?.move7}, {route.params?.move8},{" "}
                  {route.params?.move9}, {route.params?.move10}
                </Text>
              ) : route.params?.move8 ? (
                <Text style={styles.pokemonDetailMoves}>
                  {route.params?.move1}, {route.params?.move2},{" "}
                  {route.params?.move3}, {route.params?.move4},{" "}
                  {route.params?.move5}, {route.params?.move6},{" "}
                  {route.params?.move7}, {route.params?.move8}
                </Text>
              ) : route.params?.move6 ? (
                <Text style={styles.pokemonDetailMoves}>
                  {route.params?.move1}, {route.params?.move2},{" "}
                  {route.params?.move3}, {route.params?.move4},{" "}
                  {route.params?.move5}, {route.params?.move6}
                </Text>
              ) : route.params?.move4 ? (
                <Text style={styles.pokemonDetailMoves}>
                  {route.params?.move1}, {route.params?.move2},{" "}
                  {route.params?.move3}, {route.params?.move4}
                </Text>
              ) : route.params?.move3 ? (
                <Text style={styles.pokemonDetailMoves}>
                  {route.params?.move1}, {route.params?.move2},{" "}
                  {route.params?.move3}
                </Text>
              ) : route.params?.move2 ? (
                <Text style={styles.pokemonDetailMoves}>
                  {route.params?.move1}, {route.params?.move2}
                </Text>
              ) : (
                <Text style={styles.pokemonDetailMoves}>
                  {route.params?.move1}
                </Text>
              )}
            </View>

            <View style={styles.whiteBox}>
              <Text style={styles.pokemonDetailTitle}>Stats:</Text>
              <View style={styles.pokemonStats}>
                <Text style={styles.pokemonStatsTitle}>HP:</Text>
                <View style={{ flex: 1.5 }}></View>
                <View
                  style={{
                    width: route.params?.hp,
                    height: 25,
                    backgroundColor: "#FF5959",
                    borderWidth: 3,
                    borderColor: "#FF0000",
                  }}
                >
                  <Text style={styles.pokemonStatsText}>
                    {route.params?.hp}
                  </Text>
                </View>
              </View>
              <View style={styles.pokemonStats}>
                <Text style={styles.pokemonStatsTitle}>Attack:</Text>
                <View
                  style={{
                    width: route.params?.attack,
                    height: 25,
                    backgroundColor: "#F5AC78",
                    borderWidth: 3,
                    borderColor: "#F08030",
                  }}
                >
                  <Text style={styles.pokemonStatsText}>
                    {route.params?.attack}
                  </Text>
                </View>
              </View>
              <View style={styles.pokemonStats}>
                <Text style={styles.pokemonStatsTitle}>Defense:</Text>
                <View
                  style={{
                    width: route.params?.defense,
                    height: 25,
                    backgroundColor: "#FAE078",
                    borderWidth: 3,
                    borderColor: "#F8D030",
                  }}
                >
                  <Text style={styles.pokemonStatsText}>
                    {route.params?.defense}
                  </Text>
                </View>
              </View>
              <View style={styles.pokemonStats}>
                <Text style={styles.pokemonStatsTitle}>Special Attack:</Text>
                <View
                  style={{
                    width: route.params?.specialAttack,
                    height: 25,
                    backgroundColor: "#9DB7F5",
                    borderWidth: 3,
                    borderColor: "#6890F0",
                  }}
                >
                  <Text style={styles.pokemonStatsText}>
                    {route.params?.specialAttack}
                  </Text>
                </View>
              </View>
              <View style={styles.pokemonStats}>
                <Text style={styles.pokemonStatsTitle}>Special Defense:</Text>
                <View
                  style={{
                    width: route.params?.specialDefense,
                    height: 25,
                    backgroundColor: "#A7DB8D",
                    borderWidth: 3,
                    borderColor: "#78C850",
                  }}
                >
                  <Text style={styles.pokemonStatsText}>
                    {route.params?.specialDefense}
                  </Text>
                </View>
              </View>
              <View style={styles.pokemonStats}>
                <Text style={styles.pokemonStatsTitle}>Speed:</Text>
                <View
                  style={{
                    width: route.params?.speed,
                    height: 25,
                    backgroundColor: "#FA92B2",
                    borderWidth: 3,
                    borderColor: "#F85888",
                  }}
                >
                  <Text style={styles.pokemonStatsText}>
                    {route.params?.speed}
                  </Text>
                </View>
              </View>
            </View>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonSprite: {
    width: 100,
    height: 100,
  },
  pokemonPhoto: {
    width: 250,
    height: 250,
    justifyContent: "center",
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
    padding: 3,
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
    justifyContent: "center",
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
    fontSize: 15,
  },
  whiteBox: {
    backgroundColor: "white",
    marginTop: 15,
    padding: 10,
  },
  pokeball: {
    opacity: 0.3,
    width: 250,
    height: 250,
    position: "absolute",
    alignItems: "flex-end",
  },
});

export default Detail;
