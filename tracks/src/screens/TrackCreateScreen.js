import React, { useEffect, useState } from 'react';
import {  StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from './components/Map';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { mockLocation } from '../_mockLocation';

export default function TrackCreateScreen() {

    const [error, setError] = useState(null)

    const startWatching = async () => {
        try{
            const x = await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000
            }, (location) => console.log("Location", location))
            if(x.granted === false) throw new Error('Permission Denied');
        }catch(e){
            setError(true);
        }
    }


    useEffect(()=>{
        startWatching();
    }, [])

    return (
        <SafeAreaView forceInset={{top: 'always'}}> 
            {<Text>{error}</Text>}
            <Text h2>Create a Track</Text>
            <Map />
        
            {error ? <Text> Please enable location services </Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})