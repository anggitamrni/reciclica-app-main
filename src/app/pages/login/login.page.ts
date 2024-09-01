import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Impor Router untuk navigasi
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoginPageForm } from './login.page.form';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { hide, show } from 'src/store/loading/loading.actions';
import { ToastController } from '@ionic/angular';
import { LoginState } from 'src/store/login/LoginState';
import { AuthService } from 'src/app/services/auth/auth.service';
import { recoverPassword, recoverPasswordSuccess } from 'src/store/login/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>,
    private toastController: ToastController, private authService: AuthService) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.store.select('login').subscribe(loginState => {
      this.onIsRecoveredPassword(loginState);
      this.onIsRecoverinPassword(loginState);
    })
    }

    private onIsRecoverinPassword(loginState: LoginState){
      if (loginState.isRecoveredPassword){
        this.store.dispatch(show());

        this.authService.recoverEmailPassword(this.form.get('email').value).subscribe(() => {
          this.store.dispatch(recoverPasswordSuccess());
        })
      }
    }
    
    private async onIsRecoveredPassword(loginState: LoginState){
      if (loginState.isRecoveredPassword){
        this.store.dispatch(hide());
        const toaster = await this.toastController.create({
          position: "bottom",
          message: "Recovery email sent",
          color: "primary"
        });
        toaster.present();
      }
    }


  forgotEmailPassword(){
    this.store.dispatch(recoverePassword());
  }

  login(){
    this.router.navigate(['home']);
  }

  register() {
    this.router.navigate(['register']);
  }

}
function recoverePassword(): any {
  throw new Error('Function not implemented.');
}

