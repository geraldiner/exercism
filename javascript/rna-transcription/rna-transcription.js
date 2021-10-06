//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = sequence => {
	const dnaMap = { "G": "C", "C": "G", "T": "A", "A": "U" };
	if (sequence.length > 0) {
		let newStr = "";
		for (let i = 0; i < sequence.length; i++) {
			newStr += dnaMap[sequence[i]];
		}
		return newStr;
	}
	return sequence;
};
