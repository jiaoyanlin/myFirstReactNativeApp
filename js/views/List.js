import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Root extends Component {
    handlePressNav(nav) {
        this.props.navigation.navigate(nav)
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.handlePressNav('Chat') }}>
                   <Text>1这是一个列表页</Text>
                </TouchableOpacity>
                <Text>2这是一个列表页</Text>
                <Text>3这是一个列表页</Text>
                <Text>4这是一个列表页</Text>
            </View>
        );
    }
}
