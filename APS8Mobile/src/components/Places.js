import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

import api from '../service/api'

export default class Places extends Component {
  

//   handleSubmit = async () => {
//     const data = new FormData()

//       data.append('localidade', this.state.localidade)
//       data.append('latitude', this.state.latitude)
//       data.append('longitude', this.state.longitude)

//       await api.post('places', data)

//       //redirecionando o usuário para a rota 
//       this.props.navigation.navigate('Map')
//  }

  render() {
    return (
      <View>
        <TextInput
               //style={styles.input}
               autoCorrect={false}
               autoCapitalize='none'
               placeholder='Localidade'
               placeholderTextColor='#999'
               //value={this.state.localidade}
               //onChangeText={localidade => this.setState({ localidade })}
            />
        <TextInput
               //style={styles.input}
               autoCorrect={false}
               autoCapitalize='none'
               placeholder='Latitude'
               placeholderTextColor='#999'
               //value={this.state.latitude}
               //onChangeText={latitude => this.setState({ latitude })}
            />
        <TextInput
               //style={styles.input}
               autoCorrect={false}
               autoCapitalize='none'
               placeholder='Longitude'
               placeholderTextColor='#999'
               //value={this.state.longitude}
               //onChangeText={longitude => this.setState({ longitude })}
            />
        
      </View>
    )
  }
}
