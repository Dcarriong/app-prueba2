import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import OperacionesScreen from '../screens/OperacionesScreen';
import HistorialScreen from '../screens/HistorialScreen';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Enlace'>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Registro" component={RegistroScreen}/>
      <Stack.Screen name="Enlace" component={MyTabs}/>
      
      
    </Stack.Navigator>
  );
}

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Operaciones" component={OperacionesScreen} />
        <Tab.Screen name="Historial" component={HistorialScreen} />
      </Tab.Navigator>
    );
  }

  export default function Navegador(){
    return(
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    )
  }