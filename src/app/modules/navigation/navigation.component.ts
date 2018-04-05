import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsComponent } from '../charts';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  show: boolean = false; 

  constructor(private router: Router) {
    
   }
  ngOnInit() {
  }

  toggleColapse(){
    this.show = !this.show;
  }

}
