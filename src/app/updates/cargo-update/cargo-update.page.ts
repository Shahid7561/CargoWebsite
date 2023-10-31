import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo-update',
  templateUrl: './cargo-update.page.html',
  styleUrls: ['./cargo-update.page.scss'],
})
export class CargoUpdatePage implements OnInit {
  datauser :any;

  constructor(private service:CargoService,
    private alerts:AlertController,
    private toastCtrl:ToastController,
    private router: ActivatedRoute,
    private navRouter: Router
    ) { }


  form: any = new FormGroup({
    _id : new FormControl('', [Validators.required, Validators.maxLength(25),]),
    senderCompany: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    receiverCompany: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Date: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    From: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    To: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    trainNo: new FormControl('', [Validators.required, Validators.maxLength(15),]),
    noOfArticles: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    packingMode: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    Description: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    doorDelivery: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    paymentMode: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    cargoType: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    Status: new FormControl('', [Validators.required, Validators.maxLength(10),])
  });

  ngOnInit() {
    this.service.check(this.router.snapshot.params['id']).subscribe((res: any) => {
      this.form = new FormGroup({
        _id : new FormControl(res['_id']),
        senderCompany: new FormControl(res['senderCompany']),
        receiverCompany: new FormControl(res['receiverCompany']),
        Date: new FormControl(res['Date']),
        From: new FormControl(res['From']),
        To: new FormControl(res['To']),
        trainNo: new FormControl(res['trainNo']),
        noOfArticles: new FormControl(res['noOfArticles']),
        packingMode: new FormControl(res['packingMode']),
        Description: new FormControl(res['Description']),
        doorDelivery: new FormControl(res['doorDelivery']),
        paymentMode: new FormControl(res['paymentMode']),
        cargoType: new FormControl(res['cargoType']),
        Status: new FormControl(res['Status'])
      })

    });
    this.displayData();
  }

  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
  }

  onSubmit(form: FormGroup) {
    const headers = {
      'enctype': 'multipart/form-data;',
      'Content-Type': 'application/json',
      'Accept': 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };
    const formData = new FormData();
    let formDataJsonString = JSON.stringify(formData);
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
      body: formDataJsonString,
    };
    const dataJson = {
      _id : form.value._id,
      senderCompany: form.value.senderCompany,
      receiverCompany: form.value.receiverCompany,
      Date: form.value.Date,
      From: form.value.From,
      To: form.value.To,
      trainNo:form.value.trainNo,
      noOfArticles: form.value.noOfArticles,
      packingMode: form.value.packingMode,
      Description: form.value.Description,
      doorDelivery: form.value.doorDelivery,
      paymentMode: form.value.paymentMode,
      cargoType: form.value.cargoType,
      Status: form.value.Status,
    };

    this.service.update(dataJson).subscribe(async res => {
      console.log(res);
      this.navRouter.navigateByUrl('/agent-dash');
      const toast = await this.toastCtrl.create({
        message: 'Cargo update Succesfully!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
    }, async err => {
      const toast = await this.toastCtrl.create({
        message: err.error.error,
        duration: 1500,
        icon: 'alert'
      });
      await toast.present();
    });
    console.log('dataJson:', dataJson);

  }

}
