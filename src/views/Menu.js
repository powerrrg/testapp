import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';

export default class Menu extends Component {
    render() {
        const menu = [
                {key: '1', title: 'Home'},
                {key: '2', title: 'Stack Overflow'},
                {key: '3', title: 'Log Out'}
            ];
        return (
            <FlatList
                data={menu}
                renderItem={({item}) =>
                    <TouchableOpacity key={item.key} style = {item.key%2==0?[styles.menuItem, styles.menuItemOdd]:styles.menuItem} onPress = { () => {this.props.navigation.navigate("Home")}}>
                        <Text style={styles.menuItemText}>{item.title}</Text>
                    </TouchableOpacity>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    menuItem: {
        backgroundColor: '#fff',
        padding: 20
    },
    menuItemOdd: {
        backgroundColor: '#eee',
    },
    menuItemText: {
        fontSize: 20
    }
});
