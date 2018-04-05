import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsComponent } from "./index";
import { ChartsRoutingModule } from "./charts.routing.module";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from '@angular/forms';
//import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
//import { NgDatepickerModule } from 'ng2-datepicker';


@NgModule({
    declarations: [
        ChartsComponent
    ],
    imports: [
        CommonModule,
        ChartsRoutingModule,
        Ng2GoogleChartsModule,
        NgbModule,
        FormsModule, 
        ReactiveFormsModule,      
      //  NgbDatepickerModule
      //  OwlDateTimeModule,
      //  OwlNativeDateTimeModule,
      //NgDatepickerModule                  
    ],
    exports: [
        ChartsComponent
    ],
    bootstrap: [
        ChartsComponent
    ],
    providers: [ ]

})

export class ChartsModule { }