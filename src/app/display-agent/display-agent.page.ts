import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-display-agent',
  templateUrl: './display-agent.page.html',
  styleUrls: ['./display-agent.page.scss'],
})
export class DisplayAgentPage implements OnInit {

  datauser :any;
  handlerMessage = '';
  roleMessage = '';
  constructor(private service:AgentService,
    private alerts:AlertController,
    private toasts:ToastController
    ) { }


  ngOnInit() {
    this.displayData();
  }



  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
  }

  async deleteAgent(id:string) {
    const alert = await this.alerts.create({
      header: 'Delete!!',
      subHeader: 'Are You Sure to Delete this Record!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            this.service.deletes(id).subscribe(async ()=>{
                console.log('SuccessFully Deleted');
                const toast = await this.toasts.create({
                  message: 'SuccessFully Deleted!',
                  duration: 1500,
                  icon: 'globe'
                });

                this.ngOnInit();

                await toast.present();
            });
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}


