'use strict';

/**
* @type {Marine} Список всех кораблей, пристаней и верфей
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
* @property {string} color
* @property {boolean} _isAnchorDroped
*/

/**
* @typedef {Object} MotorShip
* @property {string} name
* @property {string} model
* @property {object} position
* @property {number} distance
* @property {number} speed
* @property {string} color
* @property {boolean} _isAnchorDroped
* @property {string} _material
* @property {number} _enginePower
*/

/**
* @typedef {Object} SailShip
* @property {string} name
* @property {string} model
* @property {object} position
* @property {number} distance
* @property {number} speed
* @property {boolean} _isAnchorDroped
* @property {number} _mastCount
* @property {string} _sailSquare
*/

/**
* @typedef  {Object} Shipyard
* @property {function} _type
*/

/**
* @typedef  {Object} MotorShipyard
* @property {function} _type
*/

/**
* @typedef  {Object} SailShipyard
* @property {function} _type
*/

/**
* @typedef  {Object} Dock
* @property {string} name
* @property {object} position
* @property {number} ships
*/