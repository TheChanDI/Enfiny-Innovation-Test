import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import { Tab1, Tab2, Tab3 } from './src/screens/index';
import Icon from 'react-native-vector-icons/FontAwesome5';

const bottomTab = createBottomTabNavigator(
  {
    Easy: {
      screen: Tab1,
      navigationOptions: {
        tabBarLabel: 'Easy',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Medium: {
      screen: Tab2,
      navigationOptions: {
        tabBarLabel: 'Medium',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },

    Hard: {
      screen: Tab3,
      navigationOptions: {
        tabBarLabel: 'Hard',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        height: 60
      },
      indicatorStyle: {
        backgroundColor: '#1a75ff',
        height: 10
      }
    }
  }
);

// import {
//   createStackNavigator,
//   createAppContainer,
//   createBottomTabNavigator,
//   createSwitchNavigator
// } from 'react-navigation';
// import SignInScreen from './src/screens/SignInScreen';

// import AuthScreen from './src/screens/AuthScreen';
// import HomeScreen from './src/screens/HomeScreen';

// const loggedStack = createBottomTabNavigator({
//   home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       header: null
//     }
//   }
// });

// const LoginStack = createStackNavigator({
//   signIn: {
//     screen: SignInScreen,
//     navigationOptions: {
//       header: null
//     }
//   }
// });

// const appSwitch = createSwitchNavigator({
//   auth: AuthScreen,
//   login: LoginStack,
//   dash: loggedStack
// });

export default createAppContainer(bottomTab);
