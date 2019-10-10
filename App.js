/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StatusBar, } from 'react-native';
import { Provider } from "context-q";
import Viewer from "./components/Viewer";
import Button from "./components/Button";

const App: () => React$Node = () => {
  return (
    <>
      <Provider defaultState={{ count: 0 }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Viewer/>
          <Button/>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
