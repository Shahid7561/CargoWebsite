import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage{

  constructor(
    private service: AgentService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCrtl: ToastController,
    private router: Router
    ) { }

  form = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });


  async check(form: FormGroup) {
    const headers = {
      'enctype': 'multipart/form-data;',
      'Content-Type': 'application/json',
      'Accept': 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };
    if (form.value.Username === '') {
      const toast = await this.toastCrtl.create({
        message: 'Please fill all details!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
    }
    else {
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
        Username: form.value.Username
      };

      this.service.updates(dataJson).subscribe(async res=>{
      console.log(res);
      this.router.navigateByUrl('/change-password');

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
