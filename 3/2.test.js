// 'Lorem ipsum' - [{ word: 'Lorem', sum: 511 }, { word: 'ipsum', sum: 558 }]
// 'dolor sit amet.' - [{ word: 'dolor', sum: 544 }, { word: 'sit', sum: 336 }, { word: 'amet.', sum: 469 }]
// ' '   - false
// 11235 - выдать ошибку
// '  Lorem    ipsum ' - [{ word: 'Lorem', sum: 511 }, { word: 'ipsum', sum: 558 }]

describe('wordStat', function() {
	it('successes when text is provided', function() {
		assert.deepEqual(wordStat('Lorem ipsum'), [{ word: 'Lorem', sum: 511 }, { word: 'ipsum', sum: 558 }]);
	});

	it('successes when text with punctuations is provided', function() {
		const result = [{ word: 'dolor', sum: 544 }, { word: 'sit', sum: 336 }, { word: 'amet.', sum: 469 }];
		assert.deepEqual(wordStat('dolor sit amet.'), result);
	});

	it('returns false when empty string', function() {
		assert.deepEqual(wordStat(' '), false);
	});

	it('throws error when argument is not a string', function() {
		assert.throws(function () { wordStat(11235) }, Error, 'Invalid argument type.');
	});

	it('successes when text contains extra spaces', function() {
		const result = [{ word: 'Lorem', sum: 511 }, { word: 'ipsum', sum: 558 }];
		assert.deepEqual(wordStat('  Lorem    ipsum '), result);
	});
})