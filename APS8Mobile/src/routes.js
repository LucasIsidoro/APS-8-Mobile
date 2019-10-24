import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Places from './components/Places'
import Map from './components/Map'
import Welcome from './components/Welcome'

const PlacesStack = createStackNavigator({
   Places:{
      screen: Places,
      navigationOptions:{
         headerTitle: 'Places'
      }
   }
})

const MapStack = createStackNavigator({
   Map:{
      screen: Map,
      navigationOptions:{
         headerTitle: 'Map'
      }
   }
})

const AppBottomNavigator = createBottomTabNavigator({
   Places: {
      screen: PlacesStack
   },
   Map: {
      screen: MapStack
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