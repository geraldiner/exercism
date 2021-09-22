// @ts-check

import { errorMonitor } from "events";

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
	constructor(temperature) {
		super(`The temperature is ${temperature} ! Overheating !`);
		this.temperature = temperature;
	}
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
	if (humidityPercentage > 70) {
		throw new Error("Humidity is too damn high!");
	}
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
	if (!temperature) {
		throw new ArgumentError("Sensor error. Please check the sensor.");
	}
	if (temperature > 500) {
		throw new OverheatingError(temperature);
	}
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine({ check, alertDeadSensor, alertOverheating, shutdown }) {
	try {
		check();
	} catch (error) {
		if (ArgumentError) {
			alertDeadSensor();
		} else if (OverheatingError) {
			console.log(OverheatingError.arguments);
			if (OverheatingError.arguments[0] > 600) {
				shutdown();
			} else {
				alertOverheating();
			}
		} else {
			throw error;
		}
	}
}
