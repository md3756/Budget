import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './home';
import Expenses from './expenses';
import AddExpense from './addExpense';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import budgetReducer from './budgetReducer';
import {Provider as PaperProvider } from 'react-native-paper';


const store = createStore(budgetReducer);

const screens = {
  Home:Home,
  Expenses:Expenses,
  AddExpense:AddExpense, 
};
const navigation = createStackNavigator(screens, {initialRouteName: "Home"});

const NavigationContainer = createAppContainer(navigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default class App extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <StoreProvider store = { store }>
            <PaperProvider>
              <NavigationContainer/>
            </PaperProvider>
          </StoreProvider>
        </View>
    );
  }
  
}


