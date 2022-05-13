import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  show: boolean = false

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {

    if (this.loginForm.valid) {
      this.router.navigate(['/admin/home'])
    }
  }
  showpassword() {
    this.show = !this.show;
  }
}
