import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
import {AuthService} from "./auth.service";


const rutas: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        data: {shouldDetach: true}
      },
    ]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
