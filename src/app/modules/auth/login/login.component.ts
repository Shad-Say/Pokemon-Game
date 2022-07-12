import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  displayValues = () => {
    this.AuthService.getUsers(this.loginForm.value).subscribe((response) => {
      localStorage.setItem(
        'token',
        (Object(response).data.token)
      );
      console.log(response);
    });
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/pokemon');
    }
  };

  ngOnInit(): void {}
}