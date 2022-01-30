import { Position } from '../../lib/2d/position'
import { PositionAndSize } from '../../lib/2d/position_and_size'
import { Canvas } from '../site/canvas'

export class Plant {
    private wateringDate: Date
    private relativePosition: [number, number] = [0.5, 0.5]
    private position: Position

    constructor(private name : string) {}

    getPosition(init: PositionAndSize): Position {
	let plantWidth = this.relativePosition[0]
	let plantHeight = this.relativePosition[1]

	return new Position(
	    init.x + init.width * plantWidth,
	    init.y + init.height * plantHeight,
	)
    }

    drawPlant(canvas: Canvas, init: PositionAndSize): void {
	this.position = this.getPosition(init)
	let posX = this.position.x
	let posY = this.position.y

	let ctx = canvas.ctx
	ctx.fillStyle = "green"
	ctx.beginPath()
	ctx.arc(posX, posY, 5, 0, 2 * Math.PI)
	ctx.fill()

	ctx.fillStyle = "black"
	ctx.arc(posX, posY, 50, 0, 2 * Math.PI)
	ctx.stroke()
    }

    drawMovingState(canvas: Canvas, init: PositionAndSize): void {
	this.position = this.getPosition(init)
	let posX = this.position.x
	let posY = this.position.y

	let ctx = canvas.ctx
    	ctx.fillStyle = "green"

    	posY -= 80
    	ctx.beginPath();
    	ctx.moveTo(posX,  posY);
    	ctx.lineTo(posX - 25, posY + 25);
    	ctx.lineTo(posX + 25, posY + 25);
    	ctx.fill();

    	posX = this.position.x
    	posY = this.position.y

    	posY += 80
    	ctx.beginPath();
    	ctx.moveTo(posX,  posY);
    	ctx.lineTo(posX - 25, posY - 25);
    	ctx.lineTo(posX + 25, posY - 25);
    	ctx.fill();

    	posX = this.position.x
    	posY = this.position.y

    	posX += 80
    	ctx.beginPath();
    	ctx.moveTo(posX,  posY);
    	ctx.lineTo(posX - 25, posY - 25);
    	ctx.lineTo(posX - 25, posY + 25);
    	ctx.fill();

    	posX = this.position.x
    	posY = this.position.y

    	posX -= 80
    	ctx.beginPath();
    	ctx.moveTo(posX,  posY);
    	ctx.lineTo(posX + 25, posY - 25);
    	ctx.lineTo(posX + 25, posY + 25);
    	ctx.fill();
    }
}
