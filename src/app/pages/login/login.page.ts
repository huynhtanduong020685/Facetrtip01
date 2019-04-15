import { Component} from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { LoadingController, Platform ,AlertController, NavController} from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  FB_APP_ID: number = 313572042638549;

  constructor(
		public navCtrl: NavController,
    private fb: Facebook,
    private nativeStorage: NativeStorage,
    public alertController: AlertController,

    private loadingController:LoadingController,
    private platform: Platform,
    private router: Router

  ) {}
  
  async doFbLogin() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    //the permissions your facebook app needs from the user
    const permissions = ["public_profile", "email"];

    this.fb.login(permissions)
    .then(response => {
      let userId = response.authResponse.userID;
      
      this.fb.api("/me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture)", permissions)
      .then(user => {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        this.nativeStorage.setItem('facebook_user',
        {
          name: user.name,
          email: user.email,
          picture: user.picture
        })
        .then(() => {
          this.router.navigate(["/user"]);
          loading.dismiss();
        }, error => {
          console.log(error);
          loading.dismiss();
        })
      })
    }, error =>{
      console.log(error);
      if(!this.platform.is('cordova')){
        this.presentAlert();
      }
      loading.dismiss();
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }


	async presentLoading(loading) {
		return await loading.present();
	}
  

}
