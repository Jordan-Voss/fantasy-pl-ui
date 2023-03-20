import Account from '../screens/Account';
import Home from '../screens/Home';
import MyTeam from '../screens/MyTeam';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
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
				component={Account}
				name='Account'
				options={{
					drawerIcon: (color) => (
						<Ionicons name='person-outline' size={22} color={color}></Ionicons>
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
		</Drawer.Navigator>
	);
};

export default AppDrawer;
