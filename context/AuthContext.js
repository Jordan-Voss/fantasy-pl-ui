import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [userToken, setUserToken] = useState(null);

	const login = () => {
		console.log('gfwerg');
		setIsLoading(true);
		setUserToken('dfghd');
		AsyncStorage.setItem('userToken', userToken);
		setIsLoading(false);
	};

	const logout = () => {
		setIsLoading(true);
		setUserToken(null);
		setIsLoading(false);
	};

	return (
		<AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
			{children}
		</AuthContext.Provider>
	);
};
