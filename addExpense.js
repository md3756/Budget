import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { TextInput } from 'react-native-paper'
import { connect } from 'react-redux'
import { addExp, setExp } from "./budgetActions"
import { bindActionCreators } from 'redux';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'powderblue',
      alignItems: 'center',
      justifyContent: 'center',
    },

});

class AddExpense extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>
            Add an Expense
        </Text>
        <TextInput
            style={{flexDirection: 'row'}}
            mode="outlined"
            placeholder="Amount"
            onChangeText={this.props.setExp}
            value={this.props.budget.exp}
            keyboardType='decimal-pad'
        />
        <Button
          title="Add an expense"
          onPress={this.props.addExp}
          disabled={!this.props.budget.exp}
        />

        <Button
            title="Your Expenses"
            onPress={() =>
            this.props.navigation.navigate('Expenses')}
        />
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
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
        setExp,
        addExp
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense)
