import {
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Image,
	useWindowDimensions,
	ImageBackground,
	TextInput,
} from 'react-native';
import { useState, useContext, useRef, useEffect } from 'react';
import { BASE_API_URL, ACCESS_TOKEN, CURRENT_USER } from '../config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomSwitch from '../components/CustomSwitch';
import DropDown from '../components/DropDown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AppHeader from '../components/AppHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import { AuthContext } from '../context/AuthContext';
import { getImageUrl } from '../util/PredictorUtils';
import Feather from 'react-native-vector-icons/Feather';
import comps from '../model/comps';
import { Picker } from '@react-native-picker/picker';

import { getStyles, getRating } from '../style';

export default function AthleteSelected({
	weightClass,
	items,
	windowWidth,
	pickerRef,
	value,
	current,
	dropdownItems,
	dropdownValue,
	setDropdownValue,
	open,
	setOpen,
	handleDropdownsSelect,
	setValue,
	setCurrent,
	selectedValues,
	weightClassText,
	isError,
}) {
	const styles = getStyles(windowWidth);

	return (
		<View>
			<View style={{ flexDirection: 'row' }}>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<Text>sdgsdg {isError}</Text>
					<Image
						referrerpolicy='no-referrer'
						source={
							value?.toLowerCase().indexOf('http') !== -1
								? value
								: require('../assets/img.png')
						}
						// onError={setValue('../assets/img.png')}
						style={{
							justifyContent: 'flex-start',
							// height: '275%',
							alignItems: 'center',
							height: 220,
							width: 163,
							resizeMode: 'stretch',
							// aspectRatio: 1,
							top: 15,
							borderRadius: 40,
							marginBottom: 10,
						}}
					></Image>
					{/* <TextInput placeholder="Test" style={{justifyContent: 'flex-start',}} /> */}
				</View>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: -1000,
						// backgroundColor: 'black',
						// top: -50,
					}}
				>
					<View
						style={{
							// backgroundColor: 'pink',
							width: '80%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{isError ? (
							<View style={{ flexDirection: 'row' }}>
								<MaterialIcons
									name='error-outline'
									size={18}
									color='red'
								></MaterialIcons>
								<Text style={{ color: 'red' }}>
									Please select confidence points
								</Text>
							</View>
						) : null}
						<Text>{isError}</Text>
						<DropDownPicker
							items={dropdownItems.map((item) => ({
								label: item.toString(),
								value: item,
								disabled:
									selectedValues.includes(item) && dropdownValue !== item,
							}))}
							dropDownDirection='BOTTOM'
							value={dropdownValue}
							setValue={setDropdownValue}
							open={open}
							setOpen={setOpen}
							defaultValue={null}
							placeholder='Confidence Points'
							// containerStyle={styles.dropdownContainer}
							style={{ zIndex: 1000 }}
							disabledItemContainerStyle={{
								opacity: 0.3,
							}}
							itemStyle={styles.dropdownItem}
							dropDownStyle={styles.dropdownMenu}
							onChangeItem={({ value }) => {
								handleDropdownSelect(value);
							}}
						/>
						<TouchableOpacity
							style={{
								backgroundColor: '#50f6ff',
								borderRadius: 10,
								width: '50%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							onPress={() => setDropdownValue(null)}
						>
							<Text>Reset</Text>
						</TouchableOpacity>
					</View>
					{current != null ? (
						<>
							<View
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									// backgroundColor: 'red',
									zIndex: -1000,
									top: 15,
									width: '100%',
								}}
							>
								<View
									style={{
										justifyContent: 'center',
										textAlign: 'center',
										alignItems: 'center',
										fontSize: 30,
										width: '100%',
									}}
								>
									<Text style={[styles.text, { textAlign: 'center' }]}>
										{current?.fullName}
									</Text>
									<View
										style={{
											flexDirection: 'row',
											width: '100%',
										}}
									>
										<Text
											adjustsFontSizeToFit={true}
											style={[styles.text, { justifyContent: 'flex-start' }]}
										>
											Squat:
										</Text>
										<Text
											adjustsFontSizeToFit={true}
											style={[styles.text, { justifyContent: 'flex-end' }]}
										>
											{current?.bestSquat}
										</Text>
									</View>
									<View
										style={{
											flexDirection: 'row',
											width: '100%',
											// backgroundColor: 'blue',
										}}
									>
										<Text
											adjustsFontSizeToFit={true}
											style={[styles.text, { justifyContent: 'flex-start' }]}
										>
											Bench:
										</Text>
										<Text
											adjustsFontSizeToFit={true}
											style={[styles.text, { justifyContent: 'flex-end' }]}
										>
											{current?.bestBench}
										</Text>
									</View>
									<View
										style={{
											flexDirection: 'row',
											width: '100%',
											// backgroundColor: 'blue',
										}}
									>
										<Text
											adjustsFontSizeToFit={true}
											style={[styles.text, { justifyContent: 'flex-start' }]}
										>
											Deadlift:
										</Text>
										<Text
											adjustsFontSizeToFit={true}
											style={[styles.text, { justifyContent: 'flex-end' }]}
										>
											{current?.bestDeadlift}
										</Text>
									</View>
									<View
										style={{
											flexDirection: 'row',
											width: '100%',
											// backgroundColor: 'blue',
										}}
									>
										<Text
											adjustsFontSizeToFit={true}
											style={[styles.text, { justifyContent: 'flex-start' }]}
										>
											Total:
										</Text>
										<Text
											adjustsFontSizeToFit={true}
											style={[styles.text, { justifyContent: 'flex-end' }]}
										>
											{current?.bestTotal}
										</Text>
									</View>
								</View>
							</View>
						</>
					) : null}
				</View>
			</View>
			<View></View>
		</View>
	);
}
