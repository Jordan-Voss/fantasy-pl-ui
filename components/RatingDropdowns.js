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
import AthleteSelected from '../components/AthleteSelected';

import AppHeader from '../components/AppHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import { AuthContext } from '../context/AuthContext';
import { getImageUrl } from '../util/PredictorUtils';
import Feather from 'react-native-vector-icons/Feather';
import comps from '../model/comps';
import { Picker } from '@react-native-picker/picker';

import { getStyles, getRating } from '../style';

export default function RatingDropdowns({
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
	setIsError,
}) {
	const handleDropdownSelect = (value) => {
		console.log('adsgfhdfsghsdfghsfdghfdsghdsfh');
		if (!selectedValues.includes(value)) {
			setDropdown52Value(value);
		}
	};
	const placeholderImage = '../assets/img.png';

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};
	const styles = getStyles(windowWidth);

	return (
		<View
			key={weightClass.athletes[0].picker}
			style={windowWidth > 1000 ? styles.bigScreen : styles.smallScreen}
		>
			<Text>{weightClassText}</Text>
			<Picker
				mode={'dropdown'}
				ref={pickerRef}
				// placeholder={'select -59KG'}
				selectedValue={value}
				onValueChange={(itemValue, itemIndex) => {
					// //console.log('bal', JSON.stringify(itemValue));
					setValue(itemValue);
					setIsError(false);
					setCurrent(
						items[0].find((element) => {
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
					zIndex: 1000,
				}}
			>
				{items[0]?.map((item) => {
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
					<AthleteSelected
						weightClass={weightClass}
						items={items}
						windowWidth={windowWidth}
						pickerRef={pickerRef}
						value={value}
						current={current}
						dropdownItems={dropdownItems}
						dropdownValue={dropdownValue}
						setDropdownValue={setDropdownValue}
						open={open}
						setOpen={setOpen}
						handleDropdownsSelect={handleDropdownSelect}
						setValue={setValue}
						setCurrent={setCurrent}
						selectedValues={selectedValues}
						isError={isError}
					></AthleteSelected>
					{/* <Image
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
							// height: '50%',
							width: '50%',
							aspectRatio: 1,

							borderRadius: 40,
							marginBottom: 10,
						}}
					></Image> */}
				</View>
			</View>
		</View>
	);
}
