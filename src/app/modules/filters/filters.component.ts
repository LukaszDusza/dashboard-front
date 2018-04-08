import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MainService } from '../../main-service.service';

const now = new Date();

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnChanges, OnInit {

  constructor(private mainService?: MainService) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,"LINK CHANGE!", this.link);
    
  }

@Input()
link: string;

   //----------------------------- FORM --------------------
   form: FormGroup;
   createForm() {
    this.form = new FormGroup({
      timerange: new FormControl(),  
      agreement: new FormControl(), 
    });   
  };
  //----------------------------- END FORM --------------------

  
  timerange = {
    title: ["today", "last week", "last month", "last year"],
    daterange: [
      "today", "last_week", "last_month", "last_year"      
    ]
  };

  agreement = {
    title: ["umowa zatwierdzona", "umowa anulowana"],
    status: ["umowa", "Umowa anulowana"]
 };

  // ----------- DATEPICKER ------------------------------
calendarDp1: NgbDateStruct;
calendarDp2: NgbDateStruct;

selectToday() {
  this.calendarDp1 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  console.log("selectToday")
}

// jeszcze nie obsluzone
// selectLastWeek() {
//   this.calendarDp1 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
//   this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
//   console.log("selectLastWeek")
// }

selectLastMonth() {
  this.calendarDp1 = {year: now.getFullYear(), month: now.getMonth(), day: now.getDay() +1};
  this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() +1, day: now.getDay() +1};
  console.log("selectLastMonth")
}

selectLastYear() {
  this.calendarDp1 = {year: now.getFullYear() -1, month: now.getMonth() +1, day: now.getDay() +1};
  this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() +1, day: now.getDay() +1};
  console.log("selectLastYear")
}


onSubmitCalendar() {
  let slash = "/", dateFrom, dateTo, link;
let agreementSelection = this.agreementOptions();
let timeSelection = this.timerangeOptions();

  if(this.calendarDp1 == null && this.calendarDp2 == null ) {

    switch(timeSelection) {
      case this.timerange.daterange[0]: 
      this.selectToday();
      break;    
      case this.timerange.daterange[1]: 
     // this.selectLastWeek();     
      break;
      case this.timerange.daterange[2]: 
      this.selectLastMonth();
      break;
      case this.timerange.daterange[3]: 
      this.selectLastYear();
      break;
    }
    dateFrom = this.calendarDp1.year + "-" + this.calendarDp1.month + "-" + this.calendarDp1.day;
    dateTo = this.calendarDp2.year + "-" + this.calendarDp2.month + "-" + this.calendarDp2.day;
    this.link = this.mainService.swichHost + this.mainService.endpoint.byDate + dateFrom + slash + dateTo + slash + agreementSelection;

    this.calendarDp1 = null;
    this.calendarDp2 = null;
  //console.log(link);
  this.mainService.updateLink(this.link);

 } else {
  dateFrom = this.calendarDp1.year + "-" + this.calendarDp1.month + "-" + this.calendarDp1.day;
  dateTo = this.calendarDp2.year + "-" + this.calendarDp2.month + "-" + this.calendarDp2.day;    
  this.link = this.mainService.swichHost + this.mainService.endpoint.byDate + dateFrom + slash + dateTo + slash + agreementSelection;
  //console.log(link);
  this.mainService.updateLink(this.link);
 }
}
// ----------- END DATEPICKER ------------------------------

agreementOptions() {
  let agreementSelection;
  let agreement = this.form.get('agreement').value;
  console.log(agreement);
  for (let i = 0; i < this.agreement.title.length; i++) {
    switch (agreement) {
      case this.agreement.title[i]:
      agreementSelection = this.agreement.status[i];
  }
}
return agreementSelection;
}

timerangeOptions() {
  let timeSelection;
  let time = this.form.get('timerange').value;
  console.log(time);
  for (let i = 0; i < this.timerange.title.length; i++) {
    switch (time) {
      case this.timerange.title[i]:
       timeSelection = this.timerange.daterange[i];
    }
  }
  return timeSelection;
}

}
