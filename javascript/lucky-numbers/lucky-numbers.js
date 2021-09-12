// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
	const getNumber = array => {
		let number = 0;
		let i = 0;
		while (array.length > 0) {
			number += array.pop() * Math.pow(10, i);
			i++;
		}
		return number;
	};
	return getNumber(array1) + getNumber(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
	const numStr = "" + value;
	for (let i = 0; i < numStr.length / 2; i++) {
		if (numStr[i] !== numStr[numStr.length - i - 1]) {
			return false;
		}
	}
	return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
	if (!input) {
		return "Required field";
	}
	if (!Number(input)) {
		return "Must be a number besides 0";
	}
	return "";
}
