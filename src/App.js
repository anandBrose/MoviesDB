import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/common/Header';
import {createStore} from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

type Props = {};
export default class App extends Component < Props > {

    componentWillMount() {

    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Header title="Home" name='Name'></Header>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});