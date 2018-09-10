import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderPanel from './../components/HeaderPanel';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {login} from './../actions/AuthActions';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'Anonymous'
        }
    }
    componentWillMount(){
        if (this.props.user && this.props.user.userName) {
            this.setState({ username: this.props.user.userName});
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderPanel title={"Home"} menuAction={() => (this.props.navigation.push('Menu'))} />
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

mapStateToProps = state =>  {
    return {
        user: state.auth
    };
}

mapDispatchToProps = dispatch => {
    return bindActionCreators({
        login
    }, dispatch);
}
export default connect( mapStateToProps, mapDispatchToProps ) (Home);
