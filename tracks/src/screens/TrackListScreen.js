import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TrackListScreen({navigation}) {
    return (
        <View>
            <Text style={{fontSize: 48}}>TrackListScreen</Text>
            <Button title="Go To Track Detail" onPress={()=> navigation.navigate('TrackDetail')} />
        </View>
    )
}

const style = StyleSheet.create({})