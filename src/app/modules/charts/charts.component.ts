import { Component, OnInit, style } from '@angular/core';
import { MainService } from '../../main-service.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})


export class ChartsComponent implements OnInit {

constructor(private mainService?: MainService) { }

  ngOnInit() {
    this.createForm();
   }

   //----------------------------- FORM --------------------
   form: FormGroup;
   createForm() {
    this.form = new FormGroup({
      select: new FormControl(this.options.title[0]),   
    });   
  };
  //----------------------------- END FORM --------------------


  //--------------------------- FILTERS ----------------------------------
  //selectors: boolean = true;
 // error: boolean = true;
 // error_text = "";



model;
 options = {
  title: ["details per agreement", "all contract", "all sumary"],
  link: [
    "#", 
    this.mainService.swichHost + this.mainService.endpoint.allData, 
    this.mainService.swichHost + this.mainService.endpoint.byUserSum
  ]
};

 drawSelector(link: string) {
 // this.mainService.getSelectorService(this.startUplink).subscribe(result => {
  //  this.options.title = result.map(elem => elem.title);
  //  this.options.link = result.map(elem => elem.link);
 // }, error => {
 //   console.log("ERROR drawSelector(): " + error);
 //   this.error_text = "sorry, server not response. Please reload page";
 //   this.error = false;;
 //   this.spinner.hide();
 // }, () => {
 //   this.selectors = false;
 //   this.spinner.hide();
//  });

}
//--------------------------- END FILTERS ----------------------------------


onSubmit() {
  let select = this.form.get('select').value;
  for (let i = 0; i < this.options.link.length; i++) {
    switch (select) {
      case this.options.title[i]:
        let link = this.options.link[i];

        this.getChartTable(link,this.chartType.table);
        this.createForm();
        //if(link != this.link) {
          //this.mainService.updateSnapshotChartLink(link);
         // this.mainService.updateFlag(false);
         
       // } else {
          
          //this.mainService.updateMarketLink(link);
          //this.mainService.updateFlag(true);
      //  }
        console.log(link);
    }
  }
  
};


// ----------- DATEPICKER ------------------------------
calendarDp1: NgbDateStruct;
calendarDp2: NgbDateStruct;

selectToday() {
  this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  this.calendarDp1 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
//  console.log(this.calendarDp1.year + "," + this.calendarDp2.day);
}

selectLastMonth() {
  this.calendarDp1 = {year: now.getFullYear(), month: now.getMonth(), day: now.getDay() +1};
  this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDay() +1};
// console.log(this.calendarDp1.year + "," + this.calendarDp2.day);
}

selectLastYear() {
  this.calendarDp1 = {year: now.getFullYear() -1, month: now.getMonth() +1, day: now.getDay() +1};
  this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() +1, day: now.getDay() +1};
//  console.log(this.calendarDp1.year + "," + this.calendarDp2.day);
}

onSubmitCalendar() {
  let slash = "/", dateFrom, dateTo, link;
  
  if(this.calendarDp1 == null || this.calendarDp2 == null ) {
   // console.log("empty date!")
    dateFrom = "1900-01-01";
    dateTo = "9999-01-01";
    link = this.mainService.swichHost + this.mainService.endpoint.byDate + dateFrom + slash + dateTo + slash + this.model;
    this.getChartTable(link,this.chartType.table);
    console.log(link);
  } else {
    dateFrom = this.calendarDp1.year + "-" + this.calendarDp1.month + "-" + this.calendarDp1.day;
    dateTo = this.calendarDp2.year + "-" + this.calendarDp2.month + "-" + this.calendarDp2.day;    
    link = this.mainService.swichHost + this.mainService.endpoint.byDate + dateFrom + slash + dateTo + slash + this.model;   
  console.log(link);

  this.getChartTable(link,this.chartType.table);
  }
 }
 
// ----------- END DATEPICKER ------------------------------







// ----------------------- GOOGLE CHARTS -----------------------------------------------

