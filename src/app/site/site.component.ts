import { HostListener, Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core'
import { MatToolbar } from '@angular/material/toolbar'
import { Plant } from '../plant/plant'
import { Canvas } from './canvas'

@Component({
    selector: 'site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
    @Input() matToolbar: MatToolbar
    public canvasWidth: number
    public canvasHeight: number

    @ViewChild('canvas', { static: true })
    private canvasElement: ElementRef<HTMLCanvasElement>
    private canvas: Canvas

    private image: any

    public plants: Plant[] = [
	new Plant("test")
    ]

    constructor() {}

    ngOnInit(): void {
	this.canvas = new Canvas(this.canvasElement.nativeElement.getContext('2d'))
	this.resizeCanvas()

	let image = new Image()
	image.src = "../../../assets/img/logia1.png"
	image.onload = (event: any) => {
	    this.image = event.currentTarget
	    this.redrawCanvas()
	}
    }

    @HostListener('window:resize') onResize(): void {
    	this.resizeCanvas()
    	this.redrawCanvas()
    }

    resizeCanvas(): void {
	// Reduce mat-toolbar height to fullfill whole window
	let nativeElement = this.matToolbar._elementRef.nativeElement
	let canvasSize = this.canvas.resize(0, nativeElement.offsetHeight)

	this.canvasWidth = canvasSize[0]
	this.canvasHeight = canvasSize[1]
    }

    redrawCanvas() {
	if (this.image == null) {
	    return
	}

	let imgPositionAndSize = this.canvas.drawImage(this.image)

	for (let plant of this.plants) {
	    plant.drawPlant(this.canvas, imgPositionAndSize)
	    plant.drawMovingState(this.canvas, imgPositionAndSize)
	}
    }
}
