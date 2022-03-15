import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-store-login',
  templateUrl: './store-login.component.html',
  styleUrls: ['./store-login.component.scss']
})
export class StoreLoginComponent implements OnInit {
  loginForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required]
  });
  hide:boolean = true;

  constructor(private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private productService: ProductsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // let
  }

}
