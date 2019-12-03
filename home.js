import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {TextInput} from 'react-native-paper'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAmount, changeAmount, reset } from './budgetActions'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'powderblue',
      alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 24
    }, 
    inputRow: {
        flexDirection:'row',
        alignItems: 'center'
    },
    textInput: {
        flex: 1, 
    },
    button: {
        color: "red"
    }
});



class Home extends React.Component {
    static navigationOptions = {
        title: "HOME"
    }
    render() {
        return (
            <View style={styles.container}>
            <Text style={{fontSize:30}}>
            Welcome!
            </Text>
            <Text style={{fontSize:16}}>
            How much do you want to spend per week?
            </Text>
            <Text style={styles.text}>
            {"\n"}
            Your Weekly Amount: ${this.props.budget.weekAmount} {"\n"}
            Spent: ${this.props.budget.amountSpent} {"\n"}
            Remaining: ${this.props.budget.amountLeft} {"\n"}
            </Text>
            <View style={styles.inputRow}>
                <TextInput
                    mode='outlined'
                    selectionColor="lightblue"
                    style={styles.textInput}
                    placeholder="Amount"
                    onChangeText={this.props.setAmount}
                    value={this.props.budget.amt}
                    keyboardType='decimal-pad'
                />
                <Button
                    style={styles.button}
                    title="Change Amount"
                    onPress ={this.props.changeAmount}
                    disabled={!this.props.budget.amt}                />
            </View>

            <Button
                title="Press to Add Expense"
                onPress={() =>
                this.props.navigation.navigate('AddExpense')
                }
                disabled={this.props.budget.weekAmount == "0"} 
            />
            <Button
                title="Your Expenses"
                onPress={() =>
                this.props.navigation.navigate('Expenses')
                }
            />
            <Button
                title="New Week! Reset!"
                onPress={this.props.reset}
            />
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const { budget } = state
    return { budget }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setAmount,
        changeAmount,
        reset
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home)