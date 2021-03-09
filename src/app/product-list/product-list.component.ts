import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  //[x: string]: any;
  products!: Product[];
  productsSubscription!: Subscription;

  constructor(private productsService: ProductsService,
              private router: Router ) { }

  ngOnInit() {
    this.productsSubscription = this.productsService.productsSubject.subscribe(
      (products: Product[]) => {
        this.products = products;
        console.log(products);
      }
    );
    this.productsService.getProducts();
    this.productsService.emitProducts();
  }

  onNewProduct(){
    this.router.navigate(['/products' , 'new']);
  }

  onDeleteProduct(product: Product){
    this.productsService.removeProduct(product);
  }

  onProductDetailView(id:number){
    this.router.navigate(['/products/detail', id]);
  }

  ngOnDestroy(){
    this.productsSubscription.unsubscribe();
  }
}

