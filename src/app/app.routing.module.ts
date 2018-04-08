import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './modules/home';
import { SalesComponent } from './modules/sales';
import { UsersComponent } from './modules/users';
import { SnapshotComponent } from './modules/snapshot';
import {ReportsComponent} from './modules/reports';

const appRoutes: Routes = [ 
  {path: '', redirectTo: '/snapshot', pathMatch: 'full'},
{ path: 'snapshot', loadChildren: './modules/snapshot/snapshot.module#SnapshotModule'},
{ path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
{ path: 'sales', loadChildren: './modules/sales/sales.module#SalesModule'},
{ path: 'users', loadChildren: './modules/users/users.module#UsersModule'},
 //,canLoad: [AuthGuardService]
{ path: 'reports', loadChildren: './modules/reports/reports.module#ReportsModule'},
// { path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
{path: '**', component: SnapshotComponent }

];

@NgModule({
  imports: [
      
      RouterModule.forRoot(appRoutes)
    ],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule {

}