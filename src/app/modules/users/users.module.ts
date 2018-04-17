import { NgModule } from "@angular/core";
import { UsersComponent } from "./index";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users.routing.module";
import { PiechartModule } from "../google-charts/piechart/piechart.module";



@NgModule({
    declarations: [
       UsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        PiechartModule       
    ],
    exports: [
        UsersComponent,       
    ],
    providers: [
       
    ]
})

export class UsersModule { }