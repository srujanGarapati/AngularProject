import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  products = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.subscription.push(this.appService.getProducts().subscribe(
      (data: any) => this.products = data.products
    ));
  }

  ngOnDestroy() {
    this.subscription.map(x => x.unsubscribe());
  }

}
