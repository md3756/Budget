import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

class Over extends React.Component {
    render() {
        <Text>
            OH NO YOU WENT OVER
        </Text>
    }
}
  
  
  const mapStateToProps = (state) => {
      const { budget } = state
      return { budget }
  }
  
  export default connect(mapStateToProps)(Over)
  