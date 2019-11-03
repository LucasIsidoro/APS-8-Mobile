import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Welcome extends Component {
   render() {
      return (
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>Disaster's Management</Text>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Places') }}>
               <Text>Bem vindo!</Text>
            </TouchableHighlight>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   title:{
      fontSize: 20,
      color: '#333'
   }
})

