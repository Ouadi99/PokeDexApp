import * as React from "react";
import { useCallback, useEffect, useRef, useState} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import  MapView ,{ PROVIDER_GOOGLE, Marker, Region, Callout} from 'react-native-maps';
import mapStyle from '../Styles/mapStyle';

const getRandomLatitude = (min = 48, max = 56) => {
  return Math.random() * (max - min) + min
}
const getRandomLongitude = (min = 14, max = 24) => {
    return Math.random() * (max - min) + min
}
const getZoomFromRegion = (region: Region) => {
    return Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2)
}
interface Markers {
    id: number
    latitude: number
    longitude: number
}
const PokeMapScreen = () => {
    const map = useRef(null)

    const [zoom, setZoom] = useState<number>(18)
    const [markers, setMarkers] = useState<Markers[]>([
        { id: 0, latitude: 53.91326738786109, longitude: 27.523712915343737 },
    ])
    const [region, setRegion] = useState<Region>({
        latitude: 51.23006,
        longitude: 4.41614,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    })
    const generateMarkers = useCallback((lat: number, long: number) => {
        const markersArray = []

        for (let i = 0; i < 100; i++) {
            markersArray.push({
                id: i,
                latitude: getRandomLatitude(lat - 0.05, lat + 0.05),
                longitude: getRandomLongitude(long - 0.05, long + 0.05),
            })
        }
        setMarkers(markersArray)
    }, [])


    const onRegionChangeComplete = (newRegion: Region) => {
        setZoom(getZoomFromRegion(newRegion))
        setRegion(newRegion)
    }

    useEffect(() => {
        generateMarkers(region.latitude, region.longitude)
    }, [])

  return (
        <MapView 
    style={styles.map}
    ref={map} 
    initialRegion={region}
    customMapStyle={mapStyle} 
    showsUserLocation={true} 
    provider={PROVIDER_GOOGLE}
    onRegionChangeComplete={onRegionChangeComplete}>
       {markers.map((item) => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            >
                <Image 
                source={require('../assets/pokeball.jpeg')}
                style={{width: 26, height: 28}}
                resizeMode="contain"/>
                <Callout>
                    <View>
                        <Image
                            style={{height:200,width:200}}
                            source={{
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}}
                        />
                    </View>
                </Callout>
            </Marker>
        ))} 
    </MapView>
    )
}
const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    Callout: {
        borderRadius: 5
    },
})
export default PokeMapScreen