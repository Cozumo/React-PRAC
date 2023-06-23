import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import Home from './src/Home';
import About from './src/About';
import Login from './src/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*<Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'device-unknown';
            if(route.name === "Home"){
              iconName = focused ? 'menu-open' : 'menu';
            }
            else if(route.name === "About"){
              iconName = focused ? 'info' : 'info-outline';
            }
            else if(route.name === "Login"){
              iconName = 'login'
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'navy',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>*/}


      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='About' component={About} />
      </Drawer.Navigator>
      
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
