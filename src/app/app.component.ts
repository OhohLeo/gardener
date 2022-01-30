import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public dialog: MatDialog) {}

    openCreateDialog(): void {
	const dialogRef = this.dialog.open(CreateDialogComponent);
	dialogRef.afterClosed().subscribe(result => {
	    console.log(`Dialog result: ${result}`);
	});
    }
}
