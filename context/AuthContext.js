import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
import axios from 'axios';
import { BASE_API_URL, ACCESS_TOKEN, CURRENT_USER } from '../config/config';

export const AuthProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [userToken, setUserToken] = useState(
		AsyncStorage.getItem(ACCESS_TOKEN)
	);
	const [currentUser, setCurrentUser] = useState(
		AsyncStorage.getItem(CURRENT_USER)
	);

	const request = async (options) => {
		const headers = new Headers({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:8080',
			'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
			// 'Access-Control-Allow-Credentials': 'true',
		});
		console.log(headers);
		var token = await getToken();

		if (token) {
			console.log('with token' + token);
			headers.append('Authorization', 'Bearer ' + token);
		}

		const defaults = { headers: headers };
		options = Object.assign({}, defaults, options);
		console.log(options);
		return fetch(options.url, options).then((response) =>
			response.json().then((json) => {
				if (!response.ok) {
					return Promise.reject(json);
				}
				console.log('JSON', json);

				return json;
			})
		);
	};

	function login(loginRequest) {
		console.log('LOGIN' + loginRequest);
		setIsLoading(true);
		return request({
			url: BASE_API_URL + '/auth/login',
			method: 'POST',
			body: loginRequest,
		});
	}

	function savePrediction(predictionRequest) {
		console.log('save prediction' + predictionRequest);
		setIsLoading(true);
		return request({
			url: BASE_API_URL + '/predictor/save',
			method: 'POST',
			body: predictionRequest,
		});
	}

	function register(registerRequest) {
		console.log('LOGIN' + registerRequest);
		setIsLoading(true);
		return request({
			url: BASE_API_URL + '/auth/register',
			method: 'POST',
			body: registerRequest,
		});
	}

	const logout = () => {
		setIsLoading(true);
		setUserToken(null);
		AsyncStorage.removeItem('userToken');

		setIsLoading(false);
	};

	const isLoggedIn = async () => {
		try {
			setIsLoading(true);
			let userToken = await AsyncStorage.getItem('userToken');
			let user = await AsyncStorage.getItem('currentUser');
			setCurrentUser(JSON.parse(user));
			setUserToken(userToken);
			setIsLoading(false);
		} catch (error) {
			console.log(`Error ${error}`);
		}
	};

	const getToken = async () => AsyncStorage.getItem('userToken');

	const getCurrentUser = async () => {
		console.log('GETTING CURRENT USER');
		var token = await getToken();
		return request({
			url: BASE_API_URL + '/user/me',
			method: 'GET',
		});
	};

	useEffect(() => {
		isLoggedIn();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				login,
				logout,
				setUserToken,
				currentUser,
				setCurrentUser,
				isLoading,
				userToken,
				register,
				getCurrentUser,
				savePrediction,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
