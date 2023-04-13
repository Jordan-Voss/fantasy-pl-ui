import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Text,
	Image,
	View,
	Platform,
	ActivityIndicator,
} from 'react-native';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppDrawer from './AppDrawer';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
	screens: {
		Login: 'Login',
		Register: 'register',
		Account: 'account',
		Home: 'Home',
		OAuth: 'OAuth',
		Predictor: 'Predictor',
	},
};

const linking = {
	config,
};

const isLoggedIn = async () => {
	try {
		let userToken = await AsyncStorage.getItem('userToken');
		if (userToken !== null) {
			return true;
		}
		return false;
	} catch (error) {
		console.log(`Error ${error}`);
	}
};

function AppNav() {
	const { isLoading, userToken, setUserToken } = useContext(AuthContext);
	if (isLoading) {
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ActivityIndicator size={'large'}></ActivityIndicator>
		</View>;
	}
	return (
		<NavigationContainer linking={linking}>
			{userToken !== null ? <AppDrawer /> : <AuthStack />}
		</NavigationContainer>
	);
}

export default AppNav;
