import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private addCargo = 'https://nodejs-acli.onrender.com/cargos/cargoDetails';
  private cargoDetails = 'https://nodejs-acli.onrender.com/cargos';

  constructor(private http: HttpClient) { }

  add(cargo: any){
    return this.http.post(this.addCargo, cargo);
  }

  display(){
    const disUrl = this.cargoDetails;
    return this.http.get(disUrl);
  }

  check(id:any) {
    let url2 = 'https://nodejs-acli.onrender.com/cargos';
    return this.http.get(url2 + '/' + id);
  }


  update(data:any){
     return this.http.put(this.cargoDetails,data);
  }

  deletes(id:string){
    let url4 = 'https://nodejs-acli.onrender.com/cargos';
     return this.http.delete(url4+'/'+id);
  }
}
