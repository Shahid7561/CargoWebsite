import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.page.html',
  styleUrls: ['./user-update.page.scss'],
})
export class UserUpdatePage implements OnInit {

  constructor(
    private service: UserService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: ActivatedRoute,
    private navRouter: Router
  ) { }

  form: any = new FormGroup({
    Fullname: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Phone: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    Gender: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    DOB: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });

  ngOnInit(): void {
    this.service.check(this.router.snapshot.params['id']).subscribe((res:any)=>{
        this.form = new FormGroup({
        Fullname : new FormControl(res['Fullname']),
        Phone : new FormControl(res['Phone']),
        Email : new FormControl(res['Email']),
        Gender : new FormControl(res['Gender']),
        DOB : new FormControl(res['DOB']),
      })
      // console.log(res);
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
      Fullname: form.value.Fullname,
      Phone: form.value.Phone,
      Email: form.value.Email,
      Gender: form.value.Gender,
      DOB: form.value.DOB,

    };

    this.service.updates(dataJson).subscribe(async res => {
      console.log(res);
      this.navRouter.navigateByUrl('/admin-dash');
      const toast = await this.toastCtrl.create({
        message: 'User update Succesfully!',
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
