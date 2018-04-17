import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MainService } from '../../main-service.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-filters2nd',
  templateUrl: './filters2nd.component.html',
  styleUrls: ['./filters2nd.component.css']
})
export class Filters2ndComponent implements OnChanges,OnInit {

  constructor(private mainService?: MainService) {  }

  ngOnInit() { 
    this.createForm();  
//test
this.businessLineService()
    
  }


  ngOnChanges(changes: SimpleChanges): void { }
  
searchRange:string = null;
disabledField:boolean = true;

@Input()
link: string;
//----------------------------- FORM --------------------
form2nd: FormGroup;
createForm() {
  //first line
 this.form2nd = new FormGroup({
   timerange: new FormControl(),  
   agreement: new FormControl(),

   //2nd line
   businessLine: new FormControl(),
   productLine: new FormControl(), 
   product: new FormControl(),
   personType: new FormControl(),
   paymentMode: new FormControl(),
   paymentMethod: new FormControl(),

   //3rd line
   distributionChanel: new FormControl(),
   salesSector: new FormControl(),
   salesSegment: new FormControl(),
   salesDirector: new FormControl(),
   city: new FormControl(),
   manager: new FormControl(),
   agent: new FormControl(),
 });   
};
//----------------------------- END FORM --------------------

//------------------------ SELECTOR BUSINESS LINE ---------------------------
businessLineService() {
  this.businessLine.key.unshift("select business line"); 
this.mainService.getRaportDasAll().subscribe( result => {
  result.map( elem => {   
    this.businessLine.key.push(elem.nazwaSektoraSprzedazy);
    this.businessLine.value.push(elem.nazwaSektoraSprzedazy);
  })
})
}
businessLine = { key: [], value: [] };
currentbusinessLine:  {key; value};
businessLineOptions() {
  let businessLine = this.form2nd.get('bussinessLine').value;
  console.log(businessLine);
  for (let i = 0; i < this.businessLine.key.length; i++) {
    switch (businessLine) {
      case this.businessLine.key[i]:
      this.currentbusinessLine.key = this.businessLine.key[i];
      this.currentbusinessLine.value = this.businessLine.value[i];
    }
  }
  console.log(this.currentbusinessLine.key);
  return this.currentbusinessLine;
  }
//------------------------ END SELECTOR BUSINESS LINE ---------------------------

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
 // this.link = this.mainService.swichHost + this.mainService.endpoint.byDate + dateFrom + slash + dateTo + slash + agreementSelection;
  this.link = dateFrom + slash + dateTo + slash + agreementSelection;

  this.calendarDp1 = null;
  this.calendarDp2 = null;
console.log(link);
this.mainService.updateLinks(this.link);

} else {
dateFrom = this.calendarDp1.year + "-" + this.calendarDp1.month + "-" + this.calendarDp1.day;
dateTo = this.calendarDp2.year + "-" + this.calendarDp2.month + "-" + this.calendarDp2.day;    
this.link = dateFrom + slash + dateTo + slash + agreementSelection;
console.log(link);
this.mainService.updateLinks(this.link);
}
}
// ----------- END DATEPICKER ------------------------------

onChangeAgreementOptions() {
this.disabledField = false;
console.log("onChangeAgreementOptions()");
}

agreementOptions() {
let agreementSelection;
let agreement = this.form2nd.get('agreement').value;
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
let time = this.form2nd.get('timerange').value;
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
