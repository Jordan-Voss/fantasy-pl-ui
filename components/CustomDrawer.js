import {
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Text,
	Image,
	View,
	Platform,
	ImageBackground,
} from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import DrawerBackgroundSvg from './DrawerBackgroundSvg';
import DrawerBg from '../assets/drawerbg.svg';
import LogoSvg from '../components/LogoSvg';
import Logo from '../assets/image3vector.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawer = (props) => {
	const { logout } = useContext(AuthContext);

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView
				{...props}
				contentContainerStyle={{ backgroundColor: '#296478' }}
			>
				{/* <View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
				</View> */}
				<ImageBackground
					style={{ padding: 20, alignItems: 'center' }}
					source={require('../assets/bg_bggenerator_com.png')}
				>
					{Platform.OS === 'ios' ? (
						<Logo></Logo>
					) : (
						<LogoSvg
							showWebviewLoader={false}
							width={'80%'}
							height={'79%'}
						></LogoSvg>
					)}
					<Image
						source={require('../assets/img.png')}
						style={{
							height: 80,
							width: 80,
							borderRadius: 40,
							marginBottom: 10,
						}}
					></Image>
					<Text style={{ color: '#fff', fontSize: 18, marginBottom: 5 }}>
						username
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ color: '#fff' }}>280 Points</Text>
						<MaterialCommunityIcons
							name='strategy'
							size={14}
							style={{ color: '#fff' }}
						></MaterialCommunityIcons>
					</View>
				</ImageBackground>
				<View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
					<DrawerItemList {...props}></DrawerItemList>
				</View>
			</DrawerContentScrollView>
			<View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
				<TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Ionicons name='share-social-outline' size={22}></Ionicons>
						<Text style={{ fontSize: 15, marginLeft: 5 }}>Tell a friend</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Ionicons name='settings-outline' size={22}></Ionicons>
						<Text style={{ fontSize: 15, marginLeft: 5 }}>Settings</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						logout();
					}}
					style={{ paddingVertical: 15 }}
				>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Ionicons name='exit-outline' size={22}></Ionicons>
						<Text style={{ fontSize: 15, marginLeft: 5 }}>Sign Out</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CustomDrawer;
