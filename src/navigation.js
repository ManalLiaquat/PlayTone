import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import {HOME, PROFILE} from './constants/routeNames';

const HomeStack = createStackNavigator(
  {
    [HOME]: {screen: HomeScreen},
  },
  {headerMode: 'none'},
);

const TabNavigator = createBottomTabNavigator(
  {
    [HOME]: {screen: HomeStack},
    [PROFILE]: {screen: ProfileScreen},
  },
  {initialRouteName: HOME},
);

export default createAppContainer(
  createSwitchNavigator({
    Main: TabNavigator,
  }),
);
