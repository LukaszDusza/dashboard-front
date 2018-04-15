import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// --- BOOTSTRAP ---
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// --------ANGULAR MATERIAL-----------------
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatMenuModule} from '@angular/material/menu';
//import {MatButtonModule} from '@angular/material/button';
//import {MatIconModule} from '@angular/material/icon';
//import {MatDatepickerModule} from '@angular/material/datepicker';
//import { DatePickerModule} from 'angular-material-datepicker';
//import { MaterialModule } from '@angular/material';
// -------END ANGULAR MATERIAL--------------

// --------------- DRAWING ------------------------------
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NavigationModule } from './modules/navigation/navigation.module';
import { SnapshotModule } from './modules/snapshot/snapshot.module';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './modules/home/home.module';
import { ReportsModule } from './modules/reports/reports.module';
import { MainService } from './main-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from './modules/charts/charts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesModule } from './modules/sales/sales.module';
import { UsersModule } from './modules/users/users.module';


@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    //-- BOOTSTRAP --
    NgbModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    //--ANGULAR MATERIAL--   
    BrowserAnimationsModule,
   // DatePickerModule,
   // MatCheckboxModule,
   // MatMenuModule,
   // MatButtonModule,
   // MatIconModule,
   // MatDatepickerModule,  
    //--END ANGULAR MATERIAL--
    
    // -- PAGE MODULES --
    NavigationModule,
    SnapshotModule,
    HomeModule,
    SalesModule,
    UsersModule,
    ReportsModule,
    ChartsModule,
    HttpClientModule,
  //-- ROUTERS --
  AppRoutingModule,
  // -- HTTP --
  
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
