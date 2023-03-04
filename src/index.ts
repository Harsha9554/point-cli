import { Line } from "./Line";
import { Point } from "./Point";
const main = () => {
	const p1 = new Point(1, 1);
	const p2 = new Point(2, 2);
	const l = new Line(p1, p2);
	console.log(l.toString());
};

main();
