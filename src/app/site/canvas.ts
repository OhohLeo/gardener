import { Position } from '../../lib/2d/position'
import { PositionAndSize } from '../../lib/2d/position_and_size'

export class Canvas  {
    constructor(public ctx: CanvasRenderingContext2D) {}
    public width: number
    public height: number

    resize(offsetWidth: number, offsetHeight: number): [number, number] {
	this.width =  window.innerWidth - offsetWidth
	this.height = window.innerHeight - offsetHeight

	this.ctx.canvas.width = this.width
	this.ctx.canvas.height = this.height

	return [this.width, this.height]
    }

    clear(): void {
	 this.ctx.clearRect(0, 0, this.width, this.height)
    }

    drawImage(image: any): PositionAndSize {
	let width: number
	let height: number
	let x: number = 0
	let y: number = 0

	// Scale/dowscale image preserving image ratio
	let widthWithImageRatio = (this.height * image.width) / image.height
	let heightWithImageRatio = (this.width * image.height) / image.width

	if (widthWithImageRatio > this.width) {
	    width = this.width
	    height = heightWithImageRatio
	} else {
	    width = widthWithImageRatio
	    height = this.height
	}

	// Center image
	if (width < this.width) {
	    x = (this.width - width) / 2
 	}

	if (height < this.height) {
	    y = (this.height - height) / 2
	}

	this.ctx.drawImage(image, x, y, width, height)

	return new PositionAndSize(x, y, width, height)
    }
}
