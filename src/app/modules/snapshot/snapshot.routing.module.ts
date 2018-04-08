import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SnapshotComponent } from './index';



const snapshotRouting: Routes = [

    {
        path: 'snapshot',
        component: SnapshotComponent,
       
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(snapshotRouting)],
    exports: [RouterModule]
})
export class SnapshotRoutingModule { }