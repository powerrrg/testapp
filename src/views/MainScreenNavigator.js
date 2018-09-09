import React, { Component } from 'react'
import {createStackNavigator} from "react-navigation";

import AuthView from './Auth'
import HomeView from './Home'

const MainScreenNavigator = createStackNavigator({
    Auth: {
        screen: AuthView,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    Home: {
        screen: HomeView,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
});


export default MainScreenNavigator;
