import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {login} from './../actions/AuthActions';

class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }
    login(){
        let username = 'Roma';
        let password = 'number1';
        if(this.state.username=='' || this.state.password==''){
            this.setState({error: 'Fields Username and Password cannot be empty'});
        } else if(this.state.username!=username || this.state.password!=password) {
            this.setState({error: 'Login failed wrong user credentials'});
        } else {
            this.setState({error: ''});
            this.props.login({userName: this.state.username});
            this.setState({username: '', password: ''});
            this.props.navigation.navigate("Home");
        }
    }
    showValidationErrors(){
        if(this.state.error){
            return (
                <View style={styles.cValidErrors}>
                    <Text style={styles.validErrorsText}>{this.state.error}</Text>
                </View>
            )
        } else return null;
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
                        onChangeText={(text) => {this.setState({username: text})}}
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
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(text) => {this.setState({ password: text})}}
                        underlineColorAndroid="transparent"/>
                </View>
                {this.showValidationErrors()}
                <View style={styles.cFormItem}>
                    <TouchableOpacity style = {styles.submitBtn} onPress = {()=>{this.login()}}>
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
    },
    cValidErrors: {
        marginTop: 10
    },
    validErrorsText: {
        color: '#ff0000'
    }
});

mapStateToProps = state =>  {
    return {
        user: state.auth.login
    };
}

mapDispatchToProps = dispatch => {
    return bindActionCreators({
        login
    }, dispatch);
}
export default connect( mapStateToProps, mapDispatchToProps ) (Auth);
