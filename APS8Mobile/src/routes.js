import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

import Places from './components/Places'
import Map from './components/Map'
import Welcome from './components/Welcome'

const PlacesStack = createStackNavigator({
   Places: {
      screen: Places,
      navigationOptions: {
         headerTitle: 'Places'
      }
   }
})

const MapStack = createStackNavigator({
   Map: {
      screen: Map,
      navigationOptions: {
         headerTitle: 'Map'
      }
   }
})

const AppBottomNavigator = createBottomTabNavigator({
   Places: {
      screen: PlacesStack,
      navigationOptions: ({
         tabBarIcon: <Icon name='plus-circle' size={22} color="#999" />

      })
   },
   Map: {
      screen: MapStack,
      navigationOptions: ({
         tabBarIcon: <Icon name='map-marker' size={22} color="#999" />

      })
   }
})

const AppSwitchNavigator = createSwitchNavigator({
   Welcome: {
      screen: Welcome
   },
   MainMap: {
      screen: AppBottomNavigator
   }
})

export default AppContainer = createAppContainer(AppSwitchNavigator)