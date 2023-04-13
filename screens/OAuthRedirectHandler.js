import {
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	ImageBackground,
	TextInput,
} from 'react-native';
import * as Linking from 'expo-linking';

import { AuthContext } from '../context/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import {
	BASE_API_URL,
	ACCESS_TOKEN,
	GOOGLE_AUTH_URL,
	CURRENT_USER,
} from '../config/config';

const OAuthRedirectHandler = ({ navigation }) => {
	const {
		login,
		logout,
		setUserToken,
		currentUser,
		setCurrentUser,
		isLoading,
		userToken,
		register,
		getCurrentUser,
	} = useContext(AuthContext);
	const getUrlParam = (name) => {
		name = name.replace(/[\[]/, '[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(useRoute().path);
		console.log(results);
		return results === null
			? ''
			: decodeURIComponent(results[1].replace(/\+/g, ' '));
	};

	const route = useRoute();
	const a = getUrlParam('token');
	AsyncStorage.setItem(ACCESS_TOKEN, a);

	useEffect(() => {
		setUserToken(a);
		getCurrentUser().then((response) => {
			let data = JSON.stringify(response);
			setCurrentUser(JSON.parse(data));
			AsyncStorage.setItem(CURRENT_USER, data);
		});
	}, []);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<Text style={{ fontSize: 18 }}>OAUTH</Text>
		</SafeAreaView>
	);
};

export default OAuthRedirectHandler;
