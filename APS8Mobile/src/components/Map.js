import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';

import api from '../service/api'

export default class Map extends Component {
  state = {
    places: []
  }

  async componentDidMount() {
    const response = await api.get('places')

    this.setState({ places: response.data })
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.places}
          keyExtractor={place => place._id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.localidade}</Text>
              <Text>{item.latitude}</Text>
              <Text>{item.longitude}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}
