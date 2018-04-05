import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChartsComponent } from './index';


const chartsRouting: Routes = [

    {
        path: 'charts',
        component: ChartsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(chartsRouting)],
    exports: [RouterModule]
})
export class ChartsRoutingModule { }