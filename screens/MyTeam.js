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
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Feather from 'react-native-vector-icons/Feather';
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

const MyTeam = ({ navigation }) => {
	const [dropdown1Items, setDropdown1Items] = useState(numbers);
	const [dropdown2Items, setDropdown2Items] = useState(numbers);
	const [dropdown3Items, setDropdown3Items] = useState(numbers);
	const [dropdown1Value, setDropdown1Value] = useState(null);
	const [dropdown2Value, setDropdown2Value] = useState(null);
	const [dropdown3Value, setDropdown3Value] = useState(null);

	const selectedValues = [dropdown1Value, dropdown2Value, dropdown3Value];
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const handleDropdown1Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown1Value(value);
		}
	};

	const handleDropdown2Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown2Value(value);
		}
	};

	const handleDropdown3Select = (value) => {
		if (!selectedValues.includes(value)) {
			setDropdown3Value(value);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<ScrollView style={{ padding: 20 }}>
				<AppHeader navigation={navigation} pageName='My Team'></AppHeader>
				<View style={styles.container}>
					<DropDownPicker
						items={dropdown1Items.map((item) => ({
							label: item.toString(),
							value: item,
							disabled: selectedValues.includes(item),
						}))}
						value={dropdown1Value}
						setValue={setDropdown1Value}
						open={open1}
						setOpen={setOpen1}
						defaultValue={null}
						placeholder='Dropdown 1'
						containerStyle={styles.dropdownContainer}
						style={styles.dropdown}
						disabledItemContainerStyle={{ display: 'none' }}
						itemStyle={styles.dropdownItem}
						dropDownStyle={styles.dropdownMenu}
						onChangeItem={({ value }) => handleDropdown1Select(value)}
					/>

					<DropDownPicker
						items={dropdown2Items.map((item) => ({
							label: item.toString(),
							value: item,
							disabled: selectedValues.includes(item),
						}))}
						value={dropdown2Value}
						setValue={setDropdown2Value}
						open={open2}
						setOpen={setOpen2}
						defaultValue={null}
						disabledItemContainerStyle={{ display: 'none' }}
						placeholder='Dropdown 2'
						containerStyle={styles.dropdownContainer}
						style={styles.dropdown}
						itemStyle={styles.dropdownItem}
						dropDownStyle={styles.dropdownMenu}
						onChangeItem={({ value }) => handleDropdown2Select(value)}
					/>

					<DropDownPicker
						items={dropdown3Items.map((item) => ({
							label: item.toString(),
							value: item,
							disabled: selectedValues.includes(item),
						}))}
						value={dropdown3Value}
						setValue={setDropdown3Value}
						open={open3}
						setOpen={setOpen3}
						defaultValue={null}
						placeholder='Dropdown 3'
						disabledItemContainerStyle={{ display: 'none' }}
						containerStyle={styles.dropdownContainer}
						style={styles.dropdown}
						itemStyle={styles.dropdownItem}
						dropDownStyle={styles.dropdownMenu}
						onChangeItem={({ value }) => handleDropdown3Select(value)}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dropdownContainer: {
		width: '80%',
		marginVertical: 70,
	},
	dropdown: {
		padding: 50,
		backgroundColor: '#fafafa',
	},
	dropdownItem: {
		justifyContent: 'flex-start',
	},
	dropdownMenu: {
		backgroundColor: '#fafafa',
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#ccc',
		marginHorizontal: 20,
		marginVertical: 10,
		width: '80%',
	},
});
export default MyTeam;
