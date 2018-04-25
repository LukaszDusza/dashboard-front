import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
//import { AuthService } from './modules/login/auth.service';
import { Router } from '@angular/router';
//import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { concat } from 'rxjs/operator/concat';
import {environment} from '../environments/environment';

const config = environment.config;

@Injectable()
export class MainService {

  constructor(private http: HttpClient) { }


//---------------- HOST  ----------------------------------------------------------

// host = {
//   localhost: "http://localhost:8080/",
//   server: "http://89.67.215.18:11780/dashboard-0.0.1-SNAPSHOT/"
// }
//swichHost = this.host.localhost;
swichHost = config.host;
endpoint = {
  byDate:"api/raportdas/date/",
  allData:"api/raportdas/all",
  byUserSum:"api/raportdas/usersum",
  byProduct:"api/raportdas/product/",
  byPayment:"api/raportdas/payment/",
  bySector: "api/raportdas/sector/",
  bySearch:"api/raportdas/filter/",
  byFilter: "api/raportdas/date/"
}
default = "2017-4-2/2018-4-2/umowa";
//---------------- END HOST ---------------------------------------------------

private link = new Subject<string>(); //search date provider
link$ = this.link.asObservable();

updateLinks(linkUp: string) {
  this.link.next(linkUp);
 console.log(linkUp);
}

  getRaportDasByDate(link): Observable<Array<RaportDas>> {     
    let endpointLink = this.swichHost + this.endpoint.byDate + link;  
      let result = this.http.get<Array<RaportDas>>(endpointLink);
      console.log("link from mainservice", endpointLink);     
      return result;
    }

    getRaportDasBySector(link): Observable<Array<RaportDas>> {     
      let endpointLink = this.swichHost + this.endpoint.bySector + link;  
        let result = this.http.get<Array<RaportDas>>(endpointLink);     
        return result;
      }

    getRaportDasByProduct(link): Observable<Array<RaportDas>> { 
      let endpointLink = this.swichHost + this.endpoint.byProduct + link;  
        let result = this.http.get<Array<RaportDas>>(endpointLink);     
        return result;
      } 

      getRaportDasByPayment(link): Observable<Array<RaportDas>> { 
        let endpointLink = this.swichHost + this.endpoint.byPayment + link;  
          let result = this.http.get<Array<RaportDas>>(endpointLink);     
          return result;
        } 

        getRaportDasAll(): Observable<Array<RaportDas>> {           
          return this.http.get<Array<RaportDas>>(this.swichHost + this.endpoint.allData);
          }

          getRaportDasSales(link): Observable<Array<RaportDas>> {           
            return this.http.get<Array<RaportDas>>(this.swichHost + this.endpoint.byFilter);
            }

          getRaport(link): Observable<Array<RaportDas>> { 
            let endpointLink = this.swichHost + this.endpoint.byDate + link;                     
            return this.http.get<Array<RaportDas>>(endpointLink);
            }

            getFilters(raportType, property): Observable<Array<string>> { 
              let endpointLink = this.swichHost + this.endpoint.bySearch + raportType + "/"+ property;                     
              return this.http.get<Array<string>>(endpointLink);
              }

    postRaport(raport: RaportDas): Observable<RaportDas> {
       return this.http.post<RaportDas>(this.swichHost + this.endpoint.allData, raport);
    }   
    
    
private headers = new HttpHeaders().set('Autorization','token');



}


export interface RaportDas {
    id: number;
      numerKalkulacji:number;
      dataKalkulacji: string;
      numerUmowy:number;
      dataZawarcia: string;
      wazneOd: string;
      wazneDo: string;
      nazwaProduktu: string;
      status: string;
      skladka: number;
      platnosc: string;
      nazwaAgenta: string;
      nrWewnAgenta: string;
      nrKnfAgenta: string;
      uzytkownik: string;
      nrKnfUzytkownika: string;
      emailUzytkownika: string;
      aktywny: number;
      zablokowany: number;
      poziom1: number;
      kanalDystrybucji: string;
      poziom1KNF: string;
      poziom2: number;
      nazwaSektoraSprzedazy: string;
      poziom2KNF: string;
      poziom3: number;
      dyrektorSektora: string;
      poziom3KNF: string;
      poziom4: number;
      segmentSprzedazy: string;
      poziom4knf: string;
      poziom5: number;
      drEkspertSegmentu: string;
      poziom5knf: string;
      poziom6: number;
      miasto: string;
      poziom6knf: string;
      poziom7: number;
      mzaKierownikZespolu: string;
      poziom7knf: string;
      numberOfContract: number;
}

