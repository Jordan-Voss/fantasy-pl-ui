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

import AppHeader from '../components/AppHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import { AuthContext } from '../context/AuthContext';
import { getImageUrl } from '../util/PredictorUtils';
import Feather from 'react-native-vector-icons/Feather';
import comps from '../model/comps';
import { Picker } from '@react-native-picker/picker';

import { getStyles, getRating } from '../style';
const Predictor = ({ navigation }) => {
	const comps = [
		{
			label: 'IPF World Classic Open Powerlifting Championship',
			value: '820 819',
		},
		{
			label: 'World Juniors and Sub-Juniors Classic Championships',
			value: '840 841',
		},
	];
	const windowWidth = useWindowDimensions().width;
	const styles = getStyles(windowWidth);
	const numbers = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
	];
	const [value, setValue] = useState('820 819');
	const [items, setItems] = useState(comps);
	const [current59, setCurrent59] = useState(null);
	// const [open59, setOpen59] = useState(false);
	const [value59, setValue59] = useState('');
	const [items59, setItems59] = useState([]);
	const [current66, setCurrent66] = useState(null);
	// const [open66, setOpen66] = useState(false);
	const [value66, setValue66] = useState('');
	const [items66, setItems66] = useState([]);
	const [current74, setCurrent74] = useState(null);
	const pickerRef = useRef();
	const [selectedLanguage, setSelectedLanguage] = useState();

	const open = () => {
		pickerRef.current.focus();
	};

	const close = () => {
		pickerRef.current.blur();
	};
	// const [open74, setOpen74] = useState(false);
	const [value74, setValue74] = useState('');
	const [items74, setItems74] = useState([]);
	const [male, setMale] = useState(null);
	const [female, setFemale] = useState([]);
	const [gender, setGender] = useState('male');
	const {
		login,
		logout,
		setUserToken,
		currentUser,
		setCurrentUser,
		isLoading,
		userToken,
	} = useContext(AuthContext);
	const getAthleteData = async (cid, gndr) => {
		const auth = 'Bearer ' + userToken;
		const request = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:8080',
				'Access-Control-Allow-Methods':
					'GET, POST, PATCH, PUT, DELETE, OPTIONS',
				Authorization: 'Bearer ' + userToken,
			},
		};
		const url = BASE_API_URL + '/athlete/comp?cid=' + cid;
		console.log('GETTING ATHLETES');
		const response = await fetch(url, request).then((response) =>
			response.json().then((json) => {
				if (!response.ok) {
					return Promise.reject(json);
				}
				// console.log('JSON', json.athletes);
				if (gndr === 'male') {
					setMale(json.athletes);
					console.log('aaa', json.athletes[1].athletes[0]);
					setCurrent59(json.athletes[0].athletes[0]);
					setValue59(json.athletes[0].athletes[0].imageurl);

					setCurrent66(json.athletes[1].athletes[0]);
					setValue66(json.athletes[1].athletes[0].imageurl);

					setCurrent74(json.athletes[2].athletes[0]);
					setValue74(json.athletes[2].athletes[0].imageurl);

					// for (const element of json.athletes) {
					// 	// console.log('WC', element);
					// 	male.push(element);
					// }
					// male.push(json.athletes);
				} else setFemale(json.athletes);
				return json;
			})
		);
	};

	const handleGetAthletes = (item) => {
		setMale(null);
		setValue(item);
		console.log(item);
		var cids = item;
		cids = cids.split(' ');
		getAthleteData(cids[0], 'male');
		getAthleteData(cids[1], 'female');
	};

	const handleSetValue = (val) => {
		// console.log(val);
		setValue(val);
		handleGetAthletes();
	};
	const onSelectSwitch = (value) => {
		setGender(value);
	};
	const handleSetValueRating = (item) => {
		console.log('itm', item);
		const newState = itemsRating.map((obj) => {
			if (obj.value === item.value) {
				console.log(obj.value);
				return { ...obj, disabled: true };
			}
			return obj;
		});
		// const newStateReable = newState.map((obj) => {
		// 	if (obj.value === lastSet59Rating) {
		// 		return { ...obj, disabled: false };
		// 	}
		// 	return obj;
		// });
		console.log(newState);
		setItemsRating(newState);
		setValueRating(item);
		console.log('vle', valueRating);

		// setLastSet59Rating(items);
		// console.log('ns', newStateReable);
		// console.log('last', lastSet59Rating);
		// return newState;
	};

	useEffect(() => {
		handleGetAthletes(value);
		setCurrent59(items59[0]);
		setCurrent66(items66[0]);
		setCurrent74(items74[0]);
		console.log(current74);
		// {
		// 	fullRatings?.map((item) => {
		// 		availableRatings.push(item.value);
		// 	});
		// }
		//console.log('fullratings', fullRatings);
		//console.log('availableRatings', availableRatings);
	}, []);

	const [dropdown59Items, setDropdown59Items] = useState(numbers);
	const [dropdown66Items, setDropdown66Items] = useState(numbers);
	const [dropdown74Items, setDropdown74Items] = useState(numbers);
	const [dropdown59Value, setDropdown59Value] = useState(null);
	const [dropdown66Value, setDropdown66Value] = useState(null);
	const [dropdown74Value, setDropdown74Value] = useState(null);

	const selectedValues = [dropdown59Value, dropdown66Value, dropdown74Value];
	const [open59, setOpen59] = useState(false);
	const [open66, setOpen66] = useState(false);
	const [open74, setOpen74] = useState(false);
	const handleDropdown59Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown59Value(value);
		}
	};

	const handleDropdown66Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown66Value(value);
		}
	};

	const handleDropdown74Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown74Value(value);
		}
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#296478' }}>
			<ScrollView style={{ padding: 20 }}>
				<AppHeader navigation={navigation} pageName='My Team'></AppHeader>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ color: 'white', fontSize: 18 }}>How to Play</Text>
					<Text style={{ textAlign: 'center', color: 'white' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id
						gravida urna. Pellentesque maximus ante tellus, eu euismod dolor
						posuere eget. Ut sit amet blandit dolor. Aliquam id nisl vulputate,
						pretium metus nec, hendrerit orci. Cras nec auctor metus. Donec
						lacus ex, vulputate nec purus at, condimentum mollis leo. Maecenas
						feugiat justo ut massa ultrices, ac consequat libero aliquam. Etiam
						ultrices rutrum nisl vitae sodales. Sed gravida neque at nibh
						vehicula vulputate.
					</Text>
				</View>
				<View style={{ backgroundColor: 'red', borderRadius: 50 }}>
					<Picker
						mode={'dropdown'}
						ref={pickerRef}
						selectedValue={value}
						onValueChange={(itemValue, itemIndex) =>
							handleGetAthletes(itemValue)
						}
						noTopRadius={false}
						noBottomRadius={false}
						itemStyle={{
							backgroundColor: 'grey',
							color: 'blue',
							fontFamily: 'Ebrima',
							fontSize: 30,
							width: '100%',
							justifyContent: 'center',
							textAlign: 'center',
							borderRadius: 50,
						}}
						style={{
							height: 50,
							borderRadius: 50,
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
						}}
					>
						{comps?.map((item) => {
							//console.log(item);
							return (
								<Picker.Item
									style={{
										textAlign: 'center',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: 50,
									}}
									label={item.label}
									value={item.value}
									key={item.label}
								/>
							);
						})}
					</Picker>
				</View>
				<Text>{value}</Text>
				<View style={{ marginVertical: 20, zIndex: -10 }}>
					<CustomSwitch
						selectionMode={'male'}
						option1='Male'
						option2='Female'
						onSelectSwitch={onSelectSwitch}
					/>
				</View>
				{gender == 'male' ? (
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{male &&
							male.map((weightClass) => {
								switch (weightClass.weightClass) {
									case 'FIFTY_NINE':
										items59.push(weightClass.athletes);
										//console.log(current59);
										return (
											<View
												key={weightClass.athletes[0].picker}
												style={
													windowWidth > 800
														? styles.bigScreen
														: styles.smallScreen
												}
											>
												<Text>{weightClass.weightClass}</Text>
												<Picker
													mode={'dropdown'}
													ref={pickerRef}
													placeholder={'select -59KG'}
													selectedValue={value59}
													onValueChange={(itemValue, itemIndex) => {
														// //console.log('bal', JSON.stringify(itemValue));
														setValue59(itemValue);
														setCurrent59(
															items59[0].find((element) => {
																//console.log('elem', element);
																return element.imageurl === itemValue;
															})
														);
													}}
													noTopRadius={false}
													noBottomRadius={false}
													itemStyle={{
														backgroundColor: 'grey',
														color: 'blue',
														fontFamily: 'Ebrima',
														fontSize: 30,
														width: '100%',
														justifyContent: 'center',
														textAlign: 'center',
														borderRadius: 50,
													}}
													style={{
														height: 50,
														borderRadius: 50,
														justifyContent: 'center',
														alignItems: 'center',
														textAlign: 'center',
													}}
												>
													{items59[0]?.map((item) => {
														return (
															<Picker.Item
																style={{
																	textAlign: 'center',
																	justifyContent: 'center',
																	alignItems: 'center',
																	borderRadius: 50,
																}}
																label={item.picker}
																value={item.imageurl}
																key={item.picker}
															/>
														);
													})}
												</Picker>
												<View style={{ flexDirection: 'row' }}>
													<View style={{ flex: 1 }}>
														<Image
															referrerpolicy='no-referrer'
															source={
																value59.toLowerCase().indexOf('http') !== -1
																	? value59
																	: require('../assets/img.png')
															}
															style={{
																justifyContent: 'flex-start',
																// height: '275%',
																// height: '50%',
																width: '50%',
																aspectRatio: 1,

																borderRadius: 40,
																marginBottom: 10,
															}}
														></Image>
													</View>
													{current59 != null ? (
														<>
															<View style={{ flex: 1, width: '50%' }}>
																<View style={{ justifyContent: 'center' }}>
																	<Text>
																		Nominated Squat: {current59?.bestSquat}
																	</Text>
																	<Text>
																		Nominated Bench: {current59?.bestBench}
																	</Text>
																	<Text>
																		Nominated Deadlift:
																		{current59?.bestDeadlift}
																	</Text>
																	<Text>
																		Nominated Total: {current59?.bestTotal}
																	</Text>
																	{/* <Text>{selectedRatings}</Text> */}
																</View>
															</View>
															<View style={{ flex: 1 }}>
																<View style={{ justifyContent: 'flex-end' }}>
																	<DropDownPicker
																		items={dropdown59Items.map((item) => ({
																			label: item.toString(),
																			value: item,
																			disabled: selectedValues.includes(item),
																		}))}
																		value={dropdown59Value}
																		setValue={setDropdown59Value}
																		open={open59}
																		setOpen={setOpen59}
																		defaultValue={null}
																		placeholder='Dropdown 1'
																		containerStyle={styles.dropdownContainer}
																		style={styles.dropdown}
																		disabledItemContainerStyle={{
																			display: 'none',
																		}}
																		itemStyle={styles.dropdownItem}
																		dropDownStyle={styles.dropdownMenu}
																		onChangeItem={({ value }) =>
																			handleDropdown59Select(value)
																		}
																	/>
																	{/* <Picker
																		mode={'dropdown'}
																		ref={pickerRef}
																		placeholder={'select -66KG'}
																		selectedValue={valueRating59}
																		onValueChange={(itemValue, itemIndex) => {
																			//console.log('vle', itemValue);
																			handleRatingSelected(
																				itemValue,
																				valueRating59
																			);
																			setValueRating59(itemValue);
																			console.log('59', valueRating);
																			// setCurrent66(
																			// 	items66[0].find((element) => {
																			// 		//console.log('elem', element);
																			// 		return element.imageurl === itemValue;
																			// 	})
																			// );
																		}}
																		noTopRadius={false}
																		noBottomRadius={false}
																		itemStyle={{
																			backgroundColor: 'grey',
																			color: 'blue',
																			fontFamily: 'Ebrima',
																			fontSize: 30,
																			width: '100%',
																			justifyContent: 'center',
																			textAlign: 'center',
																			borderRadius: 50,
																		}}
																		style={{
																			height: 50,
																			borderRadius: 50,
																			justifyContent: 'center',
																			alignItems: 'center',
																			textAlign: 'center',
																		}}
																	>
																		{availableRatings
																			?.filter(
																				(filterItem) =>
																					!selectedRatings.includes(filterItem)
																			)
																			.map((item) => {
																				//console.log(
																				// 	'i',
																				// 	i,
																				// 	item,
																				// 	fullRatings,
																				// 	availableRatings
																				// );
																				return (
																					<Picker.Item
																						style={{
																							textAlign: 'center',
																							justifyContent: 'center',
																							alignItems: 'center',
																							borderRadius: 50,
																						}}
																						label={item}
																						value={item}
																						key={item}
																					/>
																				);
																			})}
																	</Picker> */}
																</View>
															</View>
														</>
													) : null}
												</View>
											</View>
										);
									case 'SIXTY_SIX':
										items66.push(weightClass.athletes);
										return (
											<View
												key={weightClass.athletes[0].picker}
												style={
													windowWidth > 800
														? styles.bigScreen
														: styles.smallScreen
												}
											>
												<Text>{weightClass.weightClass}</Text>
												<Picker
													mode={'dropdown'}
													ref={pickerRef}
													placeholder={'select -66KG'}
													selectedValue={value66}
													onValueChange={(itemValue, itemIndex) => {
														// //console.log('bal', JSON.stringify(itemValue));
														setValue66(itemValue);
														setCurrent66(
															items66[0].find((element) => {
																//console.log('elem', element);
																return element.imageurl === itemValue;
															})
														);
													}}
													noTopRadius={false}
													noBottomRadius={false}
													itemStyle={{
														backgroundColor: 'grey',
														color: 'blue',
														fontFamily: 'Ebrima',
														fontSize: 30,
														width: '100%',
														justifyContent: 'center',
														textAlign: 'center',
														borderRadius: 50,
													}}
													style={{
														height: 50,
														borderRadius: 50,
														justifyContent: 'center',
														alignItems: 'center',
														textAlign: 'center',
													}}
												>
													{items66[0]?.map((item) => {
														return (
															<Picker.Item
																style={{
																	textAlign: 'center',
																	justifyContent: 'center',
																	alignItems: 'center',
																	borderRadius: 50,
																}}
																label={item.picker}
																value={item.imageurl}
																key={item.picker}
															/>
														);
													})}
												</Picker>
												<Text>{current66?.firstName}</Text>
												<View style={{ flexDirection: 'row' }}>
													<View style={{ flex: 1 }}>
														<Image
															referrerpolicy='no-referrer'
															source={
																value66.toLowerCase().indexOf('http') !== -1
																	? value66
																	: require('../assets/img.png')
															}
															style={{
																justifyContent: 'flex-start',
																// height: '275%',
																// height: '50%',
																width: '50%',
																aspectRatio: 1,

																borderRadius: 40,
																marginBottom: 10,
															}}
														></Image>
													</View>
													{current66 != null ? (
														<>
															<View style={{ flex: 1, width: '50%' }}>
																<View style={{ justifyContent: 'center' }}>
																	<Text>
																		Nominated Squat: {current66?.bestSquat}
																	</Text>
																	<Text>
																		Nominated Bench: {current66?.bestBench}
																	</Text>
																	<Text>
																		Nominated Deadlift:{' '}
																		{current66?.bestDeadlift}
																	</Text>
																	<Text>
																		Nominated Total: {current66?.bestTotal}
																	</Text>
																</View>
															</View>
															<View style={{ flex: 1 }}>
																<View style={{ justifyContent: 'flex-end' }}>
																	{/* <Text>{availableRatings}</Text> */}
																	<DropDownPicker
																		items={dropdown66Items.map((item) => ({
																			label: item.toString(),
																			value: item,
																			disabled: selectedValues.includes(item),
																		}))}
																		value={dropdown66Value}
																		setValue={setDropdown66Value}
																		open={open66}
																		setOpen={setOpen66}
																		defaultValue={null}
																		disabledItemContainerStyle={{
																			display: 'none',
																		}}
																		placeholder='Dropdown 2'
																		containerStyle={styles.dropdownContainer}
																		style={styles.dropdown}
																		itemStyle={styles.dropdownItem}
																		dropDownStyle={styles.dropdownMenu}
																		onChangeItem={({ value }) =>
																			handleDropdown66Select(value)
																		}
																	/>

																	{/* <DropDownPicker
																		// style={{ flex: 1 }}
																		placeholder='Confidence Points'
																		open={openRating59}
																		value={valueRating59}
																		items={itemsRating}
																		setOpen={setOpenRating59}
																		setValue={setValueRating59}
																		setItems={setItemsRating}
																		zIndex={1000}
																		disabledItemContainerStyle={{
																			display: 'none',
																		}}
																		// onChangeValue={(item) =>
																		// 	handleSetRating(item)
																		// }
																	/> */}
																</View>
															</View>
														</>
													) : null}
												</View>
											</View>
										);
									case 'SEVENTY_FOUR':
										items74.push(weightClass.athletes);
										return (
											<View
												key={weightClass.athletes[0].picker}
												style={
													windowWidth > 800
														? styles.bigScreen
														: styles.smallScreen
												}
											>
												<Text>{weightClass.weightClass}</Text>
												<Picker
													mode={'dropdown'}
													ref={pickerRef}
													placeholder={'select -74KG'}
													selectedValue={value74}
													onValueChange={(itemValue, itemIndex) => {
														// //console.log('bal', JSON.stringify(itemValue));
														setValue74(itemValue);
														setCurrent74(
															items74[0].find((element) => {
																//console.log('elem', element);
																return element.imageurl === itemValue;
															})
														);
													}}
													noTopRadius={false}
													noBottomRadius={false}
													itemStyle={{
														backgroundColor: 'grey',
														color: 'blue',
														fontFamily: 'Ebrima',
														fontSize: 30,
														width: '100%',
														justifyContent: 'center',
														textAlign: 'center',
														borderRadius: 50,
													}}
													style={{
														height: 50,
														borderRadius: 50,
														justifyContent: 'center',
														alignItems: 'center',
														textAlign: 'center',
													}}
												>
													{items74[0]?.map((item) => {
														return (
															<Picker.Item
																style={{
																	textAlign: 'center',
																	justifyContent: 'center',
																	alignItems: 'center',
																	borderRadius: 50,
																}}
																label={item.picker}
																value={item.imageurl}
																key={item.picker}
															/>
														);
													})}
												</Picker>
												<Text>{current74?.firstName}</Text>
												<View style={{ flexDirection: 'row' }}>
													<View style={{ flex: 1 }}>
														<Image
															referrerpolicy='no-referrer'
															source={
																value74.toLowerCase().indexOf('http') !== -1
																	? value74
																	: require('../assets/img.png')
															}
															style={{
																justifyContent: 'flex-start',
																// height: '275%',
																// height: '50%',
																width: '50%',
																aspectRatio: 1,

																borderRadius: 40,
																marginBottom: 10,
															}}
														></Image>
													</View>

													{current74 != null ? (
														<>
															<View style={{ flex: 1, width: '50%' }}>
																<View style={{ justifyContent: 'center' }}>
																	<Text>
																		Nominated Squat: {current74?.bestSquat}
																	</Text>
																	<Text>
																		Nominated Bench: {current74?.bestBench}
																	</Text>
																	<Text>
																		Nominated Deadlift:{' '}
																		{current74?.bestDeadlift}
																	</Text>
																	<Text>
																		Nominated Total: {current74?.bestTotal}
																	</Text>
																</View>
															</View>
															<View style={{ flex: 1 }}>
																<View style={{ justifyContent: 'flex-end' }}>
																	<DropDownPicker
																		items={dropdown74Items.map((item) => ({
																			label: item.toString(),
																			value: item,
																			disabled: selectedValues.includes(item),
																		}))}
																		value={dropdown74Value}
																		setValue={setDropdown74Value}
																		open={open74}
																		setOpen={setOpen74}
																		defaultValue={null}
																		placeholder='Dropdown 3'
																		disabledItemContainerStyle={{
																			display: 'none',
																		}}
																		containerStyle={styles.dropdownContainer}
																		style={styles.dropdown}
																		itemStyle={styles.dropdownItem}
																		dropDownStyle={styles.dropdownMenu}
																		onChangeItem={({ value }) =>
																			handleDropdown74Select(value)
																		}
																	/>
																</View>
															</View>
														</>
													) : null}
												</View>
											</View>
										);
								}
							})}
					</View>
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
						{/* {male?.length > 0 ? JSON.stringify(male[0].athletes[0]) : value} */}

						{female &&
							female.map((weightClass) => {
								// console.log('SDFG');
								return (
									<View>
										<Text key={weightClass.weightClass}>
											{weightClass.weightClass}
										</Text>
										{/* <DropDownPicker
											open={open}
											value={value}
											items={weightClass.athletes}
											setOpen={setOpen}
											setValue={setValue}
											setItems={setItems}
											zIndex={1000}
											// onChangeValue={(item) => handleGetAthletes(item)}
										/> */}
									</View>
								);
							})}
					</View>
				)}
				<TouchableOpacity
					style={{ height: 50, width: 50, backgroundColor: 'green' }}
					onPress={() => getDataFromApi(819, 820)}
				></TouchableOpacity>
				{/* <Text>{loadGraphicCards()}</Text> */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Predictor;
