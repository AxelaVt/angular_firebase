import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private productsService: ProductsService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.productForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  onSaveProduct() {
    const name = this.productForm.get('nom')?.value;  // les noms entre '' doivent correspondre aux noms de contôles dans le formulaire (formControlName)
    console.log(name);
    const description = this.productForm.get('description')?.value;
    const newProduct = new Product(name, description);
    this.productsService.createNewProduct(newProduct);
    this.router.navigate(['/products']);
  }

}
