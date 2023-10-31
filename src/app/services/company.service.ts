import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private addCompany = 'https://nodejs-acli.onrender.com/companies/addCompany';
  private displayCompany = 'https://nodejs-acli.onrender.com/companies';

  constructor(private http: HttpClient) { }

  add(company: any){
    return this.http.post(this.addCompany,company);
  }

  display(){
    const disUrl = this.displayCompany;
    return this.http.get(disUrl);
}
}
