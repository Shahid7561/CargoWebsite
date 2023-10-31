import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.page.html',
  styleUrls: ['./myuser.page.scss'],
})
export class MyuserPage implements OnInit {

  datauser :any;
  constructor(private service:UserService) { }

  ngOnInit() {
    this.displayData();
  }

  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
  }
}
