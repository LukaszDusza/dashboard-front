import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportsComponent } from './index';



const reportsRouting: Routes = [

    {
        path: '',
        component: ReportsComponent,
       
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(reportsRouting)],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }