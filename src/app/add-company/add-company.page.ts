import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.page.html',
  styleUrls: ['./add-company.page.scss'],
})
export class AddCompanyPage{

  constructor(
    private service: CompanyService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
  ) { }

  form = new FormGroup({
    companyName : new FormControl('',[Validators.required,Validators.maxLength(25),]),
    Email : new FormControl('',[Validators.required,Validators.maxLength(25),]),
    GSTNo : new FormControl('',[Validators.required,Validators.maxLength(50),]),
    phoneNumber : new FormControl('',[Validators.required,Validators.maxLength(10),]),
    State : new FormControl('',[Validators.required,Validators.maxLength(50),]),
    stateCode : new FormControl('',[Validators.required,Validators.maxLength(50),]),
    Address : new FormControl('',[Validators.required,Validators.maxLength(100),]),
   });


   async add(form: FormGroup) {
    const headers = {
      enctype: 'multipart/form-data;',
      'Content-Type': 'application/json',
      Accept: 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };
    if (form.value.companyName === '' || form.value.Email === '') {
      const toast = await this.toastCtrl.create({
        message: 'Please fill all details!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
    }
    else {
      const formData = new FormData();

      const formDataJsonString = JSON.stringify(formData);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: formDataJsonString,
      };
      const dataJson = {
        companyName: form.value.companyName,
        Email: form.value.Email,
        GSTNo: form.value.GSTNo,
        phoneNumber: form.value.phoneNumber,
        State: form.value.State,
        stateCode: form.value.stateCode,
        Address: form.value.Address,
      };

      this.service.add(dataJson).subscribe(async res=>{
      console.log(res);
      this.router.navigateByUrl('/agent-dash');
      const toast = await this.toastCtrl.create({
        message: 'Company Added Succesfully!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
      },async err=>{
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
}
