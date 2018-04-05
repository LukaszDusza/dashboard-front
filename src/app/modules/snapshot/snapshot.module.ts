import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SnapshotComponent} from './snapshot.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
//-- BOOTSTRAP -- 



 import { SnapshotRoutingModule } from "../snapshot/snapshot.routing.module";
import { FiltersModule } from "../filters/filters.module";


@NgModule({
    declarations: [
        SnapshotComponent
    ],
    imports: [       
        CommonModule,             
        SnapshotRoutingModule,
        Ng2GoogleChartsModule,
        FiltersModule 
    ],
    exports: [
        SnapshotComponent
    ],
    bootstrap: [SnapshotComponent],
    providers: []

})

export class SnapshotModule { }