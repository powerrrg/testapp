import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            isSignUp: true,
            username: '',
            email: '',
            password: '',
            error: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title1}>Welcome</Text>
                <View style={styles.cFormItem}>
                    <Image
                        style={styles.txIcon}
                        source={require('../images/icUsername.png')}
                    />
                    <TextInput
                        style={styles.txInput}
                        placeholder="Username"
                        placeholderTextColor='#21364E'
                        value={this.state.username}
                        onChangeText={(text) => { this.setState({ username: text}) }}
                        underlineColorAndroid="transparent"/>
                </View>

                <View style={styles.cFormItem}>
                    <Image
                        style={styles.txIcon}
                        source={require('../images/icPass.png')}
                    />
                    <TextInput
                        style={styles.txInput}
                        placeholder="Password"
                        placeholderTextColor='#21364E'
                        value={this.state.username}
                        onChangeText={(text) => { this.setState({ username: text}) }}
                        underlineColorAndroid="transparent"/>
                </View>

                <View style={styles.cFormItem}>
                    <TouchableOpacity style = {styles.submitBtn} onPress = { () => {alert(111)}}>
                        <Text style={styles.submitBtnText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title1: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 40,
    },
    txInput: {
        color: '#333',
        fontSize: 16,
        padding: 10,
        width: 300,
        marginLeft: 20,
        borderWidth: 1,
        borderRadius: 10
    },
    cFormItem: {
        marginTop: 10,
        marginBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5
    },
    txIcon: {
        width: 32,
        height: 32,
    },
    submitBtn: {
        backgroundColor: '#eb9122',
        padding: 10,
        borderRadius: 10,
        minWidth: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    submitBtnText: {
        color: '#fff',
        fontSize: 24
    }
});
