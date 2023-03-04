import { Line } from "./Line";
import { Point } from "./Point";

export class LineEquation {
	private _slope: number;
	private _yIntercept: number;

	public constructor(l: Line) {
		this.slope = l.slope;
		this.yIntercept = this.calculateYIntercept(l);
	}

	public get slope(): number {
		return this._slope;
	}

	public set slope(value: number) {
		this._slope = value;
	}

	public get yIntercept(): number {
		return this._yIntercept;
	}

	public set yIntercept(value: number) {
		this._yIntercept = value;
	}

	public calculateYIntercept(l: Line): number {
		const p = l.p1;
		return p.y - l.slope * p.x;
	}

	public toString(): string {
		return `LineEquation: y = ${this.slope}x + ${this.yIntercept}`;
	}

	public isPointOnLine(p: Point): boolean {
		return p.y == this.slope * p.x + this.yIntercept;
	}
}
