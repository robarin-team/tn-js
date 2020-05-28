// [-1, 2, -3, 4, -5] - { count: 2, sum: 6 }
// [1, 1, 2.5, 3.5, -8] - { count: 4, sum: 8 }
// "string"  -  выдать ошибку
// ['str', [], {}]  -  выдать ошибку
// []  -  { count: 0, sum: 0 }
// [0, -1]  -  { count: 0, sum: 0 }

describe('sumOfPositive', function() {
	it('successes when array of numbers', function() {
		assert.deepEqual(sumOfPositive([-1, 2, -3, 4, -5]), { count: 2, sum: 6 });
	});

	it('successes when array of float numbers', function() {
		assert.deepEqual(sumOfPositive([1, 1, 2.5, 3.5, -8]), { count: 4, sum: 8 });
	});

	it('throws error if argument is not an Array', function() {
		assert.throws(function () { sumOfPositive('string') }, Error, 'Invalid argument type.');
	});

	it('throws error if argument contains not number values', function() {
		assert.throws(
			function () { sumOfPositive(['str', [], {}]) }, 
			Error, 'Array must contain number values only.'
		);
	});

	it('successes if array is empty', function() {
		assert.deepEqual(sumOfPositive([]), { count: 0, sum: 0 });
	});

	it('ignores 0', function() {
		assert.deepEqual(sumOfPositive([0, -1]), { count: 0, sum: 0 });
	});
}) 