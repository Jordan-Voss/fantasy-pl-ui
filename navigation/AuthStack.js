import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import OAuthRedirectHandler from '../screens/OAuthRedirectHandler';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen component={Login} name='Login' />
			<Stack.Screen component={Register} name='Register' />
			<Stack.Screen component={OAuthRedirectHandler} name='OAuth' />
		</Stack.Navigator>
	);
};

export default AuthStack;
