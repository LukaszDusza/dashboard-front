import { Injectable } from '@angular/core';
import { MainService } from './main-service.service';

@Injectable()
export class ChartService {

  loading = false; 

  constructor(private mainService?: MainService) { 
    mainService.link$.subscribe( link => {
      console.log(link);
       
      });
   }

   ngOnInit(): void {
    this.getChart (
      "BarChart",
      "platnosc",
      "skladka",
      "platnosc",
      "skladka",     
      "http://89.67.215.18:11780/dashboard-0.0.1-SNAPSHOT/api/raportdas/payment/2008-4-3/2018-4-3/umowa"
    );
  }

chart;

getChart(chartType,th1,th2,td1,td2,link) {
  this.loading = true; 
  let array = [];
  array.unshift([th1, th2]); 
this.mainService.getRaport(link).retry(3).subscribe( result => {
  console.log(result);
  result.map( elem => {    
  array.push([elem[td1], elem[td2]]);
  });
   
}, err => {
  console.warn(err);
}, () => {
  console.log(array);
  this.drawChart(array,chartType);
  }
)
return this.chart;
};

drawChart(array,chartType){        
  this.chart = {
    chartType: chartType,
      dataTable: array,     
      options: {            
        chartArea: {left: 0, top: 20,width: 400, height: 300},
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