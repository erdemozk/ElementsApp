import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Router from './src/core/Router';


const App = () => {

    return (
        <SafeAreaView>
            <StatusBar/>
            <Router/>
        </SafeAreaView>
    );
};

export default App;
