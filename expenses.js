import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { modalvis } from './budgetActions'

import * as WebBrowser from 'expo-web-browser';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'powderblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 24
    }, 
    card: {
        justifyContent: "center",
        elevation: 3,
        padding: 15,
        margin: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 7
    }
});

class Expenses extends React.Component {
    state = {
        result: null,
    };
    _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.wikihow.com/Manage-Your-Money-Wisely');
        this.setState({ result });
      };
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.text}>Here are your Expenses! {"\n"}
            Initial: ${this.props.budget.weekAmount}
            </Text>
            <ScrollView>
                {this.props.budget.expenses.map((expense, index) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>
                        Amount: ${expense.expense} {"\n"}
                        Date: {expense.date}
                        </Text>
                    </View>
                ))}
            </ScrollView>   
            <Button
            title="Need Help?"
            onPress={this._handlePressButtonAsync}
            />

            <Button
            title="Add an expense"
            onPress={() =>
                this.props.navigation.navigate('AddExpense')
            }
            disabled={this.props.budget.weekAmount == "0"}
            
            />

            <Button
            title="Back to home"
            onPress={() =>
                this.props.navigation.navigate('Home')
            }
            />
        </View>
    )
    
  }
}

const mapStateToProps = (state) => {
    const { budget } = state
    return { budget }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        modalvis
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Expenses)
