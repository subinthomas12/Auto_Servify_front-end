// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { DataService } from '../service/data.service';

// @Component({
//   selector: 'app-cdashboard',
//   templateUrl: './cdashboard.component.html',
//   styleUrls: ['./cdashboard.component.css']
// })
// export class CdashboardComponent {

//   constructor(private fb: FormBuilder, private router: Router, private ds: DataService) { }

//   vregisterForm = this.fb.group({
//     vnum: ['', [Validators.required]],
//     vname: ['', [Validators.required]],
//     vtype: ['', [Validators.required,]],
//     date: ['', [Validators.required]],
//     vmodel: ['', [Validators.required]],
//     desc: ['', [Validators.required]],

//   })

//   vregister() {

//     var vname = this.vregisterForm.value.vname
//     var vnum = this.vregisterForm.value.vnum
//     var vtype = this.vregisterForm.value.vtype
//     var date = this.vregisterForm.value.date
//     var vmodel = this.vregisterForm.value.vmodel
//     var desc = this.vregisterForm.value.desc

//     if (this.vregisterForm.valid) {
//       this.ds.vregister(vname, vnum, vtype, date, vmodel, desc).subscribe((result: any) => {

//         alert(result.message)
//         this.router.navigateByUrl("")

//       },
//         result => {
//           alert(result.error.message)
//         }

//       )

//     } 

//     else {
//       alert('invalid form')
//     }

//   }
// }



import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-cdashboard',
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.css']
})
export class CdashboardComponent {
  constructor(private fb: FormBuilder, private router: Router, private ds: DataService) { }
  vregisterForm = this.fb.group({
    cid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    vnum: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    squery: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    vtype: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    date: ['', [Validators.required]],
    desc: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],



  })

  vregister() {
    var cid = this.vregisterForm.value.cid
    var vnum = this.vregisterForm.value.vnum
    var sq = this.vregisterForm.value.squery
    var vtype = this.vregisterForm.value.vtype
    var date = this.vregisterForm.value.date
    var desc = this.vregisterForm.value.desc

    if (this.vregisterForm.valid) {
      this.ds.vregister(cid,vnum, vtype, date,sq, desc).subscribe((result: any) => {
        alert(result.message)
        // this.router.navigateByUrl("")

      },
        result => {
          alert(result.error.message)
        }

      )

    }

    else {
      alert('invalid form')
    }

  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentcid")
    this.router.navigateByUrl("")
    }

}






