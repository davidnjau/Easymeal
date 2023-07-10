import { Component, Input, OnInit, inject} from '@angular/core';
import { Trendingcombo } from '../trendingcombo';
import { TrendingService } from '../trending.service';
import { MenuProductsService } from '../menu-products.service';
import { HttpClient } from '@angular/common/http';


//import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-trendingcombo',
  templateUrl: './trendingcombo.component.html',
  styleUrls: ['./trendingcombo.component.css']
})

export class TrendingcomboComponent implements OnInit {


  constructor(
    private _empService: TrendingService,
    
    private http:HttpClient,
    //private _coreService: CoreService

  ) {}

  ngOnInit(): void {
    this.getTrendingcomboList();
  }

  tc: any = [];

  getTrendingcomboList(): void {
    this._empService.getTrendingcomboList().subscribe(res => {
        this.tc= res;
        console.log(res);
        
      });
    }
}
