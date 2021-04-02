import CreateDataContext from './createDataContext';
import axios from 'axios';

import config from '../../config'
import  AsyncStorage from '@react-native-community/async-storage';

import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    console.log(action.payload);
    switch(action.type){
        case 'signup':
            return { ...state, token: action.payload };
        case 'signin':
            return { ...state, token: action.payload };
        case 'signin':
            return { ...state, token: action.payload };
        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}


function tryLocalSignin(dispatch){
    return async() => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            dispatch({type: 'signin', payload: token});
            navigate('TrackList');
        } else {
            navigate('LoginFlow');
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return(data) => {
        dispatch({type: 'error', payload: '' });
    }
}


const signup = (dispatch) => {
    return (data) => {

        axios({
            method: "post",
            url: `${config.API}/signup`,
            data: {
                email: data.email,
                password: data.password
            }
        }).then(async results => {
            console.log(123, results)
            await AsyncStorage.setItem('token', results.data.token);
            dispatch({type: 'signup', payload: results.data.token});
            navigate('TrackList');
        })
        .catch(err=> {
            console.log(err);
            dispatch({type: 'error', payload: err.message});
        })

     

        // callback();
    }
}

const signin = (dispatch) => {
    return (data, callback) => {
        console.log("SIGNING IN...", data, config.API)
        axios({
            method: "post",
            url: `${config.API}/signin`,
            data: {
                email: data.email,
                password: data.password
            }
        }).then(async results => {
            console.log("Signin Results",  AsyncStorage);
            await AsyncStorage.setItem('token', results.data.token);
            dispatch({type: 'signin', payload: results.data.token});
            callback()
        })
        .catch(err=> {
            console.log("ERROR", err);
            dispatch({type: 'error', payload: err.message});
          
        })

        // navigate('TrackList');

    }
}

const signout = (dispatch) => {
    return async() => {
        await AsyncStorage.setItem('token', null);
        dispatch({type: 'signout', payload:{}});

         navigate('loginFlow');
    }
}


export const {Context, Provider} = CreateDataContext(authReducer, {signup, signin, signout, clearErrorMessage, tryLocalSignin}, { token: null, errorMessage: '' })