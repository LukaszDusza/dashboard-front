import { Component, OnInit } from '@angular/core';
import { MainService } from './main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
//  template: string ='<img src="https://loading.io/spinners/comets/lg.comet-spinner.gif"/>';

constructor(private mainService?: MainService) {


}

ngOnInit() {  
 
}

}
