import React from 'react'
import SplashScreen from './screens/SplashScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import CalendarScreen from './screens/CalendarScreen'
import CarList from './screens/CarList'
import CarDetailScreen from './screens/CarDetailScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import OtpScreen from './screens/OtpScreen'
import ImageScreen from './screens/ImageScreen'
import ProfileScreen from './screens/ProfileScreen'
import TermsScreen from './screens/TermsScreen'
import BookingScreen from './screens/BookingScreen'
import SummaryScreen from './screens/SummaryScreen'
import MapScreen from './screens/MapScreen'
import WarningScreen from './screens/WarningScreen'
import SelectLocation from './screens/SelectLocation'
import DrawerScreen from './screens/DrawerScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavouriteScreen from './screens/FavouriteScreen'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName='drawer' drawerContent={(props) => <DrawerScreen {...props} />} >
            <Drawer.Screen name="drawer" component={HomeScreen} />
        </Drawer.Navigator>
    );
}

const Router = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='splash'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="splash" component={SplashScreen} />
                    <Stack.Screen name="welcome" component={WelcomeScreen} />
                    <Stack.Screen name="calendar" component={CalendarScreen} />
                    <Stack.Screen name="home" component={DrawerNavigator} />
                    <Stack.Screen name="carlist" component={CarList} />
                    <Stack.Screen name="favourites" component={FavouriteScreen} />
                    <Stack.Screen name="cardetail" component={CarDetailScreen} />
                    <Stack.Screen name="login" component={LoginScreen} />
                    <Stack.Screen name="otp" component={OtpScreen} />
                    <Stack.Screen name="imageview" component={ImageScreen} />
                    <Stack.Screen name="profile" component={ProfileScreen} />
                    <Stack.Screen name="booking" component={BookingScreen} />
                    <Stack.Screen name="terms" component={TermsScreen} />
                    <Stack.Screen name="summary" component={SummaryScreen} />
                    <Stack.Screen name="map" component={MapScreen} />
                    <Stack.Screen name="selectlocation" component={SelectLocation} />
                    <Stack.Screen name="warning" component={WarningScreen} />
                </Stack.Navigator>
            </NavigationContainer >
        </>
    )
}

export default Router