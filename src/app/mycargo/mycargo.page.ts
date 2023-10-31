import { Component, OnInit } from '@angular/core';
import { CargoService } from '../services/cargo.service';

@Component({
  selector: 'app-mycargo',
  templateUrl: './mycargo.page.html',
  styleUrls: ['./mycargo.page.scss'],
})
export class MycargoPage implements OnInit {

  datauser :any;
  constructor(private service:CargoService) { }

  ngOnInit() {
    this.displayData();
  }

  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
  }

}
