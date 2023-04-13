export const getImageUrl = (
	array,
	setWeightClass,
	weightClass,
	athleteValue
) => {
	console.log('58', weightClass);
	console.log(array);
	console.log(athleteValue);
	setWeightClass(array.find((element) => element.id === athleteValue));
	console.log('59', weightClass);
};
