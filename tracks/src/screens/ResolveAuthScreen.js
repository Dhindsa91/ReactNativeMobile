import React, {useEffect, useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Context as AuthContext} from '../context/AuthContext';

export default function ResolveAuthScreen() {

    
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(()=>{
        tryLocalSignin();
    }, [])



    return <Text>'loading...' </Text>;
}

const styles = StyleSheet.create({

})