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
import { useState, useContext, useRef, useEffect, useCallback } from 'react';
import { BASE_API_URL, ACCESS_TOKEN, CURRENT_USER } from '../config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomSwitch from '../components/CustomSwitch';
import DropDown from '../components/DropDown';
import RatingDropdowns from '../components/RatingDropdowns';

import AppHeader from '../components/AppHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import { AuthContext } from '../context/AuthContext';
import {
	getImageUrl,
	getAthleteData,
	onSelectSwitch,
	handleGetAthletes,
	handleSetValue,
} from '../util/PredictorUtils';
import Feather from 'react-native-vector-icons/Feather';
import comps from '../model/comps';
import { Picker } from '@react-native-picker/picker';

import { getStyles, getRating } from '../style';
const Predictor = ({ navigation }) => {
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
		savePrediction,
	} = useContext(AuthContext);
	const windowWidth = useWindowDimensions().width;

	const pickerRef = useRef();
	const [value, setValue] = useState('820 819');

	const open = () => {
		pickerRef.current.focus();
	};
	const [openComps, setOpenComps] = useState(false);

	const close = () => {
		pickerRef.current.blur();
	};
	const onSelectSwitch = (value) => {
		setGender(value);
	};
	const [male, setMale] = useState(null);
	const [female, setFemale] = useState([]);
	const [gender, setGender] = useState('male');
	// Select Comp Dropdown
	const comps = [
		{
			label: 'IPF World Classic Open Powerlifting Championship',
			value: '820 819',
		},
		{
			label: 'As More Competitions become available you can see them here',
			value: '840 841',
			disabled: true,
		},
	];
	// const [value, setValue] = useState('820 819');
	const [items, setItems] = useState(comps);
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
	// Weight Class Dropdowns
	// 59
	const [current59, setCurrent59] = useState(null);
	const [value59, setValue59] = useState('');
	const [items59, setItems59] = useState([]);
	const [dropdown59Items, setDropdown59Items] = useState(numbers);
	const [dropdown59Value, setDropdown59Value] = useState(null);
	const [open59, setOpen59] = useState(false);
	const [isError59, setIsError59] = useState(false);
	const handleDropdown59Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown59Value(value);
		}
	};

	// 66
	const [current66, setCurrent66] = useState(null);
	const [value66, setValue66] = useState('');
	const [items66, setItems66] = useState([]);
	const [dropdown66Items, setDropdown66Items] = useState(numbers);
	const [dropdown66Value, setDropdown66Value] = useState(null);
	const [open66, setOpen66] = useState(false);
	const [isError66, setIsError66] = useState(false);
	const handleDropdown66Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown66Value(value);
		}
	};

	// 74
	const [current74, setCurrent74] = useState(null);
	const [value74, setValue74] = useState('');
	const [items74, setItems74] = useState([]);
	const [dropdown74Items, setDropdown74Items] = useState(numbers);
	const [dropdown74Value, setDropdown74Value] = useState(null);
	const [open74, setOpen74] = useState(false);
	const [isError74, setIsError74] = useState(false);
	const handleDropdown74Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown74Value(value);
		}
	};

	// 83
	const [current83, setCurrent83] = useState(null);
	const [value83, setValue83] = useState('');
	const [items83, setItems83] = useState([]);
	const [dropdown83Items, setDropdown83Items] = useState(numbers);
	const [dropdown83Value, setDropdown83Value] = useState(null);
	const [open83, setOpen83] = useState(false);
	const [isError83, setIsError83] = useState(false);
	const handleDropdown83Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown83Value(value);
		}
	};

	// 93
	const [current93, setCurrent93] = useState(null);
	const [value93, setValue93] = useState('');
	const [items93, setItems93] = useState([]);
	const [dropdown93Items, setDropdown93Items] = useState(numbers);
	const [dropdown93Value, setDropdown93Value] = useState(null);
	const [open93, setOpen93] = useState(false);
	const [isError93, setIsError93] = useState(false);
	const handleDropdown93Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown93Value(value);
		}
	};

	// 105
	const [current105, setCurrent105] = useState(null);
	const [value105, setValue105] = useState('');
	const [items105, setItems105] = useState([]);
	const [dropdown105Items, setDropdown105Items] = useState(numbers);
	const [dropdown105Value, setDropdown105Value] = useState(null);
	const [open105, setOpen105] = useState(false);
	const [isError105, setIsError105] = useState(false);
	const handleDropdown105Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown105Value(value);
		}
	};

	// 120
	const [current120, setCurrent120] = useState(null);
	const [value120, setValue120] = useState('');
	const [items120, setItems120] = useState([]);
	const [dropdown120Items, setDropdown120Items] = useState(numbers);
	const [dropdown120Value, setDropdown120Value] = useState(null);
	const [open120, setOpen120] = useState(false);
	const [isError120, setIsError120] = useState(false);
	const handleDropdown120Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown120Value(value);
		}
	};

	// 120+
	const [currentOver120, setCurrentOver120] = useState(null);
	const [valueOver120, setValueOver120] = useState('');
	const [itemsOver120, setItemsOver120] = useState([]);
	const [dropdownOver120Items, setDropdownOver120Items] = useState(numbers);
	const [dropdownOver120Value, setDropdownOver120Value] = useState(null);
	const [openOver120, setOpenOver120] = useState(false);
	const [isErrorOver120, setIsErrorOver120] = useState(false);
	const handleDropdownOver120Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdownOver120Value(value);
		}
	};

	// 47
	const [current47, setCurrent47] = useState(null);
	const [value47, setValue47] = useState('');
	const [items47, setItems47] = useState([]);
	const [dropdown47Items, setDropdown47Items] = useState(numbers);
	const [dropdown47Value, setDropdown47Value] = useState(null);
	const [open47, setOpen47] = useState(false);
	const [isError47, setIsError47] = useState(false);
	const handleDropdown47Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown47Value(value);
		}
	};
	// 52
	const [current52, setCurrent52] = useState(null);
	const [value52, setValue52] = useState('');
	const [items52, setItems52] = useState([]);
	const [dropdown52Items, setDropdown52Items] = useState(numbers);
	const [dropdown52Value, setDropdown52Value] = useState(null);
	const [open52, setOpen52] = useState(false);
	const [isError52, setIsError52] = useState(false);
	const handleDropdown52Select = (value) => {
		if (value === dropdown52Value) {
			setDropdown52Value(null);
		} else if (!selectedValues.includes(value)) {
			setDropdown52Value(value);
		}
	};
	// 57
	const [current57, setCurrent57] = useState(null);
	const [value57, setValue57] = useState('');
	const [items57, setItems57] = useState([]);
	const [dropdown57Items, setDropdown57Items] = useState(numbers);
	const [dropdown57Value, setDropdown57Value] = useState(null);
	const [open57, setOpen57] = useState(false);
	const [isError57, setIsError57] = useState(false);
	const handleDropdown57Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown57Value(value);
		}
	};
	// 63
	const [current63, setCurrent63] = useState(null);
	const [value63, setValue63] = useState('');
	const [items63, setItems63] = useState([]);
	const [dropdown63Items, setDropdown63Items] = useState(numbers);
	const [dropdown63Value, setDropdown63Value] = useState(null);
	const [open63, setOpen63] = useState(false);
	const [isError63, setIsError63] = useState(false);
	const handleDropdown63Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown63Value(value);
		}
	};
	// 69
	const [current69, setCurrent69] = useState(null);
	const [value69, setValue69] = useState('');
	const [items69, setItems69] = useState([]);
	const [dropdown69Items, setDropdown69Items] = useState(numbers);
	const [dropdown69Value, setDropdown69Value] = useState(null);
	const [open69, setOpen69] = useState(false);
	const [isError69, setIsError69] = useState(false);
	const handleDropdown69Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown69Value(value);
		}
	};
	// 76
	const [current76, setCurrent76] = useState(null);
	const [value76, setValue76] = useState('');
	const [items76, setItems76] = useState([]);
	const [dropdown76Items, setDropdown76Items] = useState(numbers);
	const [dropdown76Value, setDropdown76Value] = useState(null);
	const [open76, setOpen76] = useState(false);
	const [isError76, setIsError76] = useState(false);
	const handleDropdown76Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown76Value(value);
		}
	};
	// 84
	const [current84, setCurrent84] = useState(null);
	const [value84, setValue84] = useState('');
	const [items84, setItems84] = useState([]);
	const [dropdown84Items, setDropdown84Items] = useState(numbers);
	const [dropdown84Value, setDropdown84Value] = useState(null);
	const [open84, setOpen84] = useState(false);
	const [isError84, setIsError84] = useState(false);
	const handleDropdown84Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown84Value(value);
		}
	};
	// 84+
	const [currentOver84, setCurrentOver84] = useState(null);
	const [valueOver84, setValueOver84] = useState('');
	const [itemsOver84, setItemsOver84] = useState([]);
	const [dropdownOver84Items, setDropdownOver84Items] = useState(numbers);
	const [dropdownOver84Value, setDropdownOver84Value] = useState(null);
	const [openOver84, setOpenOver84] = useState(false);
	const [isErrorOver84, setIsErrorOver84] = useState(false);
	const handleDropdownOver84Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdownOver84Value(value);
		}
	};

	const selectedValues = [
		dropdown59Value,
		dropdown66Value,
		dropdown74Value,
		dropdown83Value,
		dropdown93Value,
		dropdown105Value,
		dropdown120Value,
		dropdownOver120Value,
		dropdown47Value,
		dropdown52Value,
		dropdown57Value,
		dropdown63Value,
		dropdown69Value,
		dropdown76Value,
		dropdown84Value,
		dropdownOver84Value,
	];

	const handleGetAthletes = (item) => {
		console.log('itmsewerg', item);
		setMale(null);
		setValue(item);
		console.log(item);
		var cids = item;
		cids = cids.split(' ');
		getAthleteData(cids[0], 'male');
		getAthleteData(cids[1], 'female');
	};

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
					setCurrent83(json.athletes[3].athletes[0]);
					setValue83(json.athletes[3].athletes[0].imageurl);
					setCurrent93(json.athletes[4].athletes[0]);
					setValue93(json.athletes[4].athletes[0].imageurl);
					setCurrent105(json.athletes[5].athletes[0]);
					setValue105(json.athletes[5].athletes[0].imageurl);
					setCurrent120(json.athletes[6].athletes[0]);
					setValue120(json.athletes[6].athletes[0].imageurl);
					setCurrentOver120(json.athletes[7].athletes[0]);
					setValueOver120(json.athletes[7].athletes[0].imageurl);

					// for (const element of json.athletes) {
					// 	// console.log('WC', element);
					// 	male.push(element);
					// }
					// male.push(json.athletes);
				} else {
					setFemale(json.athletes);
					console.log('fml', json.athletes[1].athletes[0]);

					setCurrent47(json.athletes[0].athletes[0]);
					setValue47(json.athletes[0].athletes[0].imageurl);

					setCurrent52(json.athletes[1].athletes[0]);
					setValue52(json.athletes[1].athletes[0].imageurl);

					setCurrent57(json.athletes[2].athletes[0]);
					setValue57(json.athletes[2].athletes[0].imageurl);
					setCurrent63(json.athletes[3].athletes[0]);
					setValue63(json.athletes[3].athletes[0].imageurl);
					setCurrent69(json.athletes[4].athletes[0]);
					setValue69(json.athletes[4].athletes[0].imageurl);
					setCurrent76(json.athletes[5].athletes[0]);
					setValue76(json.athletes[5].athletes[0].imageurl);
					setCurrent84(json.athletes[6].athletes[0]);
					setValue84(json.athletes[6].athletes[0].imageurl);
					setCurrentOver84(json.athletes[7].athletes[0]);
					setValueOver84(json.athletes[7].athletes[0].imageurl);
				}
				return json;
			})
		);
	};
	const noErrors = () => {
		return (
			isError59 === false &&
			isError66 === false &&
			isError74 === false &&
			isError83 === false &&
			isError93 === false &&
			isError105 === false &&
			isError120 === false &&
			isErrorOver120 === false &&
			isError47 === false &&
			isError52 === false &&
			isError57 === false &&
			isError63 === false &&
			isError69 === false &&
			isError76 === false &&
			isError84 === false &&
			isErrorOver84 === false
		);
	};

	const handleIsError = () => {
		console.log(dropdown59Value, isError59);
		if (dropdown59Value === null) {
			setIsError59(true);
		} else setIsError59(false);
		if (dropdown66Value === null) {
			setIsError66(true);
		} else setIsError66(false);
		if (dropdown74Value === null) {
			setIsError74(true);
		} else setIsError74(false);
		if (dropdown83Value === null) {
			setIsError83(true);
		} else setIsError83(false);
		if (dropdown93Value === null) {
			setIsError93(true);
		} else setIsError93(false);
		if (dropdown105Value === null) {
			setIsError105(true);
		} else setIsError105(false);
		if (dropdown120Value === null) {
			setIsError120(true);
		} else setIsError120(false);
		if (dropdownOver120Value === null) {
			setIsErrorOver120(true);
		} else setIsErrorOver120(false);
		if (dropdown47Value === null) {
			setIsError47(true);
		} else setIsError47(false);
		if (dropdown52Value === null) {
			setIsError52(true);
		} else setIsError52(false);
		if (dropdown57Value === null) {
			setIsError57(true);
		} else setIsError57(false);
		if (dropdown63Value === null) {
			setIsError63(true);
		} else setIsError63(false);
		if (dropdown69Value === null) {
			setIsError69(true);
		} else setIsError69(false);
		if (dropdown76Value === null) {
			setIsError76(true);
		} else setIsError76(false);
		if (dropdown84Value === null) {
			setIsError84(true);
		} else setIsError84(false);
		if (dropdownOver84Value === null) {
			setIsErrorOver84(true);
		} else setIsErrorOver84(false);
	};
	useEffect(() => {
		console.log('afgsdegs', value);
		handleGetAthletes(value);
		// setCurrent59(items59[0]);
		// setCurrent66(items66[0]);
		// setCurrent74(items74[0]);
		// setCurrent83(items83[0]);
		// setCurrent93(items93[0]);
		// setCurrent105(items105[0]);
		// setCurrent120(items120[0]);
		// setCurrentOver120(itemsOver120[0]);
		console.log(current74);
	}, []);

	const createSaveRequest = () => {
		console.log(current59);
		const saveRequest = JSON.stringify({
			appUser: currentUser.id,
			predictions: [
				{
					weightClass: 'FIFTY_NINE',
					athleteInfo: current59,
					confidencePoints: parseInt(dropdown59Value),
				},
			],
		});
		savePrediction(saveRequest).then((response) => {
			console.log(response);
		});
		console.log(saveRequest);
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
					<DropDownPicker
						open={openComps}
						value={value}
						items={items}
						setOpen={setOpenComps}
						setValue={setValue}
						setItems={setItems}
						zIndex={1000}
						disabledItemContainerStyle={{
							opacity: 0.2,
						}}
						onChangeValue={(item) => handleGetAthletes(item)}
					/>
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
				<TouchableOpacity
					onPress={() => {
						handleIsError();
						if (noErrors() === true) {
							console.log('No Errors');
						}
						createSaveRequest();
					}}
					style={{
						backgroundColor: '#50f6ff',
						height: '1%',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '15px',
					}}
				>
					<Text>Submit</Text>
				</TouchableOpacity>
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

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items59}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value59}
												current={current59}
												dropdownItems={dropdown59Items}
												dropdownValue={dropdown59Value}
												setDropdownValue={setDropdown59Value}
												open={open59}
												setOpen={setOpen59}
												handleDropdownsSelect={handleDropdown59Select}
												setValue={setValue59}
												setCurrent={setCurrent59}
												selectedValues={selectedValues}
												weightClassText={'-59KG'}
												isError={isError59}
												setIsError={setIsError59}
											></RatingDropdowns>
										);
									case 'SIXTY_SIX':
										items66.push(weightClass.athletes);
										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items66}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value66}
												current={current66}
												dropdownItems={dropdown66Items}
												dropdownValue={dropdown66Value}
												setDropdownValue={setDropdown66Value}
												open={open66}
												setOpen={setOpen66}
												handleDropdownsSelect={handleDropdown66Select}
												setValue={setValue66}
												setCurrent={setCurrent66}
												selectedValues={selectedValues}
												weightClassText={'-66KG'}
												isError={isError66}
												setIsError={setIsError66}
											></RatingDropdowns>
										);
									case 'SEVENTY_FOUR':
										items74.push(weightClass.athletes);
										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items74}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value74}
												current={current74}
												dropdownItems={dropdown74Items}
												dropdownValue={dropdown74Value}
												setDropdownValue={setDropdown74Value}
												open={open74}
												setOpen={setOpen74}
												handleDropdownsSelect={handleDropdown74Select}
												setValue={setValue74}
												setCurrent={setCurrent74}
												selectedValues={selectedValues}
												weightClassText={'-74KG'}
												isError={isError74}
												setIsError={setIsError74}
											></RatingDropdowns>
										);
									case 'EIGHTY_THREE':
										items83.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items83}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value83}
												current={current83}
												dropdownItems={dropdown83Items}
												dropdownValue={dropdown83Value}
												setDropdownValue={setDropdown83Value}
												open={open83}
												setOpen={setOpen83}
												handleDropdownsSelect={handleDropdown83Select}
												setValue={setValue83}
												setCurrent={setCurrent83}
												selectedValues={selectedValues}
												weightClassText={'-83KG'}
												isError={isError83}
												setIsError={setIsError83}
											></RatingDropdowns>
										);
									case 'NINETY_THREE':
										items93.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items93}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value93}
												current={current93}
												dropdownItems={dropdown93Items}
												dropdownValue={dropdown93Value}
												setDropdownValue={setDropdown93Value}
												open={open93}
												setOpen={setOpen93}
												handleDropdownsSelect={handleDropdown93Select}
												setValue={setValue93}
												setCurrent={setCurrent93}
												selectedValues={selectedValues}
												weightClassText={'-93KG'}
												isError={isError93}
												setIsError={setIsError93}
											></RatingDropdowns>
										);
									case 'ONE_HUNDRED_AND_FIVE':
										items105.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items105}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value105}
												current={current105}
												dropdownItems={dropdown105Items}
												dropdownValue={dropdown105Value}
												setDropdownValue={setDropdown105Value}
												open={open105}
												setOpen={setOpen105}
												handleDropdownsSelect={handleDropdown105Select}
												setValue={setValue105}
												setCurrent={setCurrent105}
												selectedValues={selectedValues}
												weightClassText={'-105KG'}
												isError={isError105}
												setIsError={setIsError105}
											></RatingDropdowns>
										);
									case 'ONE_HUNDRED_AND_TWENTY':
										items120.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items120}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value120}
												current={current120}
												dropdownItems={dropdown120Items}
												dropdownValue={dropdown120Value}
												setDropdownValue={setDropdown120Value}
												open={open120}
												setOpen={setOpen120}
												handleDropdownsSelect={handleDropdown120Select}
												setValue={setValue120}
												setCurrent={setCurrent120}
												selectedValues={selectedValues}
												weightClassText={'-120KG'}
												isError={isError120}
												setIsError={setIsError120}
											></RatingDropdowns>
										);
									case 'OVER_ONE_HUNDRED_AND_TWENTY':
										itemsOver120.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={itemsOver120}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={valueOver120}
												current={currentOver120}
												dropdownItems={dropdownOver120Items}
												dropdownValue={dropdownOver120Value}
												setDropdownValue={setDropdownOver120Value}
												open={openOver120}
												setOpen={setOpenOver120}
												handleDropdownsSelect={handleDropdownOver120Select}
												setValue={setValueOver120}
												setCurrent={setCurrentOver120}
												selectedValues={selectedValues}
												weightClassText={'120+KG'}
												isError={isErrorOver120}
												setIsError={setIsErrorOver120}
											></RatingDropdowns>
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
								switch (weightClass.weightClass) {
									case 'FOURTY_SEVEN':
										items47.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items47}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value47}
												current={current47}
												dropdownItems={dropdown47Items}
												dropdownValue={dropdown47Value}
												setDropdownValue={setDropdown47Value}
												open={open47}
												setOpen={setOpen47}
												handleDropdownsSelect={handleDropdown47Select}
												setValue={setValue47}
												setCurrent={setCurrent47}
												selectedValues={selectedValues}
												weightClassText={'-47KG'}
												isError={isError47}
												setIsError={setIsError47}
											></RatingDropdowns>
										);
									case 'FIFTY_TWO':
										items52.push(weightClass.athletes);
										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items52}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value52}
												current={current52}
												dropdownItems={dropdown52Items}
												dropdownValue={dropdown52Value}
												setDropdownValue={setDropdown52Value}
												open={open52}
												setOpen={setOpen52}
												handleDropdownsSelect={handleDropdown52Select}
												setValue={setValue52}
												setCurrent={setCurrent52}
												selectedValues={selectedValues}
												weightClassText={'-52KG'}
												isError={isError52}
												setIsError={setIsError52}
											></RatingDropdowns>
										);
									case 'FIFTY_SEVEN':
										items57.push(weightClass.athletes);
										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items57}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value57}
												current={current57}
												dropdownItems={dropdown57Items}
												dropdownValue={dropdown57Value}
												setDropdownValue={setDropdown57Value}
												open={open57}
												setOpen={setOpen57}
												handleDropdownsSelect={handleDropdown57Select}
												setValue={setValue57}
												setCurrent={setCurrent57}
												selectedValues={selectedValues}
												weightClassText={'-57KG'}
												isError={isError57}
												setIsError={setIsError57}
											></RatingDropdowns>
										);
									case 'SIXTY_THREE':
										items63.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items63}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value63}
												current={current63}
												dropdownItems={dropdown63Items}
												dropdownValue={dropdown63Value}
												setDropdownValue={setDropdown63Value}
												open={open63}
												setOpen={setOpen63}
												handleDropdownsSelect={handleDropdown63Select}
												setValue={setValue63}
												setCurrent={setCurrent63}
												selectedValues={selectedValues}
												weightClassText={'-63KG'}
												isError={isError63}
												setIsError={setIsError63}
											></RatingDropdowns>
										);
									case 'SIXTY_NINE':
										items69.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items69}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value69}
												current={current69}
												dropdownItems={dropdown69Items}
												dropdownValue={dropdown69Value}
												setDropdownValue={setDropdown69Value}
												open={open69}
												setOpen={setOpen69}
												handleDropdownsSelect={handleDropdown69Select}
												setValue={setValue69}
												setCurrent={setCurrent69}
												selectedValues={selectedValues}
												weightClassText={'-69KG'}
												isError={isError69}
												setIsError={setIsError69}
											></RatingDropdowns>
										);
									case 'SEVENTY_SIX':
										items76.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items76}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value76}
												current={current76}
												dropdownItems={dropdown76Items}
												dropdownValue={dropdown76Value}
												setDropdownValue={setDropdown76Value}
												open={open76}
												setOpen={setOpen76}
												handleDropdownsSelect={handleDropdown76Select}
												setValue={setValue76}
												setCurrent={setCurrent76}
												selectedValues={selectedValues}
												weightClassText={'-76KG'}
												isError={isError76}
												setIsError={setIsError76}
											></RatingDropdowns>
										);
									case 'EIGHTY_FOUR':
										items84.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={items84}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={value84}
												current={current84}
												dropdownItems={dropdown84Items}
												dropdownValue={dropdown84Value}
												setDropdownValue={setDropdown84Value}
												open={open84}
												setOpen={setOpen84}
												handleDropdownsSelect={handleDropdown84Select}
												setValue={setValue84}
												setCurrent={setCurrent84}
												selectedValues={selectedValues}
												weightClassText={'-84KG'}
												isError={isError84}
												setIsError={setIsError84}
											></RatingDropdowns>
										);
									case 'OVER_EIGHTY_FOUR':
										itemsOver84.push(weightClass.athletes);

										return (
											<RatingDropdowns
												weightClass={weightClass}
												items={itemsOver84}
												windowWidth={windowWidth}
												pickerRef={pickerRef}
												value={valueOver84}
												current={currentOver84}
												dropdownItems={dropdownOver84Items}
												dropdownValue={dropdownOver84Value}
												setDropdownValue={setDropdownOver84Value}
												open={openOver84}
												setOpen={setOpenOver84}
												handleDropdownsSelect={handleDropdownOver84Select}
												setValue={setValueOver84}
												setCurrent={setCurrentOver84}
												selectedValues={selectedValues}
												weightClassText={'84+KG'}
												isError={isErrorOver84}
												setIsError={setIsErrorOver84}
											></RatingDropdowns>
										);
								}
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
