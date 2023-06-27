import { Injectable } from '@angular/core';
import { Trendingcombo } from './trendingcombo';
//import { MenuComponent } from './menu/menu.component';
//import { TrendingcomboComponent } from './trendingcombo/trendingcombo.component';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  trendingcomboList : Trendingcombo[] = [         //display all trendingcombos
  {
  id:1,
  comboname: "Ugali & Beefstew",
  ordernumber: "500 orders today",
  price: "200KSH",
  photo: "assets/ugali_and_beef.jpg",
  action:"add or remove",
  value:"Ksh5000", 
  date:"25th May 2019",
  singlemealname: "Ugali",
  singlemealprice:"Ksh5000", 
  singlemealphoto:"assets/ugali.jpg",
  beveragename:"House Coffee",
  beverageprice:"Ksh5000", 
  beveragephoto:"assets/coffee.jpg"

},
{
  id:2,
  comboname: "Pizza and Chips",
  ordernumber: "5540 orders today",
  price: "200KSH",
  photo: "assets/pizza_and_chips.jpg",
  action:"add or remove",
  value:"Ksh5000", 
  date:"25th May 2019",
  singlemealname: "Chapati",
  singlemealprice: "Ksh5000", 
  singlemealphoto:"assets/chapati.jpg",
  beveragename:"Regular/Masala Tea",
  beverageprice:"Ksh5000", 
  beveragephoto:"assets/masala_tea.jpg"
},
{
  id:3,
  comboname: "Rice & Beans",
  ordernumber: "5540 orders today",
  price: "200KSH",
  photo: "assets/rice_and_beans.jpg",
  action:"add or remove",
  value:"Ksh5000", 
  date:"25th May 2019",
  singlemealname: "Rice",
  singlemealprice: "Ksh5000", 
  singlemealphoto:"assets/rice.jpg",
  beveragename:"Regular/Hearbal Tea",
  beverageprice:"Ksh5000", 
  beveragephoto:"assets/green_tea.jpg"
},
{
  id:4,
  comboname: "Chapati & Beans",
  ordernumber: "5540 orders today",
  price: "200KSH",
  photo: "assets/chapati_and_beef.jpg",
  action:"add or remove",
  value:"Ksh5000", 
  date:"25th May 2019",
  singlemealname: "Chips",
  singlemealprice:"Ksh5000", 
  singlemealphoto:"assets/chips.jpg",
  beveragename:"Tea Pot",
  beverageprice:"Ksh5000", 
  beveragephoto:"assets/teapot.jpg"
}
];


getAllTrendingcombo(): Trendingcombo[] {
  return this.trendingcomboList;
}

getTrendingcomboById(id: number): Trendingcombo| undefined {
  return this.trendingcomboList.find(trendingcombo => trendingcombo.id === id);
}
  constructor() {}
}
