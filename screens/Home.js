import {
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	ImageBackground,
	TextInput,
	Image,
	FlatList,
	useWindowDimensions,
	Animated,
	Platform,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import React, { useContext, useState, useRef, useEffect } from 'react';
import AppHeader from '../components/AppHeader';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';

const Home = ({ navigation }) => {
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
	const renderBanner = ({ item, index }) => {
		return <BannerSlider data={item} />;
	};
	// const flatRef = useRef(null);
	var flatRef;
	// const [index, setIndex] = useState(1);

	const windowWidth = useWindowDimensions().width;
	const [index, setIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const dta = () => {
		return sliderData.map((item) => {
			<View>
				<Text>{item.id}</Text>
			</View>;
		});
	};
	const handleOnScroll = (event) => {
		Animated.event(
			[
				{
					nativeEvent: {
						contentOffset: {
							x: scrollX,
						},
					},
				},
			],
			{
				useNativeDriver: false,
			}
		)(event);
	};

	const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
		// console.log('viewableItems', viewableItems);
		setIndex(viewableItems[0].index);
	}).current;

	const viewabilityConfig = useRef({
		itemVisiblePercentThreshold: 50,
	}).current;
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: '#296478', flexDirection: 'row' }}
		>
			<ScrollView style={{ padding: 20 }}>
				<AppHeader navigation={navigation} pageName='Home'></AppHeader>
				{/* <View>
					<Text>item.id</Text>
				</View> */}
				{Platform.OS === 'ios' ? (
					<FlatList
						data={sliderData}
						renderItem={({ item }) => <BannerSlider item={item} />}
						horizontal
						pagingEnabled
						snapToAlignment='center'
						showsHorizontalScrollIndicator={false}
						onScroll={handleOnScroll}
						onViewableItemsChanged={handleOnViewableItemsChanged}
						viewabilityConfig={viewabilityConfig}
					/>
				) : (
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{sliderData &&
							sliderData.map((opt) => {
								return (
									<TouchableOpacity
										key={opt.id}
										style={{
											// flex: 1,
											// backgroundColor: opt.col,
											alignItems: 'center',
											// justifyContent: 'center',
											minWidth: 300,
											width: windowWidth * 0.3,
											padding: 10,
											height: 400,
										}}
									>
										<Image
											source={opt.img}
											style={{
												borderRadius: 50,
												width: '100%',
												height: '100%',
											}}
										/>
										<View
											style={{
												top: -50,
												width: '70%',
												borderRadius: 50,
												backgroundColor: 'rgba(255, 255, 255, 0.6)',
											}}
										>
											<Text
												style={{
													// borderRadius: 50,
													// backgroundColor: 'rgba(255, 255, 255, 0.6)',
													fontSize: 18,
													color: 'black',
													// fontWeight: 'bold',
													textAlign: 'center',
													top: -50,
												}}
											>
												{opt.title}
											</Text>
										</View>
										<Text style={{ paddingTop: 50 }}></Text>
									</TouchableOpacity>
								);
							})}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
