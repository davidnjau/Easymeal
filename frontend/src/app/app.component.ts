import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import routeConfig from './routes';



@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  //imports: [DashboardComponent, RouterModule,],
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Easymeal';
}
