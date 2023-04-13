import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Text,
	Image,
	TextInput,
	View,
	ScrollView,
	Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BASE_API_URL, ACCESS_TOKEN } from '../config/config';
import LogoSvg from '../components/LogoSvg';
import Logo from '../assets/image2vector.svg';
import Google from '../assets/google.svg';
import GoogleSVG from '../components/GoogleSvg';
import FaceBook from '../assets/facebook.svg';
import FacebookSVG from '../components/FacebookSvg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Register = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setusername] = useState('');

	const {
		login,
		logout,
		setUserToken,
		currentUser,
		setCurrentUser,
		isLoading,
		userToken,
		register,
	} = useContext(AuthContext);
	const handleRegister = () => {
		console.log('register requested');
		const registerRequest = JSON.stringify({
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			username: username,
		});
		register(registerRequest).then((response) => {
			console.log(response);
			navigation.navigate('Login');
		});
	};
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#296478',
			}}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
				style={{ width: '100%' }}
			>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					{Platform.OS === 'ios' ? (
						<Logo></Logo>
					) : (
						<LogoSvg
							showWebviewLoader={false}
							width={'200%'}
							height={'100%'}
						></LogoSvg>
					)}
				</View>
				<Text
					style={{
						fontSize: 28,
						fontWeight: '500',
						color: '#fff',
						marginBottom: 10,
					}}
				>
					Register
				</Text>
				<View
					style={{
						backgroundColor: '#97e6f0',
						borderRadius: 30,
						width: '70%',
						height: 45,
						marginBottom: 20,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				>
					<MaterialCommunityIcons
						name='account-outline'
						size={20}
						color='#666'
						style={{ marginLeft: 20 }}
					/>
					<TextInput
						onChangeText={(text) => setFirstName(text)}
						style={{
							height: 50,
							// marginLeft: '40%',
							flex: 1,
							padding: 10,
							marginLeft: 20,
						}}
						placeholder='First Name.'
						placeholderTextColor='#003f5c'
						keyboardType='email-address'
						// onChangeText={(password) => setPassword(password)}
					/>
				</View>
				<View
					style={{
						backgroundColor: '#97e6f0',
						borderRadius: 30,
						width: '70%',
						height: 45,
						marginBottom: 20,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				>
					<MaterialCommunityIcons
						name='account-outline'
						size={20}
						color='#666'
						style={{ marginLeft: 20 }}
					/>
					<TextInput
						onChangeText={(text) => setLastName(text)}
						style={{
							height: 50,
							// marginLeft: '40%',
							flex: 1,
							padding: 10,
							marginLeft: 20,
						}}
						placeholder='Surname.'
						placeholderTextColor='#003f5c'
						keyboardType='email-address'
						// onChangeText={(password) => setPassword(password)}
					/>
				</View>
				<View
					style={{
						backgroundColor: '#97e6f0',
						borderRadius: 30,
						width: '70%',
						height: 45,
						marginBottom: 20,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				>
					<MaterialCommunityIcons
						name='account-outline'
						size={20}
						color='#666'
						style={{ marginLeft: 20 }}
					/>
					<TextInput
						onChangeText={(text) => setusername(text)}
						style={{
							height: 50,
							// marginLeft: '40%',
							flex: 1,
							padding: 10,
							marginLeft: 20,
						}}
						placeholder='Username.'
						placeholderTextColor='#003f5c'
						keyboardType='email-address'
						// onChangeText={(password) => setPassword(password)}
					/>
				</View>
				<View
					style={{
						backgroundColor: '#97e6f0',
						borderRadius: 30,
						width: '70%',
						height: 45,
						marginBottom: 20,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				>
					<MaterialIcons
						name='alternate-email'
						size={20}
						color='#666'
						style={{ marginLeft: 20 }}
					/>
					<TextInput
						onChangeText={(text) => setEmail(text)}
						style={{
							height: 50,
							// marginLeft: '40%',
							flex: 1,
							padding: 10,
							marginLeft: 20,
						}}
						placeholder='Email.'
						placeholderTextColor='#003f5c'
						keyboardType='email-address'
						// onChangeText={(password) => setPassword(password)}
					/>
				</View>
				<View
					style={{
						backgroundColor: '#97e6f0',
						borderRadius: 30,
						width: '70%',
						height: 45,
						marginBottom: 20,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				>
					<Ionicons
						name='ios-lock-closed-outline'
						size={20}
						color='#666'
						style={{ marginLeft: 20 }}
					/>
					<TextInput
						onChangeText={(text) => setPassword(text)}
						style={{
							height: 50,
							// marginLeft: '40%',
							flex: 1,
							padding: 10,
							marginLeft: 20,
						}}
						placeholder='Password.'
						placeholderTextColor='#003f5c'
						secureTextEntry={true}
						// onChangeText={(password) => setPassword(password)}
					/>
				</View>
				<View
					style={{
						backgroundColor: '#97e6f0',
						borderRadius: 30,
						width: '70%',
						height: 45,
						marginBottom: 20,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				>
					<Ionicons
						name='ios-lock-closed-outline'
						size={20}
						color='#666'
						style={{ marginLeft: 20 }}
					/>
					<TextInput
						onChangeText={(text) => setConfirmPassword(text)}
						style={{
							height: 50,
							// marginLeft: '40%',
							flex: 1,
							padding: 10,
							marginLeft: 20,
						}}
						placeholder='Confirm Password.'
						placeholderTextColor='#003f5c'
						secureTextEntry={true}
						// onChangeText={(password) => setPassword(password)}
					/>
				</View>
				{/* <CustomButton label={'Login'} onPress={() => {}} /> */}
				<Text style={{ textAlign: 'center', color: '#fff', marginBottom: 30 }}>
					Or, login with ...
				</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginBottom: 30,
					}}
				>
					<TouchableOpacity
						onPress={() => {}}
						style={{
							borderColor: '#ddd',
							borderWidth: 2,
							borderRadius: 10,
							paddingHorizontal: 30,
							paddingVertical: 10,
							marginRight: 10,
							backgroundColor: '#fff',
						}}
					>
						{Platform.OS === 'ios' ? (
							<Google height={24} width={24}></Google>
						) : (
							<GoogleSVG height={24} width={24} />
						)}
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {}}
						style={{
							borderColor: '#ddd',
							borderWidth: 2,
							borderRadius: 10,
							paddingHorizontal: 30,
							paddingVertical: 10,
							backgroundColor: '#4267B2',
						}}
					>
						{Platform.OS === 'ios' ? (
							<FaceBook height={24} width={24}></FaceBook>
						) : (
							<FacebookSVG height={24} width={24} />
						)}
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={() => handleRegister()}
					style={{
						backgroundColor: '#50f6ff',
						padding: 20,
						width: '90%',
						borderRadius: 5,
						flexDirection: 'row',
						justifyContent: 'center',
						marginBottom: 50,
					}}
				>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 18,
							color: '#000',
						}}
					>
						Register
					</Text>
					<Ionicons
						name='arrow-forward-outline'
						size={22}
						color='#000'
					></Ionicons>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginBottom: 30,
					}}
				>
					<Text>Already have an account?</Text>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Text style={{ color: '#67f3ff', fontWeight: '700' }}> Login</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Register;
