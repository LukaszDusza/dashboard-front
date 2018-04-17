import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SalesComponent } from '../sales/index';

const salesRouting: Routes = [

    {
        path: 'sales',
        component: SalesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(salesRouting)],
    exports: [RouterModule]
})
export class SalesRoutingModule { }