'use strict';

function Student(fullname) {
	let nameParts = fullname.split(' ');

	let _healthy = true;

	this.name = nameParts[0];
	this.middlename = nameParts[1];
	this.surname = nameParts[2];

	this.fullname = () => {
		return `${this.name} ${this.middlename} ${this.surname}`;
	}

	this.surnameWithInitials = () => {
		return `${this.surname} ${this.name[0].toUpperCase()}.${this.middlename[0].toUpperCase()}.`;
	}

	this.isHealthy = () => {
		return _healthy;
	}

	this.markAsUnhealthy = () => {
		_healthy = false;

		return true;
	}
}

