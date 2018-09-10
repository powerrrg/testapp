import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList, View, Image} from 'react-native';

export default class Menu extends Component {
    render() {
        const menu = [
                {key: '1', title: 'Home', nav: 'Home'},
                {key: '2', title: 'Stack Overflow', nav: 'Stack'},
                {key: '3', title: 'Log Out', nav: 'Logout'}
            ];
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={menu}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            key={item.key}
                            style = {item.key%2==0?[styles.menuItem, styles.menuItemOdd]:styles.menuItem}
                            onPress = { () => {this.props.navigation.navigate(item.nav)}}
                        >
                            <Text style={styles.menuItemText}>{item.title}</Text>
                        </TouchableOpacity>
                    }
                />
                <TouchableOpacity style = {styles.tbMenuButton} onPress = { () => {this.props.navigation.goBack()}}>
                    <Image
                        style={styles.tbMenuButtonImage}
                        resizeMode={'contain'}
                        source = {require('../images/icClose.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#fff',
        height: '100%',
        paddingRight: 60
    },
    list: {
      borderWidth: 1
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
    },
    tbMenuButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        height: 40,
        width: 40
    },
    tbMenuButtonImage: {
        height: 40,
        width: 40
    }
});
