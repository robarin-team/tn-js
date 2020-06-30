'use strict';

/**
 * @type {University} Список всех групп со студентами 
 */

const university = {
	groups: [],
	students: []
};

window['university'] = university;

/**
 * @typedef {Object} Student
 * @property {string} name
 * @property {string} surname
 * @property {string} middlename
 * @property {string} fullname
 * @property {string} surnameWithInitials
 * @property {boolean} isHealthy
 */

 /**
 * @typedef  {Object} Group
 * @property {number} number
 * @property {array} students
 * @property {array} studentsAbsent
 */