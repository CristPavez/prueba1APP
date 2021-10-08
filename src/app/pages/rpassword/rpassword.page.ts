import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rpassword',
  templateUrl: './rpassword.page.html',
  styleUrls: ['./rpassword.page.scss'],
})
export class RpasswordPage implements OnInit {
  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  data: any = {
    email: "",
  
  }

  async LoginAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: [, {
        text: 'OK',
        handler: () => {
          this.router.navigate(['/login'])

        }
      }]
    });

    await alert.present();
  }





  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  send() {

    if (this.data.email != "") {
      this.LoginAlert("Your password was sent", "Check your email: " + this.data.email);

    } 

  }


}
