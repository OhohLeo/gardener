import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-create-plant',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreatePlantComponent {
    public name : string;
    public wateringDate: Date;

    @Output() enableSave = new EventEmitter<boolean>();

    constructor() { }

    validate(): void {
	if (this.name == "") {
	    this.enableSave.emit(false)
	    return
	}
	console.log("Enable!!")
	this.enableSave.emit(true)
    }
}
