import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private router: Router, private ds:DataService) { }

  registerForm = this.fb.group({
    cid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    cname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  register() {
    var cid = this.registerForm.value.cid
    var cname= this.registerForm.value.cname
    var psw = this.registerForm.value.psw 
   if(this.registerForm.valid){
      this.ds.register(cid,cname,psw).subscribe((result:any)=>{
   
   alert(result.message)
   this.router.navigateByUrl("")
   
      },
      result=>{
       alert(result.error.message)
      }
       
       )
    
   }
   
   else{
     alert('invalid form')
   }
   
   
   
   
   
     }
   }
  

