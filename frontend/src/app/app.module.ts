import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { RestComponent } from './rest/rest.component';
import { TrendingcomboComponent } from './trendingcombo/trendingcombo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuhomeComponent } from './menuhome/menuhome.component';
import { MenubeveragesComponent } from './menu/menubeverages/menubeverages.component';
import { MenusinglemealsComponent } from './menu/menusinglemeals/menusinglemeals.component';
import { LiveordersComponent } from './liveorders/liveorders.component';
import { LivesummaryComponent } from './liveorders/livesummary/livesummary.component';
import { PreordersComponent } from './preorders/preorders.component';
import { StaffComponent } from './staff/staff.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StepperorderdialogComponent } from './menu/stepperorderdialog/stepperorderdialog.component';
import { OndutyComponent } from './staff/onduty/onduty.component';
import { OffdutyComponent } from './staff/offduty/offduty.component';
import { InventoryitemsComponent } from './inventory/inventoryitems/inventoryitems.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { InventorydialogComponent } from './inventory/inventorydialog/inventorydialog.component';
import { MenudialogComponent } from './menudialog/menudialog.component';
import { AddmealdialogComponent } from './menu/addmealdialog/addmealdialog.component';
import { SinglemealComponent } from './menu/menusinglemeals/singlemeal/singlemeal.component';
import { BeveragedialogComponent } from './menu/menubeverages/beveragedialog/beveragedialog.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RestComponent,
    TrendingcomboComponent,
    DashboardComponent,
    MenuhomeComponent,
    MenubeveragesComponent,
    MenusinglemealsComponent,
    LiveordersComponent,
    LivesummaryComponent,
    PreordersComponent,
    StaffComponent,
    InventoryComponent,
    StepperorderdialogComponent,
    OndutyComponent,
    OffdutyComponent,
    InventoryitemsComponent,
    DialogBodyComponent,
    InventorydialogComponent,
    MenudialogComponent,
    AddmealdialogComponent,
    SinglemealComponent,
    BeveragedialogComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents:[DialogBodyComponent]

})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(faBell, faUser, faEllipsisH, faEdit, faDeleteLeft);
  
  }
}
