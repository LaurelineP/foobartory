# 🤖 FOO BAR FACTORY
A factory of robots building other robots.

## Specs 
Starting with two robots mining ( work / T => item ) foo bar and gathering them in order to create foobar. 
| _action_			| time 								|
|:-------------		| :--------------------------------	|
| _move_			| 5sec								|
| _gather-foobar_	| 2sec								|
| _construct_		| 0sec * 0.60(**60%**) odds to succeed => if fail **bar** is reusable	|



| ores			| time 									|
|:-------------	| :--------------------------------		|
| foo			| 1sec									|
| bar			| 0.5sec - 2sec	( random )				|


| robot cost											|
|:---------------------------------------------			|
| cost robot = 3 foobar + 6foo |



## Stacks
- JavaScript
- TypeScript
- React
- SCSS ( Sass )
- Jest
- testing library



Notes: 
/**
* on actionsStatus [ move, mine, standby ]
*  1. ACTION : update action ( will update animated class + make move the bot )
* 		- pass down props action to robot
*
*
*  2. COORDINATIONS: update robot coordinations based on mine target
* 		1. getTransformStyle() compute x and y translation style for robot1
* 		2. update props with coordination, : translateX, translateY style to inject
* 		- [ CHECK ] check visual movement on robot 1(tmp)
* 		-
*
*  3. TIMER TRACK WIP
*/