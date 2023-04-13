import Account from '../screens/Account';
import Home from '../screens/Home';
import MyTeam from '../screens/MyTeam';
import Predictor from '../screens/Predictor';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../context/AuthContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useContext, useState, useEffect } from 'react';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
	const { login, setUserToken, userToken, currentUser, setCurrentUser } =
		useContext(AuthContext);
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				drawerActiveBackgroundColor: '#50f6ff',
				drawerActiveTintColor: '#000',
				drawerInactiveTintColor: '#333',
				headerShown: false,
				drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
			}}
		>
			<Drawer.Screen
				component={Home}
				name='Home'
				options={{
					drawerIcon: (color) => (
						<Ionicons name='home-outline' size={22} color={color}></Ionicons>
					),
				}}
			/>
			<Drawer.Screen
				component={MyTeam}
				name='MyTeam'
				options={{
					drawerIcon: (color) => (
						<AntDesign name='team' size={22} color={color}></AntDesign>
					),
				}}
			/>
			<Drawer.Screen
				component={Predictor}
				name='Powerlifting Predictor'
				options={{
					drawerIcon: (color) => (
						<MaterialCommunityIcons
							name='chart-line'
							size={22}
							color={color}
						></MaterialCommunityIcons>
					),
				}}
			/>
			<Drawer.Screen
				component={Home}
				name='Athletes & Stats'
				options={{
					drawerIcon: (color) => (
						<MaterialIcons
							name='directions-run'
							size={22}
							color={color}
						></MaterialIcons>
					),
				}}
			/>
			<Drawer.Screen
				component={Home}
				name='Records'
				options={{
					drawerIcon: (color) => (
						<MaterialCommunityIcons
							name='book-open-page-variant-outline'
							size={22}
							color={color}
						></MaterialCommunityIcons>
					),
				}}
			/>
			<Drawer.Screen
				component={Home}
				name='Leagues'
				options={{
					drawerIcon: (color) => (
						<AntDesign name='table' size={22} color={color}></AntDesign>
					),
				}}
			/>
			<Drawer.Screen
				component={Account}
				name='How To Play'
				options={{
					drawerIcon: (color) => (
						<FontAwesome5 name='scroll' size={22} color={color}></FontAwesome5>
					),
				}}
			/>
			<Drawer.Screen
				component={Account}
				name='Account'
				options={{
					drawerIcon: (color) => (
						<Ionicons name='person-outline' size={22} color={color}></Ionicons>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default AppDrawer;
