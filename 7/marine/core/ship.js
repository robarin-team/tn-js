'use strict';

function Ship(name, model, position = { x: 0, y: 0 }) {
    let _isAnchorDroped = false;

    this.name = name;
    this.model = model;
    this.position = position;
    this.distance = 0;
    this.speed = 0;

    this.move  = function (direction) {
    	if (_isAnchorDroped)
    		throw new Error('Anchor must be rised');


    	if (!['n', 'e', 's', 'w'].includes(direction))
    		throw new Error('Invalid direction was passed');

      switch(direction) {
      	case 'n':
      		this.position.y += 1;
      		break;
      	case 'e':
      		this.position.x += 1;
      		break;
      	case 's':
      		this.position.y -= 1;
      		break;
      	case 'w':
      		this.position.x -= 1;
      		break;
      }

      this.distance += 1;

      return true;
    }

    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('Anchor must be rised');

        const previousPosition = { x: this.position.x, y: this.position.y };

        this.position = {
            x: position.x,
            y: position.y,
        }

        this.distance += this._calculateDistance(previousPosition, this.position);

        return true;
    };

    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = true;

        return true; 
    };

    this.riseAnchor = () => {
        if (!_isAnchorDroped)
            throw new Error('Anchor is already rised');

        _isAnchorDroped = false;

        return true;    
    };

    this.isAnchorDroped = function () {
        return _isAnchorDroped;
    };

    this._calculateDistance = function (previousPosition, currentPosition) {
    	let differenceX = currentPosition.x - previousPosition.x;
    	let differenceY = currentPosition.y - previousPosition.y;

    	return Math.round(Math.sqrt(Math.pow(differenceX, 2) + Math.pow(differenceY, 2)));
    }
}

