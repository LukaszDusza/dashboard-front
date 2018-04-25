import { Component, OnInit, Input, SimpleChanges, OnChanges, Pipe, PipeTransform } from '@angular/core';
import { MainService } from '../../main-service.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartsComponent } from '../charts';


const now = new Date();


@Component({
  selector: 'app-filters2nd',
  templateUrl: './filters2nd.component.html',
  styleUrls: ['./filters2nd.component.css'],
  providers: []
})
export class Filters2ndComponent implements OnChanges,OnInit {
  form2nd: FormGroup;

  constructor(private mainService?: MainService) {
    mainService.link$.subscribe( link => {
      console.log(link);     
      });  
    }

  ngOnInit() { 
  this.createForm();  
  this.searchFilterService("sales", "key");
  this.searchFilterService("sales", "value");
  //  this.distributionChanelService();
  //  this.salesSectorService();
  //  this.salesSegmentService();
  //  this.salesDirectorService()
  //  this.cityService();
  //  this.cityOptions();
  //  this.managerService();
  //  this.agentService();
  }

  ngOnChanges(changes: SimpleChanges): void { }
  
searchRange:string = null;
disabledField:boolean = true;

@Input()
link: string;
//----------------------------- FORM --------------------

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
   filtersalesform: new FormControl()
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

removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}

  // ----------------------------------------------------------------------------
  distributionChanel = { key: [], value: [] };
  distributionChanelService() {
    this.distributionChanel.key.unshift("select distributionChanel"); 
  this.mainService.getRaportDasAll().subscribe( result => {
    (result.map(elem => {   
      this.distributionChanel.key.push(elem.kanalDystrybucji);
      this.distributionChanel.value.push(elem.kanalDystrybucji);    
    }))     
  }, err=> {}, ()=> {
    this.distributionChanel.key = this.removeDuplicateUsingSet(this.distributionChanel.key);
  //  console.log(this.distributionChanel.key);
    this.distributionChanel.value = this.removeDuplicateUsingSet(this.distributionChanel.value);
  //  console.log(this.distributionChanel.value);
  })
  } 

  
  currentdistributionChanel:  {key; value};
  distributionChanelOptions() {
    let distributionChanel = this.form2nd.get('distributionChanel').value;
    console.log(distributionChanel);
    for (let i = 0; i < this.distributionChanel.key.length; i++) {
      switch (distributionChanel) {
        case this.distributionChanel.key[i]:
        this.currentdistributionChanel.key = this.distributionChanel.key[i];
        this.currentdistributionChanel.value = this.distributionChanel.value[i];       
      }
    }
  //  console.log(this.currentdistributionChanel.key);
    return this.currentdistributionChanel;
    }
// -------------------------------------------------------------------------------------

salesSectorService() {
  this.salesSector.key.unshift("select salesSector"); 
this.mainService.getRaportDasAll().subscribe( result => {
  result.map( elem => {   
    this.salesSector.key.push(elem.nazwaSektoraSprzedazy);
    this.salesSector.value.push(elem.nazwaSektoraSprzedazy);
  })
}, err=> {}, ()=> {
  this.salesSector.key = this.removeDuplicateUsingSet(this.salesSector.key);
//  console.log(this.distributionChanel.key);
this.salesSector.value = this.removeDuplicateUsingSet(this.salesSector.value);
//  console.log(this.distributionChanel.value);
})
}
    salesSector = { key: [], value: [] };
currentsalesSector:  {key; value};
salesSectorOptions() {
  let salesSector = this.form2nd.get('salesSector').value;
 // console.log(salesSector);
  for (let i = 0; i < this.salesSector.key.length; i++) {
    switch (salesSector) {
      case this.salesSector.key[i]:
      this.currentsalesSector.key = this.salesSector.key[i];
      this.currentsalesSector.value = this.salesSector.value[i];
    }
  }
  console.log(this.currentsalesSector.key);
  return this.currentsalesSector;
  }

//----------------------------------------------------------------------------------

