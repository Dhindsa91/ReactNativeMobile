import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './components/Spacer';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

export default function SigninScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, signin, clearErrorMessage, tryLocalSignin } = useContext(Context);


    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <Spacer>
                <Text style={styles.heading} h3>Sign In For Tracker</Text>
                <Input label="Email" 
                    autoCapitalize="none"
                    onChangeText={e=> setEmail(e)}
                    value={email}
                />
                <Input label="Password"
                    secureTextEntry   
                    autoCapitalize="none"
                    onChangeText={p=> setPassword(p)}
                    value={password}
                />
        
                <Button title="Sign In" onPress={ ()=> signin({email, password}, ()=>  navigation.navigate('mainFlow')  ) } />
                <Text style={{color: 'red', margin: 5}}>{state.errorMessage}</Text>

               <Text onPress={()=> navigation.navigate('Signup')} style={{color:'blue', textAlign: 'center' }}> Dont have an account? Sign up instead </Text>
            </Spacer>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        textAlign: 'center',
        margin: 25
    }
})