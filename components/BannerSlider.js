import React from 'react';
import {
	View,
	Image,
	useWindowDimensions,
	Animated,
	Easing,
	Text,
} from 'react-native';

export default function BannerSlider({ item }) {
	const windowWidth = useWindowDimensions().width;
	const translateYImage = new Animated.Value(40);

	Animated.timing(translateYImage, {
		toValue: 0,
		duration: 1000,
		useNativeDriver: true,
		easing: Easing.bounce,
	}).start();

	return (
		<View
			style={{
				windowWidth,
				height: 500,
				alignItems: 'center',
			}}
		>
			<Animated.Image
				source={item.img}
				resizeMode='contain'
				style={[
					{
						flex: 0.6,
						width: '100%',
					},
					{
						transform: [
							{
								translateY: translateYImage,
							},
						],
					},
				]}
			/>

			<View
				style={{
					flex: 0.4,
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 24,
						fontWeight: 'bold',
						color: '#333',
					}}
				>
					{item.title}
				</Text>
				<Text
					style={{
						fontSize: 18,
						marginVertical: 12,
						color: '#333',
					}}
				>
					{item.description}
				</Text>
				<Text
					style={{
						fontSize: 32,
						fontWeight: 'bold',
					}}
				>
					{item.price}
				</Text>
			</View>
		</View>
	);
}
