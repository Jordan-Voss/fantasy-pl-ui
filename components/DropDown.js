import { useState, useContext } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = () => {
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
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [items, setItems] = useState(comps);
	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setValue}
			setItems={setItems}
			zIndex={1000}
			// onChangeValue={(item) => handleGetAthletes(item)}
		/>
	);
};
export default DropDown;