salesSegmentService() {
  this.salesSegment.key.unshift("select salesSegment"); 
this.mainService.getRaportDasAll().subscribe( result => {
  result.map( elem => {   
    this.salesSegment.key.push(elem.segmentSprzedazy);
    this.salesSegment.value.push(elem.segmentSprzedazy);
  })
}, err=> {}, ()=> {
  this.salesSegment.key = this.removeDuplicateUsingSet(this.salesSegment.key);
//  console.log(this.distributionChanel.key);
this.salesSegment.value = this.removeDuplicateUsingSet( this.salesSegment.value);
//  console.log(this.distributionChanel.value);
})
}
  salesSegment = { key: [], value: [] };
currentsalesSegment:  {key; value};
salesSegmentOptions() {
  let salesSegment = this.form2nd.get('salesSegment').value;
//  console.log(salesSegment);
  for (let i = 0; i < this.salesSegment.key.length; i++) {
    switch (salesSegment) {
      case this.salesSegment.key[i]:
      this.currentsalesSegment.key = this.salesSegment.key[i];
      this.currentsalesSegment.value = this.salesSegment.value[i];
    }
  }
 // console.log(this.currentsalesSegment.key);
  return this.currentsalesSegment;
  }

// ----------------------------------------------------------------------------

searchFilterService(raportType, property) {

  if(property == "key") {
    this.filterSales.key.unshift("wybierz opcje");
    this.mainService.getFilters(raportType, property).subscribe( result => {
      result.map( elem => {   
        this.filterSales.key.push(elem);
      })
    }, err=> {}, ()=> {
      console.log(this.filterSales.key);
    }
   )
  } else if(property == "value") {
    this.filterSales.value.unshift("wybierz opcje");
    this.mainService.getFilters(raportType, property).subscribe( result => {
      result.map( elem => {   
        this.filterSales.value.push(elem);
      })
    }, err=> {}, ()=> {
      console.log(this.filterSales.value);
    }
   )
  }
  
  }
  filterSales = { key: [], value: [] };
  currentfilterSalesKey;
  currentfilterSalesValue;
  filterSalesOptions() {
    let filter = this.form2nd.get('filtersalesform').value;        
    for (let i = 0; i < this.filterSales.value.length; i++) {
      switch (filter) {
        case this.filterSales.value[i]:
        console.log(this.filterSales.key[i]);        
        this.currentfilterSalesKey = this.filterSales.key[i];
        this.currentfilterSalesValue = this.filterSales.value[i];
        console.log(this.currentfilterSalesKey, this.currentfilterSalesValue);
      }
    }
  }

salesDirectorService() {
this.salesDirector.key.unshift("select salesDirector"); 
this.mainService.getRaportDasAll().subscribe( result => {
  //console.log(result);
  result.map( elem => {   
    this.salesDirector.key.push(elem.dyrektorSektora);
    this.salesDirector.value.push(elem.dyrektorSektora);
  })
}, err=> {}, ()=> {
  this.salesDirector.key = this.removeDuplicateUsingSet( this.salesDirector.key);
//  console.log(this.distributionChanel.key);
this.salesDirector.value = this.removeDuplicateUsingSet(  this.salesDirector.value);
//  console.log(this.distributionChanel.value);
})
}
  salesDirector = { key: [], value: [] };
currentsalesDirector:  {key; value};
salesDirectorOptions() {
  let salesDirector = this.form2nd.get('salesDirector').value;
//  console.log(salesDirector);
  for (let i = 0; i < this.salesDirector.key.length; i++) {
    switch (salesDirector) {
      case this.salesDirector.key[i]:
      this.currentsalesDirector.key = this.salesDirector.key[i];
      this.currentsalesDirector.value = this.salesDirector.value[i];
    }
  }
  console.log(this.currentsalesDirector.key);
  return this.currentsalesDirector;
  }

// --------------------------------------------------------------------------------

cityService() {
  this.city.key.unshift("select city"); 
this.mainService.getRaportDasAll().subscribe( result => {
  result.map( elem => {   
    this.city.key.push(elem.miasto);
    this.city.value.push(elem.miasto);
  })
}, err=> {}, ()=> {
  this.city.key = this.removeDuplicateUsingSet(this.city.key);
//  console.log(this.distributionChanel.key);
this.city.value = this.removeDuplicateUsingSet(this.city.value);
//  console.log(this.distributionChanel.value);
})
}
  city = { key: [], value: [] };
