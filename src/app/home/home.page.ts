import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { AgentService } from '../services/agent.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private service: AgentService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCrtl: ToastController,
    private router: Router
  ) {}

  form = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });



  async login(form: FormGroup) {
    const headers = {
      enctype: 'multipart/form-data;',
      'Content-Type': 'application/json',
      Accept: 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };
    if (form.value.Username === '' || form.value.Password === '') {
      const toast = await this.toastCrtl.create({
        message: 'Please fill all details!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
    }
    else if(form.value.Username === 'Admin' && form.value.Password === 'Admin@123')
    {
      this.router.navigateByUrl('/admin-dash');
      const toast = await this.toastCrtl.create({
        message: 'SuccessFully Login!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });
      form.reset();
      await toast.present();
      async (err: { error: { error: any; }; })=>{
        const toast = await this.toastCrtl.create({
          message: err.error.error,
          duration: 1500,
          icon: 'alert'
        });
        await toast.present();
      };
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
        Username: form.value.Username,
        Password: form.value.Password,
      };

      this.service.login(dataJson).subscribe(async res=>{
      console.log(res);
      this.router.navigateByUrl('/agent-dash');
      const toast = await this.toastCrtl.create({
        message: 'SuccessFully Login!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });
      form.reset();
      await toast.present();
      },async err=>{
        const toast = await this.toastCrtl.create({
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
