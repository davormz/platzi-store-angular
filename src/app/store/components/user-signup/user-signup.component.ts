import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  signupForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
    rePassword: [null, Validators.required],
    firstName: [null],
    lastName: [null],
    email: [null, Validators.required],
    phone: [null],
  });
  hide:boolean = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
