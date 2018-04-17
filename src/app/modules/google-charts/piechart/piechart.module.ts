import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PiechartComponent } from "./index";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@NgModule({
    declarations: [
        PiechartComponent
    ],
    imports: [
        CommonModule,
        Ng2GoogleChartsModule,
        NgbModule,
        FormsModule, 
        ReactiveFormsModule,                 
    ],
    exports: [
        PiechartComponent
    ],
    bootstrap: [
        PiechartComponent
    ],
    providers: [ ]

})

export class PiechartModule { }