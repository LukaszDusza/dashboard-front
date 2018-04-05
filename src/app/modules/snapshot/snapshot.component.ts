import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main-service.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {

  constructor(private mainService?: MainService) {
//this.getSnapshotCharts(mainService.endpoint.byUserSum);
this.selectLastYear();
   }

  ngOnInit() {
   
  }

  chart1;
  chart2;
  chart3;
  chart4;
  chart5;
  chart6;
  calendarDp1: NgbDateStruct;
  calendarDp2: NgbDateStruct;

  

  selectLastYear() {
    this.calendarDp1 = {year: now.getFullYear() -3, month: now.getMonth() + 1, day: now.getDate()};
    this.calendarDp2 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    

    let dateFrom = this.calendarDp1.year + "-" + this.calendarDp1.month + "-" + this.calendarDp1.day;
    let dateTo = this.calendarDp2.year + "-" + this.calendarDp2.month + "-" + this.calendarDp2.day;

let slash = "/";
let link = this.mainService.swichHost + this.mainService.endpoint.byDate + dateFrom + slash + dateTo + slash + "umowa";
console.log(link);

this.getSnapshotCharts(link)

  }

  getSnapshotCharts(link) {
    let array = [];
    this.mainService.getRaportDas(link).subscribe(result => {
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

    }, error => {
     // console.log("getChartTable:" + error);
    }, () => {
      console.log(array);
      this.drawChart(array);
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
  }
  
 


