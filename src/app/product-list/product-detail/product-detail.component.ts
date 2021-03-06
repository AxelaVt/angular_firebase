import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router) {}

  ngOnInit() {
    this.product = new Product('', '');
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.productsService.getProduct(+id).then(
      (selectedProduct : any) => {
        console.log(selectedProduct);
        this.product = selectedProduct;
      }
    );
  }

  onBack() {
    this.router.navigate(['/products']);
  }

}
