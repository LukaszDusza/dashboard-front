import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UsersComponent } from '../users/index';

const usersRouting: Routes = [

    {
        path: 'users',
        component: UsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(usersRouting)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }