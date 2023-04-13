import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CustomSwitch({
	selectionMode,
	option1,
	option2,
	onSelectSwitch,
}) {
	const [getSelectionMode, setSelectionMode] = useState(selectionMode);

	const updateSwitchData = (value) => {
		setSelectionMode(value);
		onSelectSwitch(value);
	};

	return (
		<View
			style={{
				height: 44,
				zIndex: 0,
				width: '100%',
				backgroundColor: '#e4e4e4',
				borderRadius: 10,
				borderColor: '#AD40AF',
				flexDirection: 'row',
				justifyContent: 'center',
			}}
		>
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => updateSwitchData('male')}
				style={{
					flex: 1,
					backgroundColor: getSelectionMode == 'male' ? '#67f3ff' : '#e4e4e4',
					borderRadius: 10,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						color: getSelectionMode == 'male' ? 'black' : '#296478',
						fontSize: 14,
						fontFamily: 'Roboto-Medium',
					}}
				>
					{option1}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => updateSwitchData('female')}
				style={{
					flex: 1,
					backgroundColor: getSelectionMode == 'female' ? '#67f3ff' : '#e4e4e4',
					borderRadius: 10,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						color: getSelectionMode == 'female' ? 'black' : '#296478',
						fontSize: 14,
						fontFamily: 'Roboto-Medium',
					}}
				>
					{option2}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
