'use strict';

const ship1 = new Ship('Voyager', 'Passenger', {x: 10, y: 10});
const ship2 = new Ship('Explorer', 'Cargo', {x: 30, y: 20});

marine.ships.push(ship1, ship2);

const dock1 = new Dock({x: 12, y: 13});
const dock2 = new Dock({x: 31, y: 22});

marine.docks.push(dock1, dock2);

const dock1Position = dock1.position();
const dock2Position = dock2.position();

console.log(ship1.name, ship1.position);

console.log('Move ' + ship1.name + ' to the west:');
ship1.move('w');

console.log(ship1.name, 'distance: ', ship1.distance, ship1.position);

console.log('Move ' + ship1.name + 'to Dock 1: ', dock1Position);
ship1.moveTo(dock1Position);

console.log(ship1.name, 'distance: ', ship1.distance, ship1.position);
console.log('Number of ships in Dock 1 before mooring: ', dock1.ships);

console.log('Moor ' + ship1.name + ' in Dock 1:');
dock1.moor(ship1);

console.log('Is anchor of ' + ship1.name + ' dropped? ', ship1.isAnchorDroped());
console.log('Number of ships in Dock 1 after mooring: ', dock1.ships);

console.log('Unmoor ' + ship1.name + ' in Dock 1:');
console.log('Rise anchor of ' + ship1.name);
dock1.unmoor(ship1);

console.log('Is anchor of ' + ship1.name + ' dropped? ', ship1.isAnchorDroped());

console.log('Move ' + ship1.name + ' to Dock 2: ', dock2Position);
ship1.moveTo(dock2Position);

console.log(ship1.name, 'distance: ', ship1.distance, ship1.position);
