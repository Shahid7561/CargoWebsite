import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.page.html',
  styleUrls: ['./admin-dash.page.scss'],
})
export class AdminDashPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are You Sure Logout!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: async () => {
            this.handlerMessage = 'Alert confirmed';
            this.router.navigateByUrl('/home');
            const toast = await this.toastController.create({
              message: 'SuccessFully Logout!',
              duration: 1500,
              icon: 'checkmark-circle-outline'
            });

            await toast.present();
          },
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
