import { Component, Input} from '@angular/core';
import { Trendingcombo } from '../trendingcombo'; 
import { TrendingService } from '../trending.service';
import { AddmealdialogComponent } from './addmealdialog/addmealdialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent{
  openDialog(){                            //popup method
    this.dialog.open(AddmealdialogComponent,{ 
      width:"50%"
    })
  }
 
  @Input() trendingcombo! :Trendingcombo;

  constructor(private dialog:MatDialog){}
}
