export default function replaceArrayInArray(myArray, modifiedArray, index) {
	const newArray = [...myArray];
	newArray[index] = modifiedArray;
	return newArray;
}
