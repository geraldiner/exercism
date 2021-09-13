/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determine whether the lasagna is done
 *
 * @param {number} remainingTime
 * @returns {string} lasagna status
 */
export function cookingStatus(remainingTime) {
	if (remainingTime === undefined || remainingTime === null) {
		return "You forgot to set the timer.";
	} else if (remainingTime === 0) {
		return "Lasagna is done.";
	} else {
		return "Not done, please wait.";
	}
}

/**
 * Estimate the preparation time
 *
 * @param {string[]} layers
 * @param {number} prepTimePerLayer
 * @returns {number} total preparation time
 */
export function preparationTime(layers, prepTimePerLayer = 2) {
	return layers.length * prepTimePerLayer;
}

/**
 * Calculate the amounts of noodles an sauce needed
 *
 * @param {string[]} layers
 * @returns {Record<string, number>}
 */
export function quantities(layers) {
	let quantities = layers.reduce(
		(a, c) => {
			if (c === "noodles") {
				a.noodles += 50;
			} else if (c === "sauce") {
				a.sauce += 0.2;
			}
			return a;
		},
		{ noodles: 0, sauce: 0 },
	);
	return quantities;
}

/**
 * Adds the secret ingredient from friend's recipe
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
	myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Gives the amount of ingredients needed for the given amount of portions
 *
 * @param {Record<string, number>} recipe
 * @param {number} portions
 */
export function scaleRecipe(recipe, portions) {
	let newRecipe = {};
	let recipeKeys = Object.keys(recipe);
	for (let i = 0; i < recipeKeys.length; i++) {
		newRecipe[recipeKeys[i]] = recipe[recipeKeys[i]] * (portions / 2);
	}
	return newRecipe;
}
