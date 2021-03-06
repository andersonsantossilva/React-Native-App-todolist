import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { colors } from '../Colors';

export default class TodoModal extends React.Component {
    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        todos: this.props.list.todos
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{position: 'absolute', top: 64, right: 32, zIndex: 10}}>
                    <AntDesign name='close' size={24} color={colors.black} />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});