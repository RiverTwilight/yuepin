const dic_trad = require("./dic_trad.json");
const dic_simp = require("./dic_simp.json");

// TODO to chinese

const toYuepin = (simplified) => {
	let yuepin = "";
	for (let i = 0; i < simplified.length; i++) {
		let char = simplified[i];
		if (dic_simp[char]) {
			yuepin += dic_simp[char].pinyin + " ";
		} else if (dic_trad[char]) {
			yuepin += dic_trad[char].pinyin + " ";
		} else {
			yuepin += char;
		}
	}
	return yuepin.trim();
};

export default toYuepin;
