import { NgModule } from "@angular/core";
import { HomeComponent } from "./index";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing.module";






@NgModule({
    declarations: [
       HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        
    ],
    exports: [
        HomeComponent,       
    ],
    providers: [
       
    ]
})

export class HomeModule { }