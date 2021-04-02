import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';


export default function Map() {

    let points = [];
    for(let i = 0; i < 10; i++ ){
        points.push({
            latitude: 37.33 * i,
            longitude: -122.03121 * i
        })
    }

    return  <MapView 
    style={styles.map}
    initialRegion={{
        latitude: 37.33,
        longitude: -122.03121,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    }}
    >
        <Polyline 
            coordinates={points}
            strokeWidth={1}
            strokeColor="red"
            fillColor="rgba(255,0,0,0.5)" />
    </MapView>
    
}

const styles = StyleSheet.create({
    map: {
        height: 300,

    }
})

// const startWatching = async () => {
//     try {
//       const { granted } = await requestPermissionsAsync();
//       if (!granted) {
//         throw new Error('Location permission not granted');
//       }
//     } catch (e) {
//       setErr(e);
//     }
//   };