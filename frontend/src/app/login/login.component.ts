import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }  

  usuario: any;

/*ngOnInit(): void {
  this.authService.getUsuario(1).subscribe(data => {
    this.usuario = data;
  });
}
*/
}
