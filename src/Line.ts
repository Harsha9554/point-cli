import { Point } from "./Point";

export class Line {
	private _p1: Point;
	private _p2: Point;
	private _slope: number;

	public constructor(p1: Point, p2: Point) {
		this.p1 = p1;
		this.p2 = p2;
		this.slope = this.p1.getSlope(this.p2);
	}

	public get p1(): Point {
		return this._p1;
	}

	public set p1(value: Point) {
		this._p1 = value;
	}

	public get p2(): Point {
		return this._p2;
	}

	public set p2(value: Point) {
		this._p2 = value;
	}

	public get slope(): number {
		return this._slope;
	}

	public set slope(value: number) {
		this._slope = value;
	}

	public getPerpendicularSlope(): number {
		return -1 * (1 / this.slope);
	}

	public toString(): string {
		return `Line: (${this.p1.toString()}, ${this.p2.toString()})`;
	}
}
