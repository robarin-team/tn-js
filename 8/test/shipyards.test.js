describe('MotorShipyard', function() {
    it('builds ship', function() {
        const shipyard = new MotorShipyard
        const ship = shipyard.buildShip('Tourer', 'Passenger')

        expect(ship.name).to.eq('Tourer')
        expect(ship.model).to.eq('Passenger')
        expect(ship.position).to.eql({ x: 0, y: 0 })
        expect(ship.distance).to.eq(0)
        expect(ship.speed).to.eq(0)
        expect(ship.color).to.eq('white')
        expect(ship._isAnchorDroped).to.eq(false)
    })
    
    it('repairs ship', function() {
        const shipyard = new MotorShipyard
        const ship = shipyard.buildShip('Tourer', 'Passenger')

        expect(shipyard.repairShip(ship)).to.eq(true)
    })

    it('not repairs other types of ship', function() {
        const motorShipyard = new MotorShipyard
        const sailShip = new SailShip('Tourer', 'Passenger')

        expect(() => {
            motorShipyard.repairShip(sailShip)
        }).to.throw(
            /Shipyard is not compatible with this type of ships/
        )
    })

    it('paints any ship', function() {
        const motorShipyard = new MotorShipyard
        const motorShip = motorShipyard.buildShip('Tourer', 'Passenger')
        const sailShip = new SailShip('Seagull', 'Passenger')

        motorShipyard.paintShip(motorShip, 'blue')
        expect(motorShip.color).to.eq('blue')

        motorShipyard.paintShip(sailShip, 'grey')
        expect(sailShip.color).to.eq('grey')
    })

    it('changes old ship to new', function() {
        const shipyard = new MotorShipyard
        const ship = shipyard.buildShip('Tourer', 'Passenger')

        newShip = shipyard.changeShip(ship)
        expect(newShip.name).to.eq('New Tourer')
    })

    it('does not change ship if type not compatible with Shipyard', function() {
        const shipyard = new MotorShipyard
        const ship = new SailShip('Seagull', 'Passenger')

        expect(() => {
          shipyard.changeShip(ship)
        }).to.throw(/TradeIn is not work with this type of ships/)
    })
})

describe('SailShipyard', function () {
  it('builds ship', function () {
    const shipyard = new SailShipyard
    const ship = shipyard.buildShip('Seagull', 'Passenger')

    expect(ship.name).to.eq('Seagull')
    expect(ship.model).to.eq('Passenger')
    expect(ship.position).to.eql({ x: 0, y: 0 })
    expect(ship.distance).to.eq(0)
    expect(ship.speed).to.eq(0)
    expect(ship.color).to.eq('white')
    expect(ship._isAnchorDroped).to.eq(false)
  })

  it('repairs ship', function () {
    const shipyard = new SailShipyard
    const ship = shipyard.buildShip('Seagull', 'Passenger')

    expect(shipyard.repairShip(ship)).to.eq(true)
  })

  it('not repairs other types of ship', function () {
    const sailShipyard = new SailShipyard
    const motorShip = new MotorShip('Tourer', 'Passenger')

    expect(() => {
      sailShipyard.repairShip(motorShip)
    }).to.throw(
      /Shipyard is not compatible with this type of ships/
    )
  })

  it('paints any ship', function () {
    const sailShipyard = new SailShipyard
    const sailShip = sailShipyard.buildShip('Seagull', 'Passenger')
    const motorShip = new MotorShip('Tourer', 'Passenger')

    sailShipyard.paintShip(sailShip, 'blue')
    expect(sailShip.color).to.eq('blue')

    sailShipyard.paintShip(motorShip, 'red')
    expect(motorShip.color).to.eq('red')
  })

  it('changes old ship to new', function () {
    const shipyard = new SailShipyard
    const ship = shipyard.buildShip('Seagull', 'Passenger')

    newShip = shipyard.changeShip(ship)
    expect(newShip.name).to.eq('New Seagull')
  })

  it('does not change ship if type not compatible with Shipyard', function () {
    const shipyard = new SailShipyard
    const ship = new MotorShip('Tourer', 'Passenger')

    expect(() => {
      shipyard.changeShip(ship)
    }).to.throw(/TradeIn is not work with this type of ships/)
  })
})