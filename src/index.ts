import { Line } from "./Line";
import { LineEquation } from "./LineEquation";
import { Point } from "./Point";
const main = () => {
	const p1 = new Point(1, 2);
	const p2 = new Point(-1, 0);
	// console.log(
	// 	`distance from origin to ${p1.toString()} is ${p2.getDistance()}`
	// );
	// console.log(
	// 	`distance from ${p1.toString()} to ${p2.toString()} is ${p1.getDistance(
	// 		p2
	// 	)}`
	// );
	// console.log(
	// 	`slope of ${p1.toString()} and ${p2.toString()} is ${p1.getSlope(p2)}`
	// );
	const l1 = new Line(p1, p2);
	const le = new LineEquation(l1);
	console.log(l1.toString());
	console.log(le.toString());
	const origin = new Point(0, 0);
	const p3 = new Point(5, 6);
	console.log(le.isPointOnLine(origin));
	console.log(le.isPointOnLine(p3));
};

main();
