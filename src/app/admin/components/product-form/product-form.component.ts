import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm = this.fb.group({
    title: [null, Validators.required],
    description: null,
    price: [null, Validators.required],
    image: ['']
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private productService: ProductsService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.productService.getProductById(id)
      .subscribe(product => {
        this.productForm.patchValue({...product});
      });
    });
  }

  onSubmit() {
    // let
  }
}
