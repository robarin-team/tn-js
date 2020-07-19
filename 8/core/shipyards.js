const Shipyard = function () {
    this._type = Ship

    this.buildShip = function () {
        return new this._type(...arguments);
    }

    this.repairShip = function (ship) {
        if (!(ship instanceof this._type))
            throw new Error ('Shipyard is not compatible with this type of ships');

        console.log('Repaired!');

        return true;
    }

    this.paintShip = function (ship, color) {
        ship.color = color;

        return true;
    }

    this.changeShip = function (oldShip) {
        if (!(oldShip instanceof Ship))
            throw new Error('TradeIn is not work with this type of ships')

        return new Ship(oldShip.name, oldShip.model)
    }
}

const MotorShipyard = function () {
    Shipyard.call(this, MotorShip)
    this._type = MotorShip

    this.changeShip = function (oldShip) {
        if (!(oldShip instanceof MotorShip))
            throw new Error('TradeIn is not work with this type of ships')

        return new MotorShip(
            `New ${oldShip.name}`,
            oldShip.model,
            undefined,
            oldShip.material,
            oldShip.enginePower
        )
    }
}
MotorShipyard.prototype = new Shipyard()

const SailShipyard = function (oldShip) {
    Shipyard.call(this, SailShip)
    this._type = SailShip

    this.changeShip = function (oldShip) {
        if (!(oldShip instanceof SailShip))
            throw new Error('TradeIn is not work with this type of ships')

        return new SailShip(
            `New ${oldShip.name}`,
            oldShip.model, undefined,
            oldShip.mastCount,
            oldShip.sailSquare
        )
    }
}
SailShipyard.prototype = new Shipyard()
