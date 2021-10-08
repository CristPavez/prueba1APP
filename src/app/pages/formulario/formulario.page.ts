import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  modalDataResponse: any;

  // variable para mostrar el campo faltante
  field:string="";

  data:any={
    chofer:"",
    origen:"",
    destino:"",
    comuna:"",
    id_comuna:"",
    fecha:"",
    valor: 0
  };

  comunas:any[]=[
    {id:1, comuna:"Cerrillos", valor:3000},
    {id:2, comuna:"Cerro Navia", valor:3100},
    {id:3, comuna:"Conchalí", valor:3200},
    {id:4, comuna:"El Bosque", valor:3300},
    {id:5, comuna:"Estación Central", valor:3400},
    {id:6, comuna:"Huechuraba", valor:3500},
    {id:7, comuna:"Independencia", valor:3600},
    {id:8, comuna:"La Cisterna", valor:3700},
    {id:9, comuna:"La Florida", valor:3800},
    {id:10, comuna:"La Granja", valor:3900},
    {id:11, comuna:"La Pintana", valor:4000},
    {id:12, comuna:"La Reina", valor:4100},
    {id:13, comuna:"Las Condes", valor:4200},
    {id:14, comuna:"Lo Barnechea", valor:4300},
    {id:15, comuna:"Lo Espejo", valor:4400},
    {id:16, comuna:"Lo Prado", valor:4500},
    {id:17, comuna:"Macul", valor:4600},
    {id:18, comuna:"Maipú", valor:4700},
    {id:19, comuna:"Ñuñoa", valor:4800},
    {id:20, comuna:"Padre Hurtado", valor:4900},
    {id:21, comuna:"Pedro Aguirre Cerda", valor:5000},
    {id:22, comuna:"Peñalolén", valor:5100},
    {id:23, comuna:"Pirque", valor:5200},
    {id:24, comuna:"Providencia", valor:5300},
    {id:25, comuna:"Pudahuel", valor:5400},
    {id:26, comuna:"Puente Alto", valor:5500},
    {id:27, comuna:"Quilicura", valor:5600},
    {id:28, comuna:"Quinta Normal", valor:5700},
    {id:29, comuna:"Recoleta", valor:5800},
    {id:30, comuna:"Renca", valor:5900},
    {id:31, comuna:"San Bernardo", valor:6000},
    {id:32, comuna:"San Joaquín", valor:6100},
    {id:33, comuna:"San José de Maipo", valor:6200},
    {id:34, comuna:"San Miguel", valor:6300},
    {id:35, comuna:"San Ramón", valor:6400},
    {id:36, comuna:"Santiago", valor:6500}
  ];
  

  //constructor(public toastController: ToastController) {}
  //constructor(public alertController: AlertController) {
  constructor(
    public modalCtrl: ModalController,
    public toastController: ToastController,
    public alertController: AlertController) {}


  // LIMPIAR LOS DATOS DEL FORMULARIO
  limpiar(){
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})
    }
  }


  // USADO PARA PROBAR LOS DATOS INGRESADOS
  mostrar(){
    this.guardarValoresComuna();
    //(this.data.nombre!="" && this.data.apellido!="") && 
    this.presentAlert("Destino","Su destino es: <br>"+this.data.destino+"<br><br> Comuna de: <br>"+this.data.comuna+"<br><br> Fecha del viaje: <br>"+this.data.fecha+"<br><br> Valor: "+this.data.valor);
  }


  ingresar(){
    this.guardarValoresComuna();
    if(this.validateModel(this.data)){
      // this.presentToast("Bienvenido");
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }


  // ESTE POR ALGUNA RAZON NO FUNCIONO :/
  // guardarValoresComuna(){
  //   for(let i=1; i < this.comunas.length; i++){
  //     if(this.data.id_comuna == this.comunas[i].id){
  //       //this.data.valor = this.comunas[i].valor
  //     }
  //   }
  // }


  // ALMACENA LOS VALORES 'NOMBRE' Y 'VALOR' DE LA LISTA DE OBJETOS COMUNAS
  guardarValoresComuna(){
    for (let i in this.comunas) {

      if(this.data.id_comuna == this.comunas[i].id){
        this.data.comuna = this.comunas[i].comuna     // toma el valor comuna de Comunas y lo guarda en Data
        this.data.valor = this.comunas[i].valor       // toma el valor del precio de Comunas y lo guarda en data
      }
    }
  }
  

  validateModel(model:any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value=="") {
        // Se asigna el campo faltante
        this.field=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }



  //PARA MOSTRAR UNA ALERTA
  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }



  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }


  ngOnInit() {
  }

}
