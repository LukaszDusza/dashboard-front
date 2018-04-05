import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent} from './navigation.component';
import { HomeRoutingModule } from "../home/home.routing.module";
import { SnapshotRoutingModule } from "../snapshot/snapshot.routing.module";
import { ReportsModule } from "../reports/reports.module";
//import { ChartsModule } from "../charts/charts.module";
//-- BOOTSTRAP -- 


@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [       
        CommonModule,
        HomeRoutingModule,
        SnapshotRoutingModule,
        ReportsModule,
      //  ChartsModule
     
    ],
    exports: [
        NavigationComponent
    ],
    bootstrap: [NavigationComponent]

})

export class NavigationModule { }