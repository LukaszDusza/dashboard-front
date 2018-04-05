import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/index';

const homeRouting: Routes = [

    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRouting)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }