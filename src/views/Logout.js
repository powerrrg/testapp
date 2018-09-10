import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HeaderPanel from './../components/HeaderPanel';

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'AgileEngine'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderPanel title={"Log Out"} menuAction={() => (this.props.navigation.push('Menu'))}  />
                <Text style={styles.title1}>Good Bye</Text>
                <View style={styles.cFormItem}>
                    <TouchableOpacity style = {styles.btnLogout} onPress = { () => {this.props.navigation.navigate("Auth")}}>
                        <Text style={styles.btnLogoutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
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
        fontSize: 46,
        textAlign: 'center',
        marginTop: 100
    },
    btnLogout: {
        backgroundColor: '#eb9122',
        padding: 10,
        borderRadius: 10,
        minWidth: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    btnLogoutText: {
        color: '#fff',
        fontSize: 24
    },
    cFormItem: {
        marginTop: 10,
        marginBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5
    },
});
