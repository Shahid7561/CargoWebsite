import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgentService } from 'src/app/services/agent.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  showPassword=false;
 showPassword2=false;
 passwordToggleIcon = "eye-outline";

 passwordToggleIcon2 = "eye-outline";
  constructor(
    private service:AgentService,
    private toastCrtl: ToastController,
    private router: Router) { }

  form = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(50),]),
  });

  ngOnInit() {
  }


 togglePassword():void{
  this.showPassword = !this.showPassword;

  if(this.passwordToggleIcon=="eye-outline"){
    this.passwordToggleIcon="eye-off-outline";
  }else{
    this.passwordToggleIcon="eye-outline";
  }
}

togglePassword2():void{
  this.showPassword2 = !this.showPassword2;

  if(this.passwordToggleIcon2=="eye-outline"){
    this.passwordToggleIcon2="eye-off-outline";
  }else{
    this.passwordToggleIcon2="eye-outline";
  }
}


async onSubmit(form: FormGroup) {
  const headers = {
    enctype: 'multipart/form-data;',
    'Content-Type': 'application/json',
    Accept: 'plain/text',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
  };
  if (form.value.Password === '' && form.value.Username === '') {
    const toast = await this.toastCrtl.create({
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
      Username: form.value.Username,
      Password: form.value.Password,
    };

    this.service.updates(dataJson).subscribe(async res=>{
    console.log(res);
    this.router.navigateByUrl('/home');
    const toast = await this.toastCrtl.create({
      message: 'Password Change Succesfully!',
      duration: 1500,
      icon: 'checkmark-circle-outline'
    });
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
