'use strict';

function Dock(position) {
	const _position = position; 

	this.position = () => {
		return _position;
	}

	this.ships = 0;

	this.moor = function (ship) {
		if ((ship.position.x != _position.x) || (ship.position.y != _position.y))
			throw new Error('Ship is not at dock to moor');

		ship.dropAnchor();

		this.ships += 1;

		return true; 
	}

	this.unmoor = function (ship) {
		if ((ship.position.x != _position.x) || (ship.position.y != _position.y))
			throw new Error('Ship is not moored');

		ship.riseAnchor();

		this.ships -= 1;

		return true;
	}
}