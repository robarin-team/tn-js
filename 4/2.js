function wordStat(text) {
	if (typeof(text) !== 'string')
		throw new Error('Invalid argument type.');

	if (!text || text.trim() === '') return false;

	const result = text.split(' ').filter(char => !!char).map(word => {
		let sum = 0;
	    for (let i in word) { sum += word.charCodeAt(i) }

	    return {
	      word,
	      sum
	    }
	 })

	return result;
}