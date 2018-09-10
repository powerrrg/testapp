import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderPanel from './../components/HeaderPanel';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'AgileEngine'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderPanel title={"Home"} menuAction={() => (this.props.navigation.navigate('Menu'))} />
                <Text style={styles.title1}>Hello, {this.state.username}!</Text>
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
    }
});
