import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { CommonModule } from '@angular/common';
import { RestComponent } from '../rest/rest.component';


@Component({
  selector: 'app-menuhome',
  templateUrl: './menuhome.component.html',
  styleUrls: ['./menuhome.component.css']
})
export class MenuhomeComponent {
  trendingcomboList : Trendingcombo []=[];
  trendingservice:TrendingService = inject(TrendingService);
  
  constructor(){
    this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
  }

}
