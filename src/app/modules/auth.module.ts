import { AuthService } from './../services/auth.service';
import { AuthTabsComponent } from './../components/auth-tabs/auth-tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';

@NgModule({
  declarations: [AuthTabsComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [AuthTabsComponent, LoginComponent, SignupComponent],
  providers: [AuthService]
})
export class AuthModule {}
