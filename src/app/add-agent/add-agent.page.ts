import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.page.html',
  styleUrls: ['./add-agent.page.scss'],
})
export class AddAgentPage{

  constructor(
    private service: AgentService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
  ) { }

  form = new FormGroup({
    fullName : new FormControl('',[Validators.required,Validators.maxLength(25),]),
    Email : new FormControl('',[Validators.required,Validators.maxLength(11),]),
    Username : new FormControl('',[Validators.required,Validators.maxLength(50),]),
    Password : new FormControl('',[Validators.required,Validators.maxLength(10),]),
    phoneNumber : new FormControl('',[Validators.required,Validators.maxLength(10),]),
    Gender : new FormControl('',[Validators.required,Validators.maxLength(10),]),
    State : new FormControl('',[Validators.required,Validators.maxLength(10),]),
    City : new FormControl('',[Validators.required,Validators.maxLength(10),]),
    officeAddress : new FormControl('',[Validators.required,Validators.maxLength(10),]),
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
    if (form.value.fullName === '' || form.value.Email === '') {
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
        fullName: form.value.fullName,
        Email: form.value.Email,
        Username: form.value.Username,
        Password: form.value.Password,
        phoneNumber: form.value.phoneNumber,
        Gender: form.value.Gender,
        State: form.value.State,
        City: form.value.City,
        officeAddress: form.value.officeAddress,
       };

      this.service.create(dataJson).subscribe(async res=>{
      console.log(res);
      this.router.navigateByUrl('/admin-dash');
      const toast = await this.toastCtrl.create({
        message: 'Agent Added Succesfully!',
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
