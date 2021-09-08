// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
	// sum of all birds seen
	// use reduce to get the sum, don't need to initialize so we can just take the first number in the array
	const total = birdsPerDay.reduce((a, c) => a + c);
	return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
	// reduce on a specific chunk of the array, in intervals of 7
	// week 1: 0-6, week 2: 7-13
	console.log("birdsPerDay, week: ", birdsPerDay, week);
	const startIndex = week > 0 ? (week - 1) * 7 : 0;
	const endIndex = week * 7;
	const subArray = birdsPerDay.slice(startIndex, endIndex);
	return totalBirdCount(subArray);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
	// simple for loop with +2 increment
	for (let i = 0; i < birdsPerDay.length; i += 2) {
		birdsPerDay[i]++;
	}
	return birdsPerDay;
}
