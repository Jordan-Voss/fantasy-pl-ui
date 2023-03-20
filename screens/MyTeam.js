import {
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	ImageBackground,
	TextInput,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const MyTeam = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<ScrollView style={{ padding: 20 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginBottom: 20,
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

					<Text style={{ fontSize: 18 }}>My Team</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Account')}>
						<ImageBackground
							source={require('../assets/img.png')}
							style={{ width: 35, height: 35 }}
							imageStyle={{ borderRadius: 25 }}
						/>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default MyTeam;
