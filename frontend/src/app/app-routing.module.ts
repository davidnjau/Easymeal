import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuhomeComponent } from './menuhome/menuhome.component';
import { LiveordersComponent } from './liveorders/liveorders.component';
import { PreordersComponent } from './preorders/preorders.component';
import { StaffComponent } from './staff/staff.component';
import { OndutyComponent } from './staff/onduty/onduty.component';
import { OffdutyComponent } from './staff/offduty/offduty.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {path: 'menuhome', component:MenuhomeComponent},
  {path: 'homepage', component:DashboardComponent},
  {path: 'liveorders', component:LiveordersComponent},
  {path: 'preorders', component:PreordersComponent},
  {path: 'staff', component:StaffComponent},
  {path: 'staff/onduty', component:OndutyComponent},
  {path: 'staff/offduty', component:OffdutyComponent},
  {path: 'inventory', component:InventoryComponent},
  {path: '', redirectTo: '/homepage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