currentcity:  {key; value};
cityOptions() {
  let city = this.form2nd.get('city').value;
//  console.log(city);
  for (let i = 0; i < this.city.key.length; i++) {
    switch (city) {
      case this.city.key[i]:
      this.currentcity.key = this.city.key[i];
      this.currentcity.value = this.city.value[i];
    }
  }
//  console.log(this.currentcity.key);
  return this.currentcity;
  }

// --------------------------------------------------------------------------------

managerService() {
  this.manager.key.unshift("select manager"); 
this.mainService.getRaportDasAll().subscribe( result => {
  result.map( elem => {   
    this.manager.key.push(elem.mzaKierownikZespolu);
    this.manager.value.push(elem.mzaKierownikZespolu);
  })
}, err=> {}, ()=> {
  this.manager.key = this.removeDuplicateUsingSet( this.manager.key);
//  console.log(this.distributionChanel.key);
this.manager.value = this.removeDuplicateUsingSet( this.manager.value);
//  console.log(this.distributionChanel.value);
})
}
  manager = { key: [], value: [] };
currentmanager:  {key; value};
managerOptions() {
  let manager = this.form2nd.get('manager').value;
 // console.log(manager);
  for (let i = 0; i < this.manager.key.length; i++) {
    switch (manager) {
      case this.manager.key[i]:
      this.currentmanager.key = this.manager.key[i];
      this.currentmanager.value = this.manager.value[i];
    }
  }
  console.log(this.currentmanager.key);
  return this.currentmanager;
  }

  // --------------------------------------------------------------------------------

  agentService() {
  this.agent.key.unshift("select agent"); 
this.mainService.getRaportDasAll().subscribe( result => {
  result.map( elem => {   
    this.agent.key.push(elem.nazwaAgenta);
    this.agent.value.push(elem.nazwaAgenta);
  })
}, err=> {}, ()=> {
  this.agent.key = this.removeDuplicateUsingSet( this.agent.key);
//  console.log(this.distributionChanel.key);
this.agent.value = this.removeDuplicateUsingSet( this.agent.value);
//  console.log(this.distributionChanel.value);
})
}
  agent = { key: [], value: [] };
currentagent:  {key; value};
agentOptions() {
  let agent = this.form2nd.get('agent').value;
 // console.log(agent);
  for (let i = 0; i < this.agent.key.length; i++) {
    switch (agent) {
      case this.agent.key[i]:
      this.currentagent.key = this.agent.key[i];
      this.currentagent.value = this.agent.value[i];
    }
  }
  console.log(this.currentagent.key);
  return this.currentagent;
  }

//------------------------ END SELECTOR BUSINESS LINE ---------------------------

timerange = {
  title: [
    "today", 
    "last week", 
    "last month", 
    "last year"
  ],
  daterange: [
    "today", 
    "last_week", 
    "last_month", 
    "last_year"      
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
//console.log("selectToday")
}

selectLastMonth() {
this.calendarDp1 = {year: now.getFullYear(), month: now.getMonth(), day: now.getDay() +1};
this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() +1, day: now.getDay() +1};
//console.log("selectLastMonth")
}

selectLastYear() {
this.calendarDp1 = {year: now.getFullYear() -1, month: now.getMonth() +1, day: now.getDay() +1};
this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() +1, day: now.getDay() +1};
//console.log("selectLastYear")
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
  this.link = dateFrom + slash + dateTo + slash + agreementSelection + slash + this.currentfilterSalesKey;

  this.calendarDp1 = null;
  this.calendarDp2 = null;
console.log(link);
this.mainService.updateLinks(this.link);

} else {
dateFrom = this.calendarDp1.year + "-" + this.calendarDp1.month + "-" + this.calendarDp1.day;
dateTo = this.calendarDp2.year + "-" + this.calendarDp2.month + "-" + this.calendarDp2.day;    
this.link = dateFrom + slash + dateTo  + slash + agreementSelection + slash + this.currentfilterSalesKey;
console.log(link);
this.mainService.updateLinks(this.link);
}
}
// ----------- END DATEPICKER ------------------------------

onChangeAgreementOptions() {
this.disabledField = false;
// console.log("onChangeAgreementOptions()");
//this.searchFilterService("sales", "key");
//this.searchFilterService("sales", "value");
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
