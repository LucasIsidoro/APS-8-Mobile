import React, { Component } from 'react';

import { View, TextInput, StyleSheet, TouchableOpacity, Text, Picker } from 'react-native';

import api from '../service/api'

export default class Places extends Component {
  state = {
    localidade: '',
    latitude: '',
    longitude: '',
    disaster: '',
    description: ''
  }

  handleSubmit = async () => {
    const json = {
      'localidade': `${this.state.localidade}`,
      'latitude': `${this.state.latitude}`,
      'longitude': `${this.state.longitude}`,
      'disaster': `${this.state.disaster}`,
      'description': `${this.state.description}`
    }

    await api.post('places', json)

    //redirecionando o usuário para a rota 
    this.props.navigation.navigate('Map')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Localidade'
          placeholderTextColor='#999'
          value={this.state.localidade}
          onChangeText={localidade => this.setState({ localidade })}
        />
        <Picker
          selectedValue={this.state.disaster}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ disaster: itemValue })
          }>
          <Picker.Item label="Alagamento" value="Alagamento" />
          <Picker.Item label="Poluição" value="Poluição" />
          <Picker.Item label="Desmatamento" value="Desmatamento" />
          <Picker.Item label="Queimada" value="Queimada" />
        </Picker>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Latitude'
          placeholderTextColor='#999'
          value={this.state.latitude}
          onChangeText={latitude => this.setState({ latitude })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Longitude'
          placeholderTextColor='#999'
          value={this.state.longitude}
          onChangeText={longitude => this.setState({ longitude })}
        />
        <TextInput
          style={styles.inputBox}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Description'
          placeholderTextColor='#999'
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        <TouchableOpacity style={styles.shareButton} onPress={this.handleSubmit}>
          <Text style={styles.shareButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop: 10,
    fontSize: 16,
  },
  inputBox: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 100,
    padding: 15,
    marginTop: 10,
    fontSize: 16,
  },
  shareButton: {
    backgroundColor: '#7159c1',
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  shareButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  }
})
