import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
   datauser :any;
   show='rahul';
   showw='rohit';
   logs: string[] = [];

   pushLog(msg:any) {
    this.logs.unshift(msg);
  }

  handleChange(e:any) {
    this.pushLog('ionChange fired with value: ' + e.detail.value);
  }




  constructor() { }

  ngOnInit() {
    // this.displayData();
  }

  displayData(){
    // this.service.display().subscribe((data)=>{
    //   this.datauser=data;
    // });
  }


}
