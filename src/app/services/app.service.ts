import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private dataService: DataService) { }

  getProducts() {
   return this.dataService.getProducts();
  }
}
