import { NgModule } from "@angular/core";
import { SalesComponent } from "./index";
import { CommonModule } from "@angular/common";
import { SalesRoutingModule } from "./sales.routing.module";
import { Filters2ndModule } from "../filters2nd/filters2nd.module";
import { ChartsModule } from "../charts/charts.module";






@NgModule({
    declarations: [
       SalesComponent
    ],
    imports: [
        CommonModule,
        SalesRoutingModule,
        Filters2ndModule,
        ChartsModule
        
    ],
    exports: [
        SalesComponent,       
    ],
    providers: [
       
    ]
})

export class SalesModule { }