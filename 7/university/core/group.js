'use strict';

function Group(number) {
	this.number = number;
	this.students = [];

	this.studentsAbsent = () => {
		return this.students.filter(
			student => !student.isHealthy()
		);
	}
}
