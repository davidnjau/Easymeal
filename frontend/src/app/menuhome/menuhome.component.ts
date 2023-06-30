import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { CommonModule } from '@angular/common';
import { RestComponent } from '../rest/rest.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MenudialogComponent } from '../menudialog/menudialog.component';


@Component({
  selector: 'app-menuhome',
  templateUrl: './menuhome.component.html',
  styleUrls: ['./menuhome.component.css']
})
export class MenuhomeComponent {
  trendingcomboList : Trendingcombo []=[];
  trendingservice:TrendingService = inject(TrendingService);
  filteredcomboList: Trendingcombo[] = [];
  
  openDialog(){
    this.dialog.open(MenudialogComponent,{
      width:"55%"
    })
  }

  constructor(private dialog:MatDialog){
    this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
    this.filteredcomboList = this.trendingcomboList;
  }
// implementing filterresult event handler function to return the searched combo dish
filterResults(text: string) {
  if (!text) {
    this.filteredcomboList = this.trendingcomboList;
  }

  this.filteredcomboList = this.trendingcomboList.filter(
    trendingcombo => trendingcombo?.comboname.toLowerCase().includes(text.toLowerCase())
  );
}

}
