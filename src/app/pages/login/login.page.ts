import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  data: any = {
    username: "",
    password: ""
  }

  async LoginAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: [, {
        text: 'Start a trip',
        handler: () => {
          this.router.navigate(['/drivers'])

        }
      }]
    });

    await alert.present();
  }


  login() {
    if (this.data.nombre != "" && this.data.password != "") {
      this.LoginAlert("Welcome to TellevoAPP ", "Your user name is " + this.data.username);

    }


  }




}
