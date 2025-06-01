import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import login from './src/App Screens/login';
import OTPScreen from './src/App Screens/OTPScreen';
import ProfessionalDocumentsScreen from './src/App Screens/ProfessionalDocumentsScreen';
import DocumentsVerificationScreen from './src/App Screens/DocumentsVerificationScreen';
import ServiceDomainScreen from './src/App Screens/ServiceDomainScreen';
import ScheduleAppointmentScreen from './src/App Screens/ScheduleAppointmentScreen';
import ShopRegistration from './src/App Screens/ShopRegistration';
import AppointmentConfirmedScreen from './src/App Screens/AppointmentConfirmedScreen';
import CreateProfileScreen from './src/App Screens/CreateProfileScreen';
import CreateGalleryScreen from './src/App Screens/CreateGalleryScreen';
import TakeAwayShopRegrestrationScreen from './src/App Screens/TakeAwayShopRegrestrationScreen';
import Home from './src/App Screens/HomeScreen/Home';
import Startservice from './src/App Screens/HomeScreen/Startservice';
import TakeAway from './src/App Screens/HomeScreen/TakeAway';
import userOTP from './src/App Screens/HomeScreen/userOTP';
import paymentRecive from './src/App Screens/HomeScreen/paymentRecive';
import reviewrecive from './src/App Screens/HomeScreen/reviewrecive';
import paymentScanner from './src/App Screens/HomeScreen/paymentScanner';
import CurrentService from './src/App Screens/HomeScreen/CurrentService';
import location from './src/App Screens/HomeScreen/location';
import Schedule from './src/App Screens/ScheduleScreens/Schedule';
import preorder from './src/App Screens/ScheduleScreens/preorder';
import Reschedule from './src/App Screens/ScheduleScreens/Reschedule';
import Request from './src/App Screens/RequestScreens/Request';
import RequestDetails from './src/App Screens/RequestScreens/RequestDetails';
import Prereguisite from './src/App Screens/RequestScreens/Prereguisite';
import Messages from './src/App Screens/MessagesScreens/Messages';
import usermessage from './src/App Screens/MessagesScreens/usermessage';
import Profile from './src/App Screens/ProfileScreen/Profile';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name="login" component={login} options={{ headerShown: false }} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProfessionalDocumentsScreen" component={ProfessionalDocumentsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DocumentsVerificationScreen" component={DocumentsVerificationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ServiceDomainScreen" component={ServiceDomainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ScheduleAppointmentScreen" component={ScheduleAppointmentScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ShopRegistration" component={ShopRegistration} options={{ headerShown: false }} />
      <Stack.Screen name="AppointmentConfirmedScreen" component={AppointmentConfirmedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateProfileScreen" component={CreateProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateGalleryScreen" component={CreateGalleryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TakeAwayShopRegrestrationScreen" component={TakeAwayShopRegrestrationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
      <Stack.Screen name="Request" component={Request} options={{ headerShown: false }} />
      <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="location" component={location} options={{ headerShown: false }} />
      <Stack.Screen name="RequestDetails" component={RequestDetails} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />
      <Stack.Screen name="Prereguisite" component={Prereguisite} options={{
        headerShown: true,
        headerTitle: 'ZAP', headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#f8f8f8' },
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />
      <Stack.Screen name="usermessage" component={usermessage} options={{ headerShown: false }} />
      <Stack.Screen name="preorder" component={preorder} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />
      <Stack.Screen name="Reschedule" component={Reschedule} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />
      <Stack.Screen name="Startservice" component={Startservice} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />

      <Stack.Screen name="userOTP" component={userOTP} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />

      <Stack.Screen name="paymentScanner" component={paymentScanner} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />

      <Stack.Screen name="CurrentService" component={CurrentService} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />

      <Stack.Screen name="TakeAway" component={TakeAway} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />

      <Stack.Screen name="paymentRecive" component={paymentRecive} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />

      <Stack.Screen name="reviewrecive" component={reviewrecive} options={{
        headerShown: true,
        headerTitle: 'ZAP',  // Custom header title
        headerStyle: { backgroundColor: '#f8f8f8' }, headerTitleAlign: 'center',
        headerTitleStyle: { color: '#6B46C1', fontWeight: 'bold' },
      }} />






    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
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
  appTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
  }
});
