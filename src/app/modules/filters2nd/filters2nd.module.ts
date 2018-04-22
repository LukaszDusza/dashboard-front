import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Filters2ndComponent } from "./index";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { MainService } from "../../../main-service.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { Ng2GoogleChartsModule } from "ng2-google-charts";
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
    declarations: [
        Filters2ndComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
     //   Ng2GoogleChartsModule
     NgPipesModule
           
    ],
    exports: [
        Filters2ndComponent
    ],
    bootstrap: [Filters2ndComponent],
    
    providers: []
})

export class Filters2ndModule { }