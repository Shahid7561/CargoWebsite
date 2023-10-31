import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private addUrl = 'https://nodejs-acli.onrender.com/agents/addAgent';
  private logUrl = 'https://nodejs-acli.onrender.com/agents/agentLogin';
  private disUrl = 'https://nodejs-acli.onrender.com/agents';
  private newUrl = 'https://nodejs-acli.onrender.com/agents';

  // private upUrl = 'http://localhost:3000/datas';

  constructor(private http: HttpClient) { }

  create(agent: any) {
    return this.http.post(this.addUrl, agent);
  }

  login(credentials: any) {
    return this.http.post(this.logUrl, credentials);
  }

  check(id:any) {
    let url3 = 'https://nodejs-acli.onrender.com/agents';
    return this.http.get(url3 + '/' + id);
  }

  display() {
    const disUrl = this.disUrl;
    return this.http.get(disUrl);
  }

  updates(Username: any) {
    return this.http.put(this.newUrl, Username);
  }

  deletes(id: string) {
    let url4 = 'https://nodejs-acli.onrender.com/agents';
    return this.http.delete(url4 + '/' + id);
  }
}
