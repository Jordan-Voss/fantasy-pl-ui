const windowWidth = useWindowDimensions().width;
const styles = getStyles(windowWidth);

const [selectedLanguage, setSelectedLanguage] = useState();

// const [open74, setOpen74] = useState(false);

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
