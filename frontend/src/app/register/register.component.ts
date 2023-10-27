import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService) { }  

  register() {
    this.authService.register(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        alert('Usuario registrado con éxito');
      },   
      (Error: any) => {
        console.error(Error);
        alert('Error al registrar el usuario');
      }
    );
  }
}
