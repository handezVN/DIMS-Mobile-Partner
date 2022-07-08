/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';

import DataProvider from './redux/store';
import MainScreen from './MainScreen';
axios.defaults.baseURL = 'https://dims-system.herokuapp.com';

const App = () => {
    return (
        <DataProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <MainScreen></MainScreen>
            </SafeAreaView>
        </DataProvider>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
