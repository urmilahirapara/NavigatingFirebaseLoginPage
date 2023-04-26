import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './src/navigation/HomePage';
import Login from './src/navigation/Login';
import Signup from './src/navigation/Signup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SingleProduct from './src/navigation/SingleProduct';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store/store';

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function ProductScreen(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'HomePage') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Signup') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="Login" component={Login} />

      <Tab.Screen name="HomePage" component={HomePage} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="ProductScreen"
          screenOptions={{headerShown: false}}>
          <stack.Screen name="ProductScreen" component={ProductScreen} />
          <stack.Screen name="HomePage" component={HomePage} />
          <stack.Screen name="SingleProduct" component={SingleProduct} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
