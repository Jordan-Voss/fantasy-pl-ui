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
const config = {
	screens: {
		Login: 'Login',
		Register: 'register',
		Account: 'account',
		Home: 'home',
	},
};

const linking = {
	config,
};

function AppNav() {
	const { isLoading, userToken } = useContext(AuthContext);
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
