import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
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
    console.log(this.loginForm.value);
    this.AuthService.getUsers(this.loginForm.value).subscribe(
      (response: any) => {
        localStorage.setItem('token', JSON.stringify(response.token));
        console.log(response);
      }
    );
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/home');
    }
  };

  ngOnInit(): void {}
}
