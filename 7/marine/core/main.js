'use strict';

/**
 * @type {Marine} Список всех кораблей и пристаней 
 */

const marine = {
	ships: [],
	docks: [],
};

window['marine'] = marine;

/**
 * @typedef {Object} Ship
 * @property {string} name
 * @property {string} model
 * @property {object} position
 * @property {number} distance
 * @property {number} speed
 * @property {boolean} isAnchorDroped
 */

 /**
 * @typedef  {Object} Dock
 * @property {string} name
 * @property {object} position
 * @property {number} ships
 */