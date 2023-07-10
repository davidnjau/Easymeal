import { Component, Input, OnInit, inject} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

export class TrendingcomboComponent {

  dataSource!: MatTableDataSource<any>;

  constructor(
    private _empService: TrendingService,
    private http:HttpClient,
    //private _coreService: CoreService
    //this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
  ) {}

  ngOnInit(): void {
    this.getTrendingcomboList();
  }



  getTrendingcomboList(): void {
    this._empService.getTrendingcomboList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        console.log(res);
      },
      error: console.log,
    });
  }

}
