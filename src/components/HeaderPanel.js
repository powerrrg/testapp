import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

class HeaderPanel extends Component {
    render() {
        return (
            <View style={styles.topBarContainer}>
                <TouchableOpacity style = {styles.tbMenuButton} onPress = {() => {alert(222)}}>
                    <Image
                        style={styles.tbMenuButtonImage}
                        resizeMode={'contain'}
                        source = { require('../images/icMenu.png') }
                    />
                </TouchableOpacity>
                <Text style={styles.tbCenterText}> {this.props.title} </Text>
            </View>
        );
    }
}

HeaderPanel.propTypes = {
    title: PropTypes.string,
};

const styles = StyleSheet.create({
    topBarContainer: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: 60,
        paddingRight: 60,
        minHeight: 60,
        backgroundColor: 'rgba(255, 166, 58, 1)',
        borderBottomWidth: 2,
        borderColor: '#ff803a'
    },
    tbCenterText: {
        textAlign: 'center',
        fontSize: 32,
        letterSpacing: 1,
        fontWeight: 'bold',
        paddingTop: 6,
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    tbMenuButton: {
        position: 'absolute',
        left: 15,
        top: 10,
        height: 40,
        width: 40
    },
    tbMenuButtonImage: {
        height: 40,
        width: 40
    }
});

export default HeaderPanel;