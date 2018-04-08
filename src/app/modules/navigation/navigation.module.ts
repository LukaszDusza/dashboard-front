import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent} from './navigation.component';
import { HomeRoutingModule } from "../home/home.routing.module";
import { SnapshotRoutingModule } from "../snapshot/snapshot.routing.module";
import { ReportsModule } from "../reports/reports.module";
import { SalesModule } from "../sales/sales.module";
import { UsersModule } from "../users/users.module";
//import { ChartsModule } from "../charts/charts.module";
//-- BOOTSTRAP -- 


@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [       
        CommonModule,
        HomeRoutingModule,
        SalesModule,
        UsersModule,
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