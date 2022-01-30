import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-create-dialog',
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {
    public itemToCreate: string;
    public enableSave: boolean = false;

    constructor() { }

    ngOnInit(): void {
	this.itemToCreate = "plant";
    }

    onItemToCreate(itemToCreate: string) {
	this.itemToCreate = itemToCreate;
    }

    onEnableSave(save: any) {
	this.enableSave = save;
    }
}
