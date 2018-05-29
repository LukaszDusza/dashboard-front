import { Injectable } from '@angular/core';
import { RaportDas, MainService } from './main-service.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class ReportService {

  constructor(private spinnerService: Ng4LoadingSpinnerService) { }


array = new Array<RaportDas>();
arrayChart1 = [];
filterStatus;
filterRange;
filterdateFrom;
filterDateTo;

filter: Filter;

loadFilterSettings() {
  
}


}

interface Filter {
  status?;
  range?;
  dateFrom?;
  dateTo?;
}
