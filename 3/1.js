const countNegative = numbers => {
  if (numbers.length === 0) return false;

  const negative = numbers.filter(num => num < 0);
  const sum = negative.reduce((sum, num) => sum + num);

  return {
    count: negative.length,
    sum
  }
}

console.log(countNegative([91, 93, 45, -67, -96, -40, 34, -96, 42, -58]));