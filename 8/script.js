const motorShipyard = new MotorShipyard()
const sailShipyard = new SailShipyard()
const explorer = motorShipyard.buildShip('Explorer', 'Cargo')
const tourer = motorShipyard.buildShip('Tourer', 'Passenger', undefined, 'carbon', 2000)
const voyager = sailShipyard.buildShip('Voyager', 'Passenger', undefined, 2, 20)

console.log(tourer.name, 'is', tourer.color)
console.log('Painting the Tourer in SailShipyard...')
sailShipyard.paintShip(tourer, 'red')
console.log(tourer.name, 'is', tourer.color)
console.log('Painting the Tourer in MotorShipyard...')
motorShipyard.paintShip(tourer, 'yellow')
console.log(tourer.name, 'is', tourer.color)

console.log('\n')

console.log('Repairing the Tourer')
console.log('Repairing in MotorShipyard...')
motorShipyard.repairShip(tourer)

console.log('Repairing in SailShipyard...')
try {
    sailShipyard.repairShip(tourer)
} catch(e) {
    console.log(e.message)
}

console.log('\n')

console.log('Voyager is sail ship')
console.log('Trying to change sail ship to new motor ship')
try {
    motorShipyard.changeShip(voyager)
} catch(e) {
    console.log(e.message)
}

console.log('Change sail ship to new sail ship')
console.log(sailShipyard.changeShip(voyager))