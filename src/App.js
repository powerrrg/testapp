import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainScreenNavigator from './views/MainScreenNavigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const App = () => {
    return (
        <Provider store={ store }>
            <MainScreenNavigator />
        </Provider>
    );
};

export default App;