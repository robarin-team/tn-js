for (let i = 1; i <= 9; i++) {
  let row = `${i === 1 ? '' : i}`.padEnd(3, ' ')
  
  for (let n = 1; n <= 9; n++) {
    row += `${i * n}`.padEnd(3, ' ')
  }

  console.log(row)
}