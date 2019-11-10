import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

import api from '../service/api';

let { width, height } = Dimensions.get('window');

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      width: width,
      marginBottom: 1,
      region: null,
      ready: false,
      bottomMargin: 1,
      places: [],
      
    };
  }

  async getCurrentPosition() {
    try {
      Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        const region = ({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.00543,
            longitudeDelta: 0.00534,
          }
        });
        this.setState(region);
        ;
      }, (error) => {
        //TODO: better design
        switch (error.code) {
          case 1:
            if (Platform.OS === "ios") {
              //Alert.alert("", "Para habilitar permisão de acesso a Localizaçào entre em Ajustes - Privacidade - Localização");
            }
            else {
              //Alert.alert("", "Para habilitar permisão de acesso a Localizaçào entre em Ajustes - Apps - ShareTools - Localização");
            }
            break;
          default:
          //Alert.alert("", "Erro ao identificar sua localização");
        }
      }, {
        timeout: 20000,
        enableHighAccuracy: true,
        //maximumAge: 1000,
      });
    } catch (e) {
      alert(e.message || "");
    }
  }

  async componentDidMount() {
    this.getCurrentPosition();
    const response = await api.get('places')
    this.setState({ places: response.data })
  }

  // onMapReady = (e) => {
  //   if (!this.state.ready) {
  //     this.setState({ marginBottom: 1 });
  //     this.setState({ ready: true });
  //   }
  //   this.setState({ marginBottom: 1 });
  // };

  render() {
    //const { region } = this.state;
    //const { children, renderMarker, markers } = this.props;

    return (
      <View style={styles.container}>

        <MapView
          mapPadding={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}

          provider={PROVIDER_GOOGLE}
          onMapReady={this.onMapReady}
          style={{
            marginBottom: this.state.bottomMargin,             // using state in styling
            ...StyleSheet.absoluteFillObject,
          }}
          initialRegion={this.state.region}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChange}
          onMapReady={() => this.setState({ bottomMargin: 0 })}
          followsUserLocation={true}
          showsUserLocation
          loadingEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsCompass={true}
          showsBuildings={false}
          showsPointsOfInterest={false}
          showsMyLocationButton={true}
        >

          {this.state.places.map(marker => (
            <MapView.Marker
              ref={mark => marker.mark = mark}
              title={marker.disaster}
              description={marker.description}
              key={marker._id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
            />
          ))
          }


        </MapView>
      </View >
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

});