import { Component, ViewChild, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._authService.login();
    this.router.navigate([ '/' ]);
  }
}
