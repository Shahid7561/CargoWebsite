import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-nothing',
  templateUrl: './nothing.page.html',
  styleUrls: ['./nothing.page.scss'],
})
export class NothingPage{

  constructor(
    private service: AgentService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }


  form = new FormGroup({
    Fullname: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Phone: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    ConfirmPassword: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });

  async update(form: FormGroup) {
    const headers = {
      'enctype': 'multipart/form-data;',
      'Content-Type': 'application/json',
      'Accept': 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };

    if (form.value.Fullname == '' || form.value.Phone == '' || form.value.Email == '' || form.value.Password == '' || form.value.ConfirmPassword == '') {
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
          'Accept': 'application/json',
        }),
        body: formDataJsonString,
      };
      const dataJson = {
        'Fullname': form.value.Fullname,
        'Phone': form.value.Phone,
        'Email': form.value.Email,
        'Password': form.value.Password,
        'ConfirmPassword': form.value.ConfirmPassword
      };
      this.service.updates(dataJson).subscribe(async res => {
        console.log(res);


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
}
