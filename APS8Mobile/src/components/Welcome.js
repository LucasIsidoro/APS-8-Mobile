import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Welcome extends Component {
   render() {
      return (
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Places') }}>
               <Text>Bem vindo!</Text>
            </TouchableHighlight>
         </View>
      )
   }
}

