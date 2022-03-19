import * as tools from './index'



describe('[ CREATE ROBOT ]', () => {
	it('returns factored robot object with { count, currAction, id, moves, name, nextAction } properties', () => {
		const robots = tools.createRobot( null, 0 );
		expect( robots ).toHaveProperty('id');
		expect( robots ).toHaveProperty('name');
		expect( robots ).toHaveProperty('currAction');
		expect( robots ).toHaveProperty('nextAction');
		expect( robots ).toHaveProperty('count');
		expect( robots ).toHaveProperty('moves');
	})
	it('ensures an error is thrown without expected 2 params',  () => {
		expect(() => {
			// @ts-expect-error
			createRobot();
		  }).toThrow();
	})
})


describe('[ CREATE ROBOTS ]', () => {
	it('returns empty array when no appropriated argument', () => {
		let robots = tools.createRobots();
		expect( robots ).toHaveLength(0);

		robots = tools.createRobots( NaN );
		expect( robots ).toHaveLength(0);
	})

	it('returns array with 2 items', () => {
		const robots = tools.createRobots(2);
		expect( robots ).toHaveLength(2);
	})

	it('returns correct items with \n	{ count, currAction, id, moves, name, nextAction }', () => {
		const robots = tools.createRobots(2);
		expect( robots[0] ).not.toBe(!{});
		expect( robots[0] ).toStrictEqual( tools.createRobot( null, 0) );
		expect( robots[0] ).not.toBe( tools.createRobot( null, 1 ));
	})
})