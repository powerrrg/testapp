import React, { Component } from 'react'
import {createStackNavigator} from "react-navigation";

import AuthView from './Auth';
import HomeView from './Home';
import MenuView from './Menu';
import StackView from './Stack';
import LogoutView from './Logout';

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
    Menu: {
        screen: MenuView,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    Stack: {
        screen: StackView,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    Logout: {
        screen: LogoutView,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
});

export default MainScreenNavigator;
