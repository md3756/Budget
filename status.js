import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { report } from './budgetReducer'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'powderblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

class Status extends React.Component {
  render( ) {
    return (
      <View style={styles.container}>
        <Text>
            HELLO YOU ARE HERE 
            {this.props.report}
        </Text>
        
        
        }
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
        report
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Status)