chart;
chartTableSum;
chartType = {
  table: "Table",
  pie: "PieChart",
  column: "ColumnChart"
}
//   getChartTableAll(link) {
//     let array = [];
//     this.mainService.getRaportDas(link).subscribe(result => {
//       console.log(result);
//       result.map(elem => {       
// array.push([
// elem.id,
// elem.numerKalkulacji,
// elem.dataKalkulacji.substring(0,10),
// elem.numerUmowy,
// elem.dataZawarcia.substring(0,10),
// elem.wazneOd.substring(0,10),
// elem.wazneDo.substring(0,10),
// elem.nazwaProduktu,
// elem.status,
// elem.skladka,
// elem.platnosc,
// elem.nazwaAgenta,
// elem.nrWewnAgenta,
// elem.nrKnfAgenta,
// elem.uzytkownik,
// elem.nrKnfUzytkownika,
// elem.emailUzytkownika,
// elem.aktywny,
// elem.zablokowany,
// elem.poziom1,
// elem.kanalDystrybucji,
// elem.poziom1KNF,
// elem.poziom2,
// elem.nazwaSektoraSprzedazy,
// elem.poziom2KNF,
// elem.poziom3,
// elem.dyrektorSektora,
// elem.poziom3KNF,
// elem.poziom4,
// elem.segmentSprzedazy,
// elem.poziom4knf,
// elem.poziom5,
// elem.drEkspertSegmentu,
// elem.poziom5knf,
// elem.poziom6,
// elem.miasto,
// elem.poziom6knf,
// elem.poziom7,
// elem.mzaKierownikZespolu,
// elem.poziom7knf
// ])
//       });
//       array.unshift([
//         "id",
//         "numerKalkulacji",
//         "dataKalkulacji",
//         "numerUmowy",
//         "dataZawarcia",
//         "wazneOd",
//         "wazneDo",
//         "nazwaProduktu",
//         "status",
//         "skladka",
//         "platnosc",
//         "nazwaAgenta",
//         "nrWewnAgenta",
//         "nrKnfAgenta",
//         "uzytkownik",
//         "nrKnfUzytkownika",
//         "emailUzytkownika",
//         "aktywny",
//         "zablokowany",
//         "poziom1",
//         "kanalDystrybucji",
//         "poziom1KNF",
//         "poziom2",
//         "nazwaSektoraSprzedazy",
//         "poziom2KNF",
//         "poziom3",
//         "dyrektorSektora",
//         "poziom3KNF",
//         "poziom4",
//         "segmentSprzedazy",
//         "poziom4knf",
//         "poziom5",
//         "drEkspertSegmentu",
//         "poziom5knf",
//         "poziom6",
//         "miasto",
//         "poziom6knf",
//         "poziom7",
//         "mzaKierownikZespolu",
//         "poziom7knf"
//               ])

//     }, error => {
//       console.log("getChartTable:" + error);
//     }, () => {
//       this.setChartTableRaportDas(array);
//     });
//   }

  // setChartTableRaportDas(array){
  //   this.chartTable = {
  //     chartType: 'Table',
  //     dataTable: array,
  //     formatters: [
  //       {
  //         columns: [0,2],
  //         type: 'NumberFormat',
  //         options: {
  //           negativeColor: '#FF0000', negativeParens: true, groupingSymbol: '',decimalSymbol: '.', fractionDigits: 0,
  //         }
  //       },
  //       {
  //         columns: [3],
  //         type: 'NumberFormat',
  //         options: {
  //           negativeColor: '#FF0000', negativeParens: true, groupingSymbol: '', fractionDigits: 0
  //         }
  //       },
  //       {
  //         columns: [8],
  //         type: 'NumberFormat',
  //         options: {
  //           negativeColor: '#FF0000', negativeParens: true, groupingSymbol: '', fractionDigits: 2
  //         }
  //       },
  //       {
  //         columns: [6],
  //         type: 'NumberFormat',
  //         options: {
  //           negativeColor: '#FF0000', negativeParens: true, groupingSymbol: '', fractionDigits: 2
  //         }
  //       }       
  //     ],
  //     options: {      
  //       width: '100%',
  //       showRowNumber: false,
  //       allowHtml: true,       
  //       page: 'event', 
  //       pageSize: 8, 
  //       pagingButtons:'30',        
  //       cssClassNames: {
  //         headerCell: 'header',
  //         tableRow: 'global',
  //         oddTableRow:'global',
  //         headerRow:'headerrow'
  //       }
  //     }
  //   };
  // }

  total:number;
