import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button  } from 'react-native-elements';
import Spacer from './components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export default function AccountScreen() {

   const [Swipe, setSwipe] = useState("DEFAULT")

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal>
            <GestureRecognizer
                onSwipe={(direction, state) => setSwipe(`SWIPED UP ${direction}`) }
                onSwipeUp={(state) => setSwipe("SWIPED DOWN") }
                >
                {[1].map(num=>(
                    <View style={{ backgroundColor: `#${Math.floor(100000 + Math.random() * 900000)}`, ...styles.continer_box}}>
                       <Text> {Swipe} </Text>
                    </View>
                ))}
            </GestureRecognizer>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    continer_box:{
        height: 300,
        width: 300,
    }

})