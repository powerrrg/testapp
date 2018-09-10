import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HeaderPanel from './../components/HeaderPanel';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getQuestionsList} from './../actions/StackActions';

class Stack extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    componentWillMount(){
        this.props.getQuestionsList();
    }
    componentWillReceiveProps(nexrProps){
        if(this.props.questionsList!=nexrProps.questionsList){
            this.setState({list:nexrProps.questionsList});
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderPanel title={"Stack Overflow"} menuAction={() => (this.props.navigation.push('Menu'))} />
                <FlatList
                    data={this.state.list}
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

mapStateToProps = state =>  {
    console.log(state);
    return {
        questionsList: state.stack.questionsList
    };
};
mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getQuestionsList
    }, dispatch);
};
export default connect( mapStateToProps, mapDispatchToProps ) (Stack);