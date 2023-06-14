import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private router: Router, private ds: DataService) { }

  c_loginForm = this.fb.group({
    cid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  a_loginForm = this.fb.group({
    aid: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    apsw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })


  login() {
    var cid = this.c_loginForm.value.cid
    var psw = this.c_loginForm.value.psw
    if (this.c_loginForm.valid) {
      this.ds.login(cid, psw).subscribe((result: any) => {
        localStorage.setItem("currentUser", result.currentUser)
        localStorage.setItem("currentcid", JSON.stringify(result.currentCid))
        localStorage.setItem("token", JSON.stringify(result.token))



        alert(result.message)
        this.router.navigateByUrl("cdashboard")
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

  alogin() {
    var adminid = this.a_loginForm.value.aid
    var apsw = this.a_loginForm.value.apsw
    if (this.a_loginForm.valid) {
      if (adminid == "admin" && apsw == "admin") {
        alert('login success')
        this.router.navigateByUrl("adashboard")
      }
      else {
        alert('acno or password is incorrect')
      }
    }
    else {
      alert('invalid form')
    }

  }


}
