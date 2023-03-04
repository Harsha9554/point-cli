export class Point {
	private _x: number;
	private _y: number;

	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	public get y(): number {
		return this._y;
	}

	public set y(value: number) {
		this._y = value;
	}

	public get x(): number {
		return this._x;
	}

	public set x(value: number) {
		this._x = value;
	}

	public getDistance(p?: Point): number {
		if (!p) {
			return this.getDistance(new Point(0, 0));
		}
		return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
	}

	public getSlope(p?: Point): number {
		if (!p) {
			return this.getSlope(new Point(0, 0));
		}
		return (this.y - p.y) / (this.x - p.x);
	}

	public toString(): string {
		return `Point: (${this.x}, ${this.y})`;
	}
}
