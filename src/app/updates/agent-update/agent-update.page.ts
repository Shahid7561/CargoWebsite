import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-agent-update',
  templateUrl: './agent-update.page.html',
  styleUrls: ['./agent-update.page.scss'],
})
export class AgentUpdatePage implements OnInit {
  alertController: any;
  datauser: any;

  constructor(
    private service: AgentService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: ActivatedRoute,
    private navRouter: Router
  ) { }

  form: any = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    fullName: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    State: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    City: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    officeAddress: new FormControl('', [Validators.required, Validators.maxLength(10),])
  });



  ngOnInit(): void {
    this.service.check(this.router.snapshot.params['id']).subscribe((res: any) => {
      this.form = new FormGroup({
        Username: new FormControl(res['Username']),
        fullName: new FormControl(res['fullName']),
        Email: new FormControl(res['Email']),
        phoneNumber: new FormControl(res['phoneNumber']),
        State: new FormControl(res['State']),
        City: new FormControl(res['City']),
        officeAddress: new FormControl(res['officeAddress'])
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
      Username: form.value.Username,
      fullName: form.value.fullName,
      Email: form.value.Email,
      phoneNumber: form.value.phoneNumber,
      State: form.value.State,
      City: form.value.City,
      officeAddress: form.value.officeAddress,
    };

    this.service.updates(dataJson).subscribe(async res => {
      console.log(res);
      this.navRouter.navigateByUrl('/admin-dash');
      const toast = await this.toastCtrl.create({
        message: 'Agent update Succesfully!',
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


