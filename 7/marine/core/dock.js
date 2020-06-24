'use strict';

function Dock(position) {
	const _position = position; 

	this.position = () => {
		return _position;
	}

	this.ships = 0;

	this.moor = function (ship) {
		ship.dropAnchor();

		this.ships += 1;

		return true; 
	}

	this.unmoor = function (ship) {
		ship.riseAnchor();

		this.ships -= 1;

		return true;
	}
}