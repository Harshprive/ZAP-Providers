import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import SplashScreen from '../screens/RegisterScreen/SplashScreen';
import Login from '../screens/RegisterScreen/Login';
import OTPVerification from '../screens/RegisterScreen/OTPScreen';
import DocumentsVerification from '../screens/RegisterScreen/DocumentsVerificationScreen';
import ProfessionalDocuments from '../screens/RegisterScreen/ProfessionalDocumentsScreen';
import ServiceDomainSelection from '../App Screens/ServiceDomainScreen';

import Home from '../screens/HomeScreen/Home';
import Request from '../screens/RequestScreens/Request';
import Messages from '../screens/MessagesScreens/Messages';
import Schedule from '../screens/ScheduleScreens/Schedule';
import Profile from '../screens/ProfileScreen/Profile';

import CleaningServiceScreen from '../screens/RequestScreens/RequestDetails';

import { FontAwesome5 } from '@expo/vector-icons';

const TAB_ICONS = {
  Home: 'home',
  Request: 'clipboard-list',
  Schedule: 'calendar-alt',
  Messages: 'envelope',
  Profile: 'user',
};


export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();


  function MyTabs() {
    // console.log('Rendering MyTabs',route.name);
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            const iconName = TAB_ICONS[route.name];
            return <FontAwesome5 name={iconName} size={size} color={color} solid />;
          },
          tabBarActiveTintColor: '#726AE0',
          tabBarInactiveTintColor: 'gray',

        })}

      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Request" component={Request} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profile" component={Profile} />


      </Tab.Navigator>
    );
  }


  return (

    <>

      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="OTPVerification"
            component={OTPVerification}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="DocumentsVerification"
            component={DocumentsVerification}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name="ProfessionalDocuments"
            component={ProfessionalDocuments}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ServiceDomainSelection"
            component={ServiceDomainSelection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyTab"
            component={MyTabs}
            options={{ headerShown: false }}
          />

           <Stack.Screen
            name="CleaningServiceScreen"
            component={CleaningServiceScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


