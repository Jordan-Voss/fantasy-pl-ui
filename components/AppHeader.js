import {
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	ImageBackground,
	TextInput,
	Image,
	Platform,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import LogoSvg from './LogoSvg';
import Logo from '../assets/image2vector.svg';
import Feather from 'react-native-vector-icons/Feather';

const AppHeader = ({ navigation, pageName }) => {
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
	// console.log(currentUser);
	return (
		// <View>
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				marginBottom: 20,
				// position:'sticky'
			}}
		>
			<TouchableOpacity onPress={() => navigation.openDrawer()}>
				<Feather
					name='menu'
					size={30}
					color='#50f6ff'
					// style={{ marginRight: 5 }}
				/>
			</TouchableOpacity>
			{/* <View
				style={{
					// flex: 1,
					top: -40,
					width: '80%',
					height: '275%',
					// maxHeight: '65%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					source={require('../assets/logo.png')}
					style={{
						resizeMode: 'cover',
						width: '100%',
						height: '100%',
					}}
				/>
			</View> */}
			<View
				style={{
					justifyContent: 'center',
					// top: -150,
					marginTop: 15,
					alignItems: 'center',
				}}
			>
				{Platform.OS === 'ios' ? (
					<Logo></Logo>
				) : (
					<LogoSvg
						showWebviewLoader={false}
						width={'150%'}
						height={'90%'}
					></LogoSvg>
				)}
			</View>
			<TouchableOpacity onPress={() => navigation.navigate('Account')}>
				<ImageBackground
					source={currentUser.imageUrl}
					style={{ width: 35, height: 35 }}
					imageStyle={{ borderRadius: 25 }}
				/>
			</TouchableOpacity>
		</View>
		/* <View
				style={
					{
						// // flex: 1,
						// justifyContent: 'center',
						// alignItems: 'center',
						// top: 0,
					}
				}
			>
				{Platform.OS === 'ios' ? (
					<Logo></Logo>
				) : (
					<LogoSvg
						showWebviewLoader={false}
						width={'100%'}
						height={'50%'}
						// preserveAspectRatio='none'
					>
						>
					</LogoSvg>
				)}
			</View>
		</View> */
	);
};

export default AppHeader;
