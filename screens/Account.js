import {
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	ImageBackground,
	TextInput,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import Feather from 'react-native-vector-icons/Feather';

const Account = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<ScrollView style={{ padding: 20 }}>
				<AppHeader navigation={navigation} pageName='User Account'></AppHeader>
			</ScrollView>
		</SafeAreaView>
	);
};
export default Account;
