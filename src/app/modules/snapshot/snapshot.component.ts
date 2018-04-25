import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { MainService } from '../../main-service.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { FiltersComponent } from '../filters';
import { GoogleChartComponent } from 'ng2-google-charts';
import { PiechartComponent } from '../google-charts/piechart';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { error } from 'protractor';

const now = new Date();

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {
  showLoader : boolean;

  constructor(private mainService?: MainService, private spinnerService?: Ng4LoadingSpinnerService) {


//this.startingCharts();

mainService.link$.subscribe( link => {
//  this.getSnapshotCharts(link);
  //charts
this.getSnapshotCharts(link);
this.getBarChartAgreementSum(link);
this.getBarChartSalesSum(link);
this.getPieChart9(link,"Nazwa Produktu", "Składka");
this.getPieChart10(link, "Rodzaj platności", "Składka");
this.getPieChart4(link, "Nazwa Segmentu", "skladka");
this.getPieChart5(link, "Nazwa Segmentu", "skladka");
this.chartService (
  "PieChart",
  "platnosc",
  "SKŁADKA",
  "kanalDystrybucji",
  "skladka",
  link,
  "right",
  0     
);
});

}

piechart: PiechartComponent;
  ngOnInit(): void { 
    this.startingCharts();
    
  }

// ===================== CHART ===================================

chart = [];

  chartService(chartType,th1,th2,td1,td2,link,legendPos,chartIndex) {
    this.spinnerService.show();
    let array = [];
    array.unshift([th1, th2]); 
  this.mainService.getRaport(link).retry(3).subscribe( result => {
    result.map( elem => {    
    array.push([elem[td1], elem[td2]]);
    });    
  }, (err: HttpErrorResponse) => {
    this.spinnerService.hide();    
    console.warn(err);
  }, () => {
  //  console.log(array);
    this.drawChart(array,chartType,legendPos,chartIndex);
    this.spinnerService.hide();
    }
  )};
  
  drawChart(array,chartType,legendPos,chartIndex) {        
    this.chart[chartIndex] = {
      chartType: chartType,
        dataTable: array,     
        options: {            
          chartArea: {width: 200, height: '95%'},
            legend: {
             position: legendPos
            },
            tooltip: {
              isHtml: true,
              trigger: 'selection',        
            },
            slices: {
              1: {offset: 0.1},
              10: {offset: 0.1},
              9: {offset: 0.1},
            }                          
          }
        } 
  };
// ===================== END CHART ===================================

  
  chart2;
  chart3;
  chart4;
  chart5;
  chart6;
  chart7;
  chart8;
  chart9;
  chart10;
  calendarDp1: NgbDateStruct;
  calendarDp2: NgbDateStruct;

  showCharts = true;
  warningMessage: string;

  startingCharts() {
    
this.getSnapshotCharts(this.mainService.default);
this.getBarChartAgreementSum(this.mainService.default);
this.getBarChartSalesSum(this.mainService.default);
this.getPieChart9("2008-4-3/2018-4-3/umowa","Nazwa Produktu", "Składka");
this.getPieChart10("2008-4-3/2018-4-3/umowa", "Rodzaj platności", "Składka");
this.getPieChart4("2008-4-3/2018-4-3/umowa", "Nazwa Segmentu", "skladka");
this.getPieChart5("2008-4-3/2018-4-3/umowa", "Nazwa Segmentu", "skladka");
  }


// ============================== chart7 ======================================
getBarChartAgreementSum(link){
 
  let array = [];
  this.mainService.getRaportDasByDate(link).retry(3).subscribe(result => {
  //  console.log(result);
    result.map(elem => { 
      array.push([
        "",       
         elem.numberOfContract,        
       ])
             });
             array.unshift([ 
               "",            
                "Liczba umów"            
                     ])     
           }, (error: HttpErrorResponse) => {
          //   console.log(error);
           }, () => {
          //   console.log(array.length);       
             if(array.length >= 2) {
            //   console.log(array);
               this.showCharts = true;
               this.getSumAgreementFromTable(array);
               //this.drawBarChartBySumAgreement(array);       
               this.warningMessage = null;
             } else {
               this.showCharts = false;
               this.warningMessage = "No results found!";
             }    
           });
         }
         totalSales:number;
         getSumAgreementFromTable(array) {
           this.totalSales = 0;
           for(let i = 1; i <array.length; i++ ) {
             this.totalSales = this.totalSales + array[i][1];
           //  console.log(array[i][12]);    
           }
           let arraySum = [];
           arraySum.push(["",this.totalSales]);
           arraySum.unshift(["","LICZBA UMÓW"]);
        //   console.log(this.totalSales);
        //   console.log(arraySum);
           this.drawBarChartBySumAgreement(arraySum);
         }
         drawBarChartBySumAgreement(array){        
            this.chart7 = {
              chartType: "BarChart",
              dataTable: array,     
              options: { 
                animation: {
                  startup: true,
                  duration: 1500,
                  easing: 'out'
                },           
                chartArea: {width: 200, height: '85%'},
                  legend: {
                   position: 'top'
                  },
                  tooltip: {
                    isHtml: true,
                    trigger: 'selection',        
                  },                      
                }
              }             
      };
      // ======================== END =======================================


      // ======================== chart8 =======================================
getBarChartSalesSum(link){
  let array = [];
  this.mainService.getRaportDasByDate(link).retry(3).subscribe(result => {
  //  console.log(result);
    result.map(elem => { 
      array.push([
        "",       
         elem.skladka,        
       ])
             });
             array.unshift([ 
               "",            
                "Sprzedaż"            
                     ])
       
           }, (error: HttpErrorResponse) => {
         //    console.log(error.status);
           }, () => {
          //   console.log(array.length);
       
             if(array.length >= 2) {
            //   console.log(array);
               this.showCharts = true;
               this.getSumSales(array);                     
               this.warningMessage = null;
             } else {
               this.showCharts = false;
               this.warningMessage = "No results found!";
             }    
           });
         }        
         getSumSales(array) {
           let totalSales = 0;
           for(let i = 1; i <array.length; i++ ) {
             totalSales = totalSales + array[i][1];
           //  console.log(array[i][12]);    
           }
           let arraySum = [];
           arraySum.push(["",totalSales]);
           arraySum.unshift(["","SPRZEDAŻ"]);
           console.log(totalSales);
           console.log(arraySum);
           this.drawBarChartBySumSales(arraySum);
         }

         drawBarChartBySumSales(array){        
            this.chart8 = {
              chartType: "BarChart",
              dataTable: array,     
              options: { 
                animation: {
                  startup: true,
                  duration: 1500,
                  easing: 'out',
                  
                },           
                chartArea: {width: 200, height: '85%'},
                  legend: {
                   position: 'top'
                  },
                  tooltip: {
                    isHtml: true,
                    trigger: 'selection',        
                  },                      
                }
              }  
             // console.log(array[0][1],array[1][1]);
             
      };
      
// ======================== END =======================================


// ======================== chart9 =======================================
getPieChart9(link, firstHeader, secondHeader){
//  console.log("getPieChart9()");
  let array = [];  
  this.mainService.getRaportDasByProduct(link).retry(2).subscribe(result => {
  //  console.log(result);
    result.map(elem => {      
      array.push([               
         elem.nazwaProduktu,
         elem.skladka        
       ])
             });
             array.unshift([                         
              firstHeader,
              secondHeader
                     ])     
           }, (error: HttpErrorResponse) => {
           //   console.log("getPieChart()", error.status);
           }, () => {
          //   console.log("array lenth",array.length);
       
             if(array.length >= 2) {
            //   console.log(array);
               this.showCharts = true;              
               this.drawChart9(array);             
               this.warningMessage = null;
             } else {
               this.showCharts = false;
               this.warningMessage = "No results found!";
             }    
           });
         }                 
         drawChart9(array){        
            this.chart9 = {
              chartType: "PieChart",
                dataTable: array,     
                options: {            
                  chartArea: {width: 300, height: '95%'},
                    legend: {
                     position: 'right'
                    },
                    tooltip: {
                      isHtml: true,
                      trigger: 'selection',        
                    },
                    slices: {
                      1: {offset: 0.1},
                      10: {offset: 0.1},
                      9: {offset: 0.1},
                    }                          
                  }
                } 
      };     
// ======================== END =======================================


// ======================== chart10 =======================================
getPieChart10(link, firstHeader, secondHeader){
//  console.log("getPieChart10()");
  let array = [];  
  this.mainService.getRaportDasByPayment(link).retry(2).subscribe(result => {
  //  console.log(result);
    result.map(elem => {      
      array.push([               
         elem.platnosc,
         elem.skladka        
       ])
             });
             array.unshift([                         
              firstHeader,
              secondHeader
                     ])     
           }, (error: HttpErrorResponse) => {
            //  console.log("getPieChart()", error.status);
           }, () => {
          //   console.log("array lenth",array.length);
       
             if(array.length >= 2) {
           //    console.log(array);
               this.showCharts = true;              
               this.drawChart10(array);             
               this.warningMessage = null;
             } else {
               this.showCharts = false;
               this.warningMessage = "No results found!";
             }    
           });
         }                 
         drawChart10(array){        
            this.chart10 = {
              chartType: "PieChart",
                dataTable: array,     
                options: {            
                  chartArea: {width: 300, height: '95%'},
                    legend: {
                     position: 'right'
                    },
                    tooltip: {
                      isHtml: true,
                      trigger: 'selection',        
                    },
                    slices: {
                      1: {offset: 0.1},
                      10: {offset: 0.1},
                      9: {offset: 0.1},
                    }                          
                  }
                } 
      };     
// ======================== END =======================================

// ======================== chart4 =======================================
getPieChart4(link, firstHeader, secondHeader){
  
  this.spinnerService.show();
//  console.log("getPieChart4()");
  let array = [];  
  this.mainService.getRaportDasBySector(link).retry(2).subscribe(result => {
  //  console.log(result);
    result.map(elem => {      
      array.push([  
        elem.segmentSprzedazy,                     
         elem.skladka,
               
       ])
             });
             array.unshift([                         
              firstHeader,
              secondHeader
                     ])     
           }, (error: HttpErrorResponse) => {
          //    console.log("getPieChart4()", error);
              this.spinnerService.hide();
           }, () => {
          //   console.log(array);
       
             if(array.length >= 2) {
            //   console.log(array);
               this.showCharts = true;              
               this.drawChart4(array);             
               this.warningMessage = null;
               this.spinnerService.hide();
             } else {
               this.showCharts = false;
               this.warningMessage = "No results found!";
               this.spinnerService.hide();
             }    
           });
         }                 
         drawChart4(array){        
            this.chart4 = {
              chartType: "PieChart",
                dataTable: array,     
                options: {            
                  chartArea: {width: 300, height: '95%'},
                    legend: {
                     position: 'right'
                    },
                    tooltip: {
                      isHtml: true,
                      trigger: 'selection',        
                    },
                    slices: {
                      1: {offset: 0.1},
                      10: {offset: 0.1},
                      9: {offset: 0.1},
                    }                          
                  }
                } 
      };     
// ======================== END =======================================


// ======================== chart5 =======================================
getPieChart5(link, firstHeader, secondHeader){
  this.spinnerService.show();
//  console.log("getPieChart5()");
  let array = [];  
  this.mainService.getRaportDasBySector(link).retry(2).subscribe(result => {
  //  console.log(result);
    result.map(elem => {      
      array.push([  
        elem.segmentSprzedazy,                     
         elem.skladka,
               
       ])
             });
             array.unshift([                         
              firstHeader,
              secondHeader
                     ])     
           }, (error: HttpErrorResponse) => {
           //   console.log("getPieChart4()", error);
              this.spinnerService.hide();
           }, () => {
             console.log(array);
       
             if(array.length >= 2) {
            //   console.log(array);
               this.showCharts = true;              
               this.drawChart5(array);             
               this.warningMessage = null;
               this.spinnerService.hide();
             } else {
               this.showCharts = false;
               this.warningMessage = "No results found!";
               this.spinnerService.hide();
             }    
           });
         }                 
         drawChart5(array){        
            this.chart5 = {
              chartType: "ColumnChart",
                dataTable: array,     
                options: {            
                  chartArea: {width: 200, height: '85%'},
                    legend: {
                     position: 'top'
                    },
                    tooltip: {
                      isHtml: true,
                      trigger: 'selection',        
                    },
                    slices: {
                      1: {offset: 0.1},
                      10: {offset: 0.1},
                      9: {offset: 0.1},
                    }                          
                  }
                } 
      };     
// ======================== END =======================================


  getSnapshotCharts(link) {
    let array = [];
    this.mainService.getRaportDasByDate(link).retry(3).subscribe(result => {
    //  console.log(result);
      result.map(elem => {  
               
array.push([ 
 // elem.kanalDystrybucji,
  elem.nazwaSektoraSprzedazy,
//  elem.dyrektorSektora,
//  elem.segmentSprzedazy,
//  elem.drEkspertSegmentu,
//  elem.miasto,
//  elem.mzaKierownikZespolu,
//  elem.nazwaAgenta,
//  elem.nrWewnAgenta,
//  elem.nrKnfAgenta,
 // elem.uzytkownik,
 // elem.nrKnfUzytkownika,
  elem.skladka,
 // elem.numberOfContract,  
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
        // "Kanał dystrybucji",
         "Nazwa sektora sprzedazy",
        // "Dyrektor sektora",
        // "Segment sprzedazy",
        // "Dyrektor/Ekspert segmentu",
        // "Miasto",
        // "MZA Kierownik Zespolu",
        // "Nazwa agenta",
        // "Numer wewn. Agenta",
        // "Numer KNF Agenta",
        // "Użytkownik",
        // "Numer KNF użytkownika",
         "Składka",       
        // "Liczba umów"
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

    }, (error: HttpErrorResponse) => {
    //  console.log("getChartTable:" + error.status);
    }, () => {
    //  console.log(array.length);

      if(array.length >= 2) {
        this.showCharts = true;
        this.drawChart1(array);       
        this.warningMessage = null;
      } else {
        this.showCharts = false;
        this.warningMessage = "No results found!";
      }    
    });
  }

  drawChart1(array){
      this.chart2 = {
        chartType: "BarChart",
        dataTable: array,     
        options: { 
          animation: {
            startup: true,
            duration: 1500,
            easing: 'out'
          },           
          chartArea: {width: 300, height: '95%'},
            legend: {
             position: 'top'
            },
            tooltip: {
              isHtml: true,
              trigger: 'selection',        
            },                      
          }
        }

        this.chart3 = {
          chartType: "ColumnChart",
          dataTable: array,     
          options: { 
            animation: {
              startup: true,
              duration: 1500,
              easing: 'out'
            },           
            chartArea: {width: 200, height: '95%'},
              legend: {
               position: 'right'
              },
              tooltip: {
                isHtml: true,
                trigger: 'selection',        
              },                          
            }
          }

          // this.chart4 = {
          //   chartType: "PieChart",
          //   dataTable: array,     
          //   options: {      
          //     animation: {
          //       startup: true,
          //       duration: 1500,
          //       easing: 'out'
          //     },  
          //     chartArea: {top: 20,width: 300, height: 300},
              
          //       legend: {
          //        position: 'right'
          //       },
          //       tooltip: {
          //         isHtml: true,
          //         trigger: 'selection',        
          //       },                          
          //     }
          //   }
              this.chart6 = {
                chartType: "PieChart",
                dataTable: array,     
                options: {            
                  chartArea: {width: 300, height: '95%'},
                    legend: {
                     position: 'right'
                    },
                    tooltip: {
                      isHtml: true,
                      trigger: 'selection',        
                    },
                    slices: {
                      1: {offset: 0.1},
                      10: {offset: 0.1},
                      9: {offset: 0.1},
                    }                          
                  }
                }         
};
chart7BarChart(array){
  this.chart7 = {
    chartType: "BarChart",
    dataTable: array,      
    options: {
      chartArea: {width: 300, height: '95%'},     
      
      animation: {
        startup: true,
        duration: 1500,
        easing: 'out'       
      },                 
        legend: {
         position: 'top'                  
        },
        tooltip: {
          isHtml: true,
          trigger: 'selection',        
        },                                 
      }
    }
}



  }
  
 


