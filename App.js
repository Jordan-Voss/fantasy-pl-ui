import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Text,
	Image,
	View,
	Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import AppDrawer from './navigation/AppDrawer';
import AppNav from './navigation/AppNav';

import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthProvider } from './context/AuthContext';

const App = () => {
	return (
		<AuthProvider>
			<AppNav />
		</AuthProvider>
	);
};

export default App;
