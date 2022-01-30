import { Position } from './position'
import { Size } from './size'

export class PositionAndSize  {
    constructor(
	public x: number,
	public y: number,
	public width: number,
	public height: number,
    ) {}

    position() : Position {
	return new Position(this.x, this.y)
    }

    size() : Size {
	return new Size(this.width, this.height)
    }
}
