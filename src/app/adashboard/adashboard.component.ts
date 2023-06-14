import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent {

  uhiArray: any;

  constructor(private ds: DataService) {
    this.ds.reci().subscribe((result: any) => {
      this.uhiArray = result.transactions
      console.log(result.transactions);



    })
  }

  accept(cidq: any) {
    var cid = cidq.value
    this.ds.accept(cid).subscribe((result: any) => {

      alert(result.message)


    }

    )

  }

  reject(cidq:any){

    // console.log(mob.value);
    var cid=cidq.value

    this.ds.reject(cid).subscribe((result:any)=>{
      alert(result.message)
    })
    
  }



}
