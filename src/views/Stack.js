import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HeaderPanel from './../components/HeaderPanel';

export default class Stack extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const menu = [
            {key: '1', title: 'What is the difference between React Native and React?'},
            {key: '2', title: 'Hide keyboard in react-native'},
            {key: '3', title: 'How to do logging in React Native?'},
            {key: '4', title: 'What is the difference between React Native and React?'},
            {key: '5', title: 'Hide keyboard in react-native'},
            {key: '6', title: 'How to do logging in React Native?'},
            {key: '7', title: 'What is the difference between React Native and React?'},
            {key: '8', title: 'Hide keyboard in react-native'},
            {key: '9', title: 'How to do logging in React Native?'},
            {key: '10', title: 'What is the difference between React Native and React?'},
            {key: '11', title: 'Hide keyboard in react-native'},
            {key: '12', title: 'How to do logging in React Native?'},
            {key: '13', title: 'What is the difference between React Native and React?'},
            {key: '14', title: 'Hide keyboard in react-native'},
            {key: '15', title: 'How to do logging in React Native?'},
            {key: '16', title: 'What is the difference between React Native and React?'},
            {key: '17', title: 'Hide keyboard in react-native'},
            {key: '18', title: 'How to do logging in React Native?'}
        ];
        return (
            <View style={styles.container}>
                <HeaderPanel title={"Stack Overflow"} menuAction={() => (this.props.navigation.push('Menu'))} />
                <FlatList
                    data={menu}
                    renderItem={({item}) =>
                        <View
                            key={item.key}
                            style = {item.key%2==0?[styles.menuItem, styles.menuItemOdd]:styles.menuItem}
                        >
                            <Text style={styles.menuItemText}>{item.title}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    title1: {
        fontSize: 36,
        textAlign: 'center',
        marginTop: 100
    },
    menuItem: {
        backgroundColor: '#eee',
        padding: 20
    },
    menuItemOdd: {
        backgroundColor: '#fff',
    },
    menuItemText: {
        fontSize: 20
    }
});
