import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {


data:any

  constructor( private  ds:DataService){

    // this.ad.accept
    this.ds.view(JSON.parse(localStorage.getItem("currentcid") ||"")).subscribe((result:any)=>{
    this.data=result.message
    
    
    })
    
    }








}
