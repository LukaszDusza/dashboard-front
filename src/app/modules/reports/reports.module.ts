import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReportsComponent} from './reports.component';
import { ReportsRoutingModule } from "../reports/reports.routing.module";
import { ChartsModule } from "../charts/charts.module";
import { FiltersModule } from "../filters/filters.module";


@NgModule({
    declarations: [
        ReportsComponent
    ],
    imports: [       
        CommonModule,             
        ReportsRoutingModule,
        ChartsModule,
        FiltersModule 
    ],
    exports: [
        ReportsComponent
    ],
    bootstrap: [ReportsComponent],
    providers: []

})

export class ReportsModule { }