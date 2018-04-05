import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
//import { AuthService } from './modules/login/auth.service';
import { Router } from '@angular/router';
//import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { concat } from 'rxjs/operator/concat';


@Injectable()
export class MainService {

  constructor(private http: HttpClient) { }


//---------------- HOST  ----------------------------------------------------------
host = {
  localhost: "http://localhost:8080/",
  server: "http://89.67.215.18:11780/dashboard-0.0.1-SNAPSHOT/"
}
endpoint = {
  byDate: "api/raportdas/date/",
  allData: "api/raportdas/all",
  byUserSum: "api/raportdas/usersum"
}
swichHost = this.host.server;
//---------------- END HOST ---------------------------------------------------
   

  getRaportDas(link): Observable<Array<RaportDas>> {   
      let result = this.http.get<Array<RaportDas>>(link).retry(3);     
      return result;
    }
    
    // getRaportDasBySum(link): Observable<Array<RaportDas>> {   
    //   let result = this.http.get<Array<RaportDas>>(link).retry(3);     
    //   return result;
    // } 
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
