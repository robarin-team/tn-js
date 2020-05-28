function sumOfPositive(numbers) {
	if (!Array.isArray(numbers))
		throw new Error('Invalid argument type.');

	if (numbers.length === 0)
		return { count: 0, sum: 0 };

	if (numbers.filter(number => Number.isNaN(parseInt(number))).length > 0)
		throw new Error('Array must contain number values only.');

	const positive = numbers.filter(num => num > 0);
	const sum = positive.reduce((sum, num) => sum + num, 0);

	return {
		count: positive.length,
		sum
	}
}