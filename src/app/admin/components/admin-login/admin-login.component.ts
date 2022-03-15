import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm = this.fb.group({

  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

}
