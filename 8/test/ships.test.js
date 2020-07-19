describe('MotorShip', function() {
    it('has Ship prototype', function() {
        expect(MotorShip.prototype.constructor.name).to.eq('Ship')
    })

    it('passes arguments and has default properties', function() {
        const motorShip = new MotorShip('Express', 'Passenger', undefined, 'carbon', 1600)

        expect(motorShip.name).to.eq('Express')
        expect(motorShip.model).to.eq('Passenger')
        expect(motorShip._material).to.eq('carbon')
        expect(motorShip.position).to.eql({ x: 0, y: 0 })
        expect(motorShip._enginePower).to.eq(1600)
        expect(motorShip.distance).to.eq(0)
        expect(motorShip.speed).to.eq(0)
        expect(motorShip.color).to.eq('white')
        expect(motorShip._isAnchorDroped).to.eq(false)
    })

    it('returns anchor is droped', function () {
        const motorShip = new MotorShip('Express', 'Passenger')

        expect(motorShip.isAnchorDroped()).to.eq(false)
    })

    it('drops anchor', function () {
        const motorShip = new MotorShip('Express', 'Passenger')

        motorShip.dropAnchor()
        expect(motorShip.isAnchorDroped()).to.eq(true)
    })

    it('rises anchor', function () {
        const motorShip = new MotorShip('Express', 'Passenger')

        motorShip.dropAnchor()
        motorShip.riseAnchor()
        expect(motorShip.isAnchorDroped()).to.eq(false)
    })

    it('moves if anchor is not droped', function () {
        const motorShip = new MotorShip('Express', 'Passenger')

        motorShip.move('n')
        expect(motorShip.position).to.eql({ x: 0, y: 1 })
    })

    it('not moves if anchor is droped', function () {
        const motorShip = new MotorShip('Express', 'Passenger')

        motorShip.dropAnchor()
        expect(() => {
            motorShip.move('n')
        }).to.throw(/Anchor must be rised/)
    })

    it('moves to coordinate', function () {
        const motorShip = new MotorShip('Express', 'Passenger', { x: 5, y: 5 })

        motorShip.moveTo({ x: 10, y: 10 })
        expect(motorShip.position).to.eql({ x: 10, y: 10 })
        expect(motorShip.distance).to.eq(7)
    })
})

describe('SailShip', function() {
    it('has Ship prototype', function () {
        expect(SailShip.prototype.constructor.name).to.eq('Ship')
    })

    it('passes arguments and has default properties', function () {
        const sailShip = new SailShip('Sail', 'Passenger', undefined, 2, 2000)

        expect(sailShip.name).to.eq('Sail')
        expect(sailShip.model).to.eq('Passenger')
        expect(sailShip.position).to.eql({ x: 0, y: 0 })
        expect(sailShip._mastCount).to.eq(2)
        expect(sailShip._sailSquare).to.eq(2000)
        expect(sailShip.speed).to.eq(0)
        expect(sailShip.color).to.eq('white')
        expect(sailShip._isAnchorDroped).to.eq(false)
    })

    it('returns anchor is droped', function () {
        const sailShip = new MotorShip('Sail', 'Passenger')

        expect(sailShip.isAnchorDroped()).to.eq(false)
    })

    it('drops anchor', function () {
        const sailShip = new MotorShip('Sail', 'Passenger')

        sailShip.dropAnchor()
        expect(sailShip.isAnchorDroped()).to.eq(true)
    })

    it('rises anchor', function () {
        const sailShip = new MotorShip('Sail', 'Passenger')

        sailShip.dropAnchor()
        sailShip.riseAnchor()
        expect(sailShip.isAnchorDroped()).to.eq(false)
    })

    it('moves if anchor is not droped', function () {
        const sailShip = new MotorShip('Sail', 'Passenger')

        sailShip.move('n')
        expect(sailShip.position).to.eql({ x: 0, y: 1 })
    })

    it('not moves if anchor is droped', function () {
        const sailShip = new MotorShip('Sail', 'Passenger')

        sailShip.dropAnchor()
        expect(() => {
            sailShip.move('n')
        }).to.throw(/Anchor must be rised/)
    })

    it('moves to coordinate', function () {
        const sailShip = new MotorShip('Sail', 'Passenger', { x: 5, y: 5 })

        sailShip.moveTo({ x: 10, y: 10 })
        expect(sailShip.position).to.eql({ x: 10, y: 10 })
        expect(sailShip.distance).to.eq(7)
    })
})