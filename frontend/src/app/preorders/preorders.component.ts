import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trendingcombo } from '../trendingcombo';
import { Users } from '../users';

@Component({
  selector: 'app-preorders',
  templateUrl: './preorders.component.html',
  styleUrls: ['./preorders.component.css']
})
export class PreordersComponent {
  
 trendingcomboList : Trendingcombo []=[];
 trendingservice:TrendingService = inject(TrendingService);
 
 constructor(){
   this.trendingcomboList = this.trendingservice.getAllTrendingcombo();
 }

 //ordersummary details array-mock

 usersList : Users[] = [
  {
    imgicon: "../assets/user.png",
    id:"ID2435635", 
    name:"Bosun Jones", 
    item:"Pizza and Chips",
    value:"Ksh5000", 
    qty:12, 
    date:"25th May 2019", 
    status:"Pending",
    action:"add or remove",
    staffimg: "../assets/staffimg2.jpg",
    staffname:"Grant Marshall",
    position:"Head Chef",
    department:"Kitchen",
    joined:"9.12.20215",
    mobile: "0722000000",
    itemid:1,
   itemname:"Salt",
   datein:"25/2/2021",
   qtyin:"25 Kgs",
   currentqty: "20 Kgs",
   qtystatus:"Good",
   qtyaction:""
  },
  {
    imgicon: "../assets/user.png",
    id:"ID2435635", 
    name:"Bosun Jones", 
    item:"Pizza and Chips",
    value:"Ksh5000", 
    qty:12, 
    date:"25th May 2019", 
    status:"Cancelled",
    action:"add or remove",
    staffimg: "../assets/staffimg1.jpg",
    staffname:"Pena Valdez",
    position:"Sous Chef",
    department:"Kitchen",
    joined:"9.12.20215",
    mobile: "0722000000",
    itemid:2,
    itemname:"Sugar",
    datein:"25/2/2021",
    qtyin:"25 Kgs",
    currentqty: "2 Kgs",
    qtystatus:"Low",
    qtyaction:"Send Requisition"
  },
  {
    imgicon: "../assets/user.png",
    id:"ID2435635", 
    name:"Bosun Jones", 
    item:"Pizza and Chips",
    value:"Ksh5000", 
    qty:12, 
    date:"25th May 2019", 
    status:"Completed",
    action:"add or remove",
    staffimg: "../assets/staffimg3.jpg",
    staffname:"Jessica Miles",
    position:"Store Keeper",
    department:"Store",
    joined:"9.12.20215",
    mobile: "0722000000",
    itemid:3,
    itemname:"Onions",
    datein:"25/2/2021",
    qtyin:"25 Kgs",
    currentqty: "18 Kgs",
    qtystatus:"Good",
    qtyaction:""
  },
  {
    imgicon: "../assets/user.png",
    id:"ID2435635", 
    name:"Bosun Jones", 
    item:"Pizza and Chips",
    value:"Ksh5000", 
    qty:12, 
    date:"25th May 2019", 
    status:"Completed",
    action:"add or remove",
    staffimg: "../assets/staffimg4.jpg",
    staffname:"Kerri Barber",
    position:"Cashier",
    department:"Sales",
    joined:"9.12.20215",
    mobile: "0722000000",
    itemid:4,
    itemname:"Tomatoes",
    datein:"25/2/2021",
    qtyin:"25 Kgs",
    currentqty: "20 Kgs",
    qtystatus:"Good",
    qtyaction:""

  },
  {
   imgicon: "../assets/user.png",
   id:"ID2435635", 
   name:"Bosun Jones", 
   item:"Pizza and Chips",
   value:"Ksh5000", 
   qty:12, 
   date:"25th May 2019", 
   status:"Completed",
   action:"add or remove",
   staffimg: "../assets/staffimg5.jpg",
    staffname:"Natasha Gamble",
    position:"Waiter",
    department:"Kitchen",
    joined:"9.12.20215",
    mobile: "0722000000",
    itemid:5,
    itemname:"Wheat Flour",
    datein:"25/2/2021",
    qtyin:"25 Kgs",
    currentqty: "2 Kgs",
    qtystatus:"Low",
    qtyaction:"Send Requisition"
  },
  {
   imgicon: "../assets/user.png",
   id:"ID2435635", 
   name:"Bosun Jones", 
   item:"Pizza and Chips",
   value:"Ksh5000", 
   qty:12, 
   date:"25th May 2019", 
   status:"Completed",
   action:"add or remove",
   staffimg: "../assets/staffimg6.jpg",
    staffname:"White Castaneda",
    position:"Waiter",
    department:"Kitchen",
    joined:"9.12.20215",
    mobile: "0722000000",
    itemid:6,
    itemname:"Maize Flour",
    datein:"25/2/2021",
    qtyin:"25 Kgs",
    currentqty: "19 Kgs",
    qtystatus:"Good",
    qtyaction:""
  }

];
}
