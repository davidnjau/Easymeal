import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBell, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { RestComponent } from './rest/rest.component';
import { TrendingcomboComponent } from './trendingcombo/trendingcombo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { MenuhomeComponent } from './menuhome/menuhome.component';
import { MenubeveragesComponent } from './menu/menubeverages/menubeverages.component';
import { MenusinglemealsComponent } from './menu/menusinglemeals/menusinglemeals.component';
import { LiveordersComponent } from './liveorders/liveorders.component';
import { LivesummaryComponent } from './liveorders/livesummary/livesummary.component';
import { PreordersComponent } from './preorders/preorders.component';
import { StaffComponent } from './staff/staff.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StaffingComponent } from './staff/staffing/staffing.component';
import { OndutyComponent } from './staff/onduty/onduty.component';
import { OffdutyComponent } from './staff/offduty/offduty.component';
import { InventoryitemsComponent } from './inventory/inventoryitems/inventoryitems.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angula/forms';
//import { faBell } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RestComponent,
    TrendingcomboComponent,
    DashboardComponent,
    MenuComponent,
    MenuhomeComponent,
    MenubeveragesComponent,
    MenusinglemealsComponent,
    LiveordersComponent,
    LivesummaryComponent,
    PreordersComponent,
    StaffComponent,
    InventoryComponent,
    StaffingComponent,
    OndutyComponent,
    OffdutyComponent,
    InventoryitemsComponent,
    DialogBodyComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogBodyComponent]

})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(faBell, faUser, faEllipsisH);
  
  }
}
