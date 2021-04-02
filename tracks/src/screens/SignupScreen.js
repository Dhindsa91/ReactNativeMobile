import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './components/Spacer';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';


export default function SignupScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, signup, clearErrorMessage } = useContext(Context);


    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <Spacer>
                <Text style={styles.heading} h3>Sign Up For Tracker</Text>
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
        
                <Button title="Sign Up" onPress={ ()=> signup({email, password}, ()=>  navigation.navigate('mainFlow')  ) } />
                <Text style={{color: 'red', margin: 5}}>{state.errorMessage}</Text>

              <Text onPress={()=> navigation.navigate('Signin') } style={{color:'blue', textAlign: 'center' }}> Already Have an account? Sign in instead </Text> 
            </Spacer>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
    
    }
}


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