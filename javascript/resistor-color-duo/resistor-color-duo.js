//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = list => {
	const colorMap = {
		"black": 0,
		"brown": 1,
		"red": 2,
		"orange": 3,
		"yellow": 4,
		"green": 5,
		"blue": 6,
		"violet": 7,
		"grey": 8,
		"white": 9,
	};
	const firstColor = list[0];
	const secondColor = list[1];
	const value = colorMap[firstColor] * 10 + colorMap[secondColor];
	return value;
};
