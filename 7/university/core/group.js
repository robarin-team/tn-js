'use strict';

function Group(number) {
	this.number = number;
	this.students = [];

	this.studentsAbsent = () => {
		let absent = [];

		for(let student of this.students) {
			if (!student.isHealthy())
				absent.push(student);
		}

		return absent;
	}
}