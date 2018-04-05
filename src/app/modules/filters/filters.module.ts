import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FiltersComponent } from "./index";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { MainService } from "../../../main-service.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { Ng2GoogleChartsModule } from "ng2-google-charts";

@NgModule({
    declarations: [
        FiltersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
     //   Ng2GoogleChartsModule
           
    ],
    exports: [
        FiltersComponent
    ],
    bootstrap: [FiltersComponent],
    
    providers: []
})

export class FiltersModule { }