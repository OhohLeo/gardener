import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'create-plant',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreatePlantComponent implements OnInit {
    public name : string;
    public wateringDate: Date;

    @Output() enableSave = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {
    }

    validate(): void {
	if (this.name == "") {
	    this.enableSave.emit(false)
	    return
	}
	console.log("Enable!!")
	this.enableSave.emit(true)
    }
}
