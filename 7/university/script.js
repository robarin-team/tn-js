'use strict';

const group1 = new Group(1);
university.groups.push(group1);

const student1 = new Student('Harry James Potter');
const student2 = new Student('Hermione Jean Granger');
const student3 = new Student('Ginny Molly Weasley');
const student4 = new Student('Ron Bilius Weasley');

student3.markAsUnhealthy();
student4.markAsUnhealthy();

university.students.push(student1, student2, student3, student4);
group1.students.push(student1, student2, student3, student4);

console.log(university);

for (let student of university.students) {
	console.log(student.fullname(), 'healthy: ' + student.isHealthy());
}

console.log('Who is absent today?');

let absentStudents = group1.studentsAbsent();
console.log(group1.studentsAbsent());

for(let student of absentStudents) {
	console.log(student.surnameWithInitials(), student.isHealthy());
}

