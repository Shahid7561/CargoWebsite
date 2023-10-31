import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private disUrl = 'https://nodejs-acli.onrender.com/datas';
  constructor(private http: HttpClient) { }

  display(){
    const disUrl = this.disUrl;
    return this.http.get(disUrl);
  }

  check(id:any) {
    let url3 = 'https://nodejs-acli.onrender.com/datas';
    return this.http.get(url3 + '/' + id);
  }

  deletes(id:string){
    let url4 = 'https://nodejs-acli.onrender.com/datas';
     return this.http.delete(url4+'/'+id);
  }

  updates(Fullname:any){
    return this.http.put(this.disUrl,Fullname);
  }
}
