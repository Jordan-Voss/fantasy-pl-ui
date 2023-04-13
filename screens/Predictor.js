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
import { useState, useContext } from 'react';
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
	const ratings = getRating();
	const [openRating, setOpenRating] = useState(false);
	const [valueRating, setValueRating] = useState('');
	const [openRating59, setOpenRating59] = useState(false);
	const [valueRating59, setValueRating59] = useState('');
	const [lastSet59Rating, setLastSet59Rating] = useState('');
	const [itemsRating, setItemsRating] = useState(ratings);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [items, setItems] = useState(comps);
	const [current59, setCurrent59] = useState(null);
	const [open59, setOpen59] = useState(false);
	const [value59, setValue59] = useState('');
	const [items59, setItems59] = useState([]);
	const [current66, setCurrent66] = useState(null);
	const [open66, setOpen66] = useState(false);
	const [value66, setValue66] = useState('');
	const [items66, setItems66] = useState([]);
	const [current74, setCurrent74] = useState(null);

	const [open74, setOpen74] = useState(false);
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
		var cids = value;
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
				<View>
					<DropDownPicker
						open={open}
						value={value}
						items={items}
						setOpen={setOpen}
						setValue={setValue}
						setItems={setItems}
						zIndex={1000}
						onChangeValue={(item) => handleGetAthletes(item)}
					/>
				</View>
				{/* <Text>
				
					{male?.length > 0 ? JSON.stringify(male[0].athletes[0]) : value}
				</Text> */}
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
						{/* {male?.length > 0 ? JSON.stringify(male[0].athletes[0]) : value} */}

						{male &&
							male.map((weightClass) => {
								// console.log('SDFG', male);
								switch (weightClass.weightClass) {
									case 'FIFTY_NINE':
										items59.push(weightClass.athletes);
										return (
											<View
												key={weightClass.athletes[0].id}
												style={
													windowWidth > 800
														? styles.bigScreen
														: styles.smallScreen
												}
											>
												<Text>{weightClass.weightClass}</Text>
												<DropDownPicker
													schema={{
														label: 'picker',
														value: 'id',
													}}
													open={open59}
													searchable={true}
													value={value59}
													itemSeparator={true}
													items={items59[0]}
													setOpen={setOpen59}
													setValue={setValue59}
													setItems={setItems59}
													zIndex={1000}
													selectedItemContainerStyle={{
														display: 'none',
													}}
													onChangeValue={(item) =>
														getImageUrl(
															weightClass.athletes,
															setCurrent59,
															current59,
															value59
														)
													}
												/>
												<Text>{current59?.firstName}</Text>
												<View style={{ flexDirection: 'row' }}>
													<View style={{ flex: 1 }}>
														<Image
															referrerpolicy='no-referrer'
															source={current59?.imageurl}
															style={{
																justifyContent: 'flex-start',
																// height: '275%',
																width: '75%',
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
																		Nominated Deadlift:{' '}
																		{current59?.bestDeadlift}
																	</Text>
																	<Text>
																		Nominated Total: {current59?.bestTotal}
																	</Text>
																</View>
															</View>
															<View style={{ flex: 1 }}>
																<View style={{ justifyContent: 'flex-end' }}>
																	<DropDownPicker
																		// style={{ flex: 1 }}
																		placeholder='Confidence Points'
																		open={openRating}
																		value={valueRating}
																		items={itemsRating}
																		setOpen={setOpenRating}
																		setValue={setValueRating}
																		setItems={setItemsRating}
																		zIndex={1000}
																		disabledItemContainerStyle={{
																			display: 'none',
																		}}
																		// onChangeValue={(item) => {
																		// 	console.log(item);
																		// 	const newState = itemsRating.map(
																		// 		(obj) => {
																		// 			if (obj.value === item) {
																		// 				console.log(obj.value);
																		// 				return { ...obj, disabled: true };
																		// 			}
																		// 			return obj;
																		// 		}
																		// 	);
																		// 	// const newStateReable = newState.map((obj) => {
																		// 	// 	if (obj.value === lastSet59Rating) {
																		// 	// 		return { ...obj, disabled: false };
																		// 	// 	}
																		// 	// 	return obj;
																		// 	// });
																		// 	setItemsRating(newState);
																		// 	// setLastSet59Rating(items);
																		// 	// console.log('ns', newStateReable);
																		// 	// console.log('last', lastSet59Rating);
																		// 	// return newState;
																		// }}
																	/>
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
												key={weightClass.athletes[0].id}
												style={
													windowWidth > 800
														? styles.bigScreen
														: styles.smallScreen
												}
											>
												<Text>{weightClass.weightClass}</Text>
												<DropDownPicker
													schema={{
														label: 'picker',
														value: 'id',
													}}
													open={open66}
													searchable={true}
													value={value66}
													itemSeparator={true}
													items={items66[0]}
													setOpen={setOpen66}
													setValue={setValue66}
													setItems={setItems66}
													zIndex={1000}
													onChangeValue={
														(item) =>
															getImageUrl(
																weightClass.athletes,
																setCurrent66,
																current66,
																value66
															)
														// handleGetUrl(weightClass.athletes)
													}
												/>
												<Text>{current66?.firstName}</Text>
												<View style={{ flexDirection: 'row' }}>
													<View style={{ flex: 1 }}>
														<Image
															referrerpolicy='no-referrer'
															source={current66?.imageurl}
															style={{
																justifyContent: 'flex-start',
																// height: '275%',
																width: '75%',
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
																	<DropDownPicker
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
																	/>
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
												key={weightClass.athletes[0].id}
												style={
													windowWidth > 800
														? styles.bigScreen
														: styles.smallScreen
												}
											>
												<Text>{weightClass.weightClass}</Text>
												<DropDownPicker
													schema={{
														label: 'picker',
														value: 'id',
													}}
													open={open74}
													searchable={true}
													value={value74}
													itemSeparator={true}
													items={items74[0]}
													setOpen={setOpen74}
													setValue={setValue74}
													setItems={setItems74}
													zIndex={1000}
													onChangeValue={
														(item) =>
															getImageUrl(
																weightClass.athletes,
																setCurrent74,
																current74,
																value74
															)
														// handleGetUrl(weightClass.athletes)
													}
												/>
												<Text>{current74?.firstName}</Text>
												<View style={{ flexDirection: 'row' }}>
													<View style={{ flex: 1 }}>
														<Image
															referrerpolicy='no-referrer'
															source={current74?.imageurl}
															style={{
																justifyContent: 'flex-start',
																// height: '275%',
																width: '75%',
																aspectRatio: 1,

																borderRadius: 40,
																marginBottom: 10,
															}}
														></Image>
													</View>
													{current74 != null ? (
														<View style={{ flex: 1, width: '50%' }}>
															<View style={{ justifyContent: 'flex-end' }}>
																<Text>
																	Nominated Squat: {current74?.bestSquat}
																</Text>
																<Text>
																	Nominated Bench: {current74?.bestBench}
																</Text>
																<Text>
																	Nominated Deadlift: {current74?.bestDeadlift}
																</Text>
																<Text>
																	Nominated Total: {current74?.bestTotal}
																</Text>
															</View>
														</View>
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