getSumFromTable(array) {
  this.total = 0;
  for(let i = 1; i <array.length; i++ ) {
    this.total = this.total + array[i][12];
  //  console.log(array[i][12]);    
  }
  let arraySum = [];
  arraySum.push([this.total]);
  arraySum.unshift(["SUMA"]);
  console.log(this.total);
  console.log(arraySum);
  this.drawChartTableSum(arraySum);
}

  getChartTable(link,type:string) {
    let array = [];
    this.mainService.getRaportDas(link).subscribe(result => {
    //  console.log(result);
      result.map(elem => {  
               
array.push([ 
  elem.kanalDystrybucji,
  elem.nazwaSektoraSprzedazy,
  elem.dyrektorSektora,
  elem.segmentSprzedazy,
  elem.drEkspertSegmentu,
  elem.miasto,
  elem.mzaKierownikZespolu,
  elem.nazwaAgenta,
  elem.nrWewnAgenta,
  elem.nrKnfAgenta,
  elem.uzytkownik,
  elem.nrKnfUzytkownika,
  elem.skladka,
  elem.numberOfContract,
  
// elem.id,
//elem.numerKalkulacji,
//elem.dataKalkulacji.substring(0,10),
//elem.numerUmowy,
//elem.dataZawarcia.substring(0,10),
//elem.wazneOd.substring(0,10),
//elem.wazneDo.substring(0,10),
//elem.nazwaProduktu,
//elem.status,
//elem.platnosc,
//elem.emailUzytkownika,
//elem.aktywny,
//elem.zablokowany,
//elem.poziom1,
//elem.poziom1KNF,
//elem.poziom2,
//elem.poziom2KNF,
//elem.poziom3,
//elem.poziom3KNF,
//elem.poziom4,
//elem.poziom4knf,
//elem.poziom5,
//elem.poziom5knf,
//elem.poziom6,
//elem.poziom6knf,
//lem.poziom7,
//elem.poziom7knf
])
      });
      array.unshift([
         "Kanał dystrybucji",
         "Nazwa sektora sprzedazy",
         "Dyrektor sektora",
         "Segment sprzedazy",
         "Dyrektor/Ekspert segmentu",
         "Miasto",
         "MZA Kierownik Zespolu",
         "Nazwa agenta",
         "Numer wewn. Agenta",
         "Numer KNF Agenta",
         "Użytkownik",
         "Numer KNF użytkownika",
         "Składka",
         "Liczba umów"
        // "id",
       // "numerKalkulacji",
      //  "dataKalkulacji",
      //  "numerUmowy",
      //  "dataZawarcia",
      //  "wazneOd",
      //  "wazneDo",
      //  "nazwaProduktu",
      //  "status",        
      //  "platnosc",                                  
       // "emailUzytkownika",
       // "aktywny",
       // "zablokowany",
       // "poziom1",     
       // "poziom1KNF",
       // "poziom2",      
       // "poziom2KNF",
       // "poziom3",       
        //"poziom3KNF",
        //"poziom4",       
      // "poziom4knf",
       // "poziom5",      
       // "poziom5knf",
       // "poziom6",        
      //  "poziom6knf",
       // "poziom7",       
      //  "poziom7knf"
              ])

    }, error => {
     // console.log("getChartTable:" + error);
    }, () => {
      console.log(array);
      this.drawChartTable(array);
     this.getSumFromTable(array);
    });
  }

  drawChartTable(array){
    this.chart = {
      chartType: "Table",
      dataTable: array,
      formatters: [
        // {
        //   columns: [0,2],
        //   type: 'NumberFormat',
        //   options: {
        //     negativeColor: '#FF0000', negativeParens: true, groupingSymbol: '',decimalSymbol: '.', fractionDigits: 0,
        //   }
        // },
        // {
        //   columns: [3],
        //   type: 'NumberFormat',
        //   options: {
        //     negativeColor: '#FF0000', negativeParens: true, groupingSymbol: '', fractionDigits: 0
        //   }
        // },
        // {
        //   columns: [8],
        //   type: 'NumberFormat',
        //   options: {
        //     negativeColor: '#FF0000', negativeParens: true, groupingSymbol: '', fractionDigits: 2
        //   }
        // },
        // {
        //   columns: [6],
        //   type: 'NumberFormat',
        //   options: {
        //     negativeColor: '#FF0000', negativeParens: true, groupingSymbol: '', fractionDigits: 2
        //   }
        // }
        {
          columns: [12],
          type: 'NumberFormat',
          options: {
            fractionDigits: 2, decimalSymbol: '.', groupingSymbol: ' '           
          }
        }       
      ],
      options: {      
        width: '100%',
        height: '100%',
        showRowNumber: true,
        allowHtml: true,
       // 'title': "example", 
        page: 'event', 
        pageSize: 12, 
        pagingButtons:'30',        
        cssClassNames: {
          headerCell: 'header',
          tableRow: 'global',
          oddTableRow:'global',
          headerRow:'headerrow'
        }
      }
    };
  }

  drawChartTableSum(arraySum){
    this.chartTableSum = {
      chartType: "Table",
      dataTable: arraySum,
      formatters: [
        {
          columns: [0],
          type: 'NumberFormat',
          options: {
            fractionDigits: 2, decimalSymbol: '.', groupingSymbol: ' '           
          }
        }       
      ],
      options: {      
        width: '100%',
        height: '100%',
        showRowNumber: false,
        allowHtml: true,
       // 'title': "example", 
       // page: 'event', 
      //  pageSize: 3, 
       // pagingButtons:'30',        
        cssClassNames: {
          headerCell: 'headerSum',
          tableRow: 'cellSum',
          oddTableRow:'cellSum',
          headerRow:'headerrowSum'
        }
      }
    };
  } 
// ----------------------- END GOOGLE CHARTS -----------------------------------------------







}