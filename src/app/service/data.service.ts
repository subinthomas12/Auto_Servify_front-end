import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

    // this.getDetails()

  }


  reject(cid:any){
    const data= {cid}
    return this.http.post('http://localhost:3000/reject',data)
  }


accept(cid:any){
  const data= {cid}
  return this.http.post('http://localhost:3000/accept',data)
}

view(cid:any){
  const data= {cid}
  return this.http.post('http://localhost:3000/view',data)
}



  vregister(cid:any, vnum: any, vtype: any, date: any, sq: any, desc: any) {
    const data = {  cid,vnum, vtype, date,sq, desc }
    return this.http.post('http://localhost:3000/vregister', data)


  }

  register(cid: any, cname: any, psw: any) {
    const data = { cid, cname, psw }
    return this.http.post('http://localhost:3000/register', data)


  }

  alogin(aid: any, apsw: any) {

    const data = { aid, apsw }
    return this.http.post('http://localhost:3000/login', data)

  }


  login(cid: any, psw: any) {

    const data = { cid, psw }
    return this.http.post('http://localhost:3000/login', data)

  }


  reci() {
    return this.http.get('http://localhost:3000/reci')

  }

}