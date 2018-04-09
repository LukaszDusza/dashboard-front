import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { MainService } from '../../main-service.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { FiltersComponent } from '../filters';

const now = new Date();

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {

  constructor(private mainService?: MainService) {


//this.startingCharts();

mainService.link$.subscribe( link => {
  this.getSnapshotCharts(link);
  //charts
  this.getBarChartAgreementSum(link);
});

}


  ngOnInit(): void { 
    this.startingCharts();
  }

  chart1;
  chart2;
  chart3;
  chart4;
  chart5;
  chart6;
  chart7;
  chart8;
  calendarDp1: NgbDateStruct;
  calendarDp2: NgbDateStruct;

  showCharts = true;
  warningMessage: string;

  startingCharts() {
this.getSnapshotCharts(this.mainService.defaultLink);
this.getBarChartAgreementSum(this.mainService.defaultLink);
this.getBarChartSalesSum(this.mainService.defaultLink)
  }


// ============================== chart7 ======================================
getBarChartAgreementSum(link){
  let array = [];
  this.mainService.getRaportDas(link).retry(3).subscribe(result => {
    console.log(result);
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
             console.log(error.status);
           }, () => {
             console.log(array.length);       
             if(array.length >= 2) {
               console.log(array);
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
           console.log(this.totalSales);
           console.log(arraySum);
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
                // chartArea: {
                //   left:0,top:0,width:'100%',height:'100%'
                // },
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
  this.mainService.getRaportDas(link).retry(3).subscribe(result => {
    console.log(result);
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
             console.log(error.status);
           }, () => {
             console.log(array.length);
       
             if(array.length >= 2) {
               console.log(array);
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
                  easing: 'out'
                },           
                // chartArea: {
                //   left:0,top:0,width:'100%',height:'100%'
                // },
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















  getSnapshotCharts(link) {
    let array = [];
    this.mainService.getRaportDas(link).retry(3).subscribe(result => {
      console.log(result);
      result.map(elem => {  
               
array.push([ 
 // elem.kanalDystrybucji,
//  elem.nazwaSektoraSprzedazy,
//  elem.dyrektorSektora,
//  elem.segmentSprzedazy,
//  elem.drEkspertSegmentu,
//  elem.miasto,
//  elem.mzaKierownikZespolu,
  elem.nazwaAgenta,
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
        // "Nazwa sektora sprzedazy",
        // "Dyrektor sektora",
        // "Segment sprzedazy",
        // "Dyrektor/Ekspert segmentu",
        // "Miasto",
        // "MZA Kierownik Zespolu",
         "Nazwa agenta",
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
      console.log("getChartTable:" + error.status);
    }, () => {
      console.log(array.length);

      if(array.length >= 2) {
        this.showCharts = true;
        this.drawChart(array);       
        this.warningMessage = null;
      } else {
        this.showCharts = false;
        this.warningMessage = "No results found!";
      }    
    });
  }

  drawChart(array){
    this.chart1 = {     
      chartType: "PieChart",
      dataTable: array,     
      options: {  
                  
        // chartArea: {
        //   left:0,top:0,width:'100%',height:'100%'
        // },
          legend: {
           position: 'none'
          },
          tooltip: {
            isHtml: true,
            trigger: 'selection',        
          },        
          pieHole: 20      
        }
      }
      this.chart2 = {
        chartType: "BarChart",
        dataTable: array,     
        options: { 
          animation: {
            startup: true,
            duration: 1500,
            easing: 'out'
          },           
          // chartArea: {
          //   left:0,top:0,width:'100%',height:'100%'
          // },
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
            // chartArea: {
            //   left:0,top:0,width:'100%',height:'100%'
            // },
              legend: {
               position: 'top'
              },
              tooltip: {
                isHtml: true,
                trigger: 'selection',        
              },                          
            }
          }

          this.chart4 = {
            chartType: "ScatterChart",
            dataTable: array,     
            options: {      
              animation: {
                startup: true,
                duration: 1500,
                easing: 'out'
              },      
              // chartArea: {
              //   left:0,top:0,width:'100%',height:'100%'
              // },
                legend: {
                 position: 'top'
                },
                tooltip: {
                  isHtml: true,
                  trigger: 'selection',        
                },                          
              }
            }

            this.chart5 = {
              chartType: "LineChart",
              dataTable: array,     
              options: { 
                animation: {
                  startup: true,
                  duration: 1500,
                  easing: 'out'
                },           
                // chartArea: {
                //   left:0,top:0,width:'100%',height:'100%'
                // },
                  legend: {
                   position: 'top'
                  },
                  tooltip: {
                    isHtml: true,
                    trigger: 'selection',        
                  },                          
                }
              }

              this.chart6 = {
                chartType: "PieChart",
                dataTable: array,     
                options: {            
                  // chartArea: {
                  //   left:0,top:0,width:'100%',height:'100%'
                  // },
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
      animation: {
        startup: true,
        duration: 1500,
        easing: 'out'
      },           
      // chartArea: {
      //   left:0,top:0,width:'100%',height:'100%'
      // },
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
  
 


