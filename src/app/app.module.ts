import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AngularMaterialModule } from './angular-material.module'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CreateDialogComponent } from './create-dialog/create-dialog.component'
import { SiteComponent } from './site/site.component'
import { CreatePlantComponent } from './plant/create/create.component'
import { PlantsComponent } from './plants/plants.component'

@NgModule({
    declarations: [
	AppComponent,
	CreateDialogComponent,
	SiteComponent,
	CreatePlantComponent,
	PlantsComponent
    ],
    imports: [
	BrowserModule,
	AppRoutingModule,
	FormsModule,
	AngularMaterialModule,
	BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
