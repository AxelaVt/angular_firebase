import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;

  products: Product[] = [];
  productsSubject = new Subject<Product[]>();

  constructor() {
    this.getProducts();
   }

  emitProducts(){
    this.productsSubject.next(this.products);
  }

  saveProducts(){
    firebase.database().ref('/products').set(this.products);
  }

  getProducts(){
    firebase.database().ref('/products').on('value', (data: DataSnapshot) =>
    this.products = data.val() ? data.val() : []);
    console.log(this.products);
  }

  getProduct(id : number){
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/products/'+id).once('value').then(
          (data: DataSnapshot) => {
            console.log(data.val());
            resolve(data.val());
          },
          (error: any) =>{
            reject(error);
          }
        );
      }
    );
  }

  createNewProduct(newproduct : Product){
    this.products.push(newproduct);
    this.saveProducts();
    this.emitProducts();
  }

  removeProduct(selectedproduct: Product){
  const productIndexToRemove = this.products.findIndex(
    (productElement) => {
      if(productElement === selectedproduct){
        return true;
      }else{
        return '';
      }
    }
  );
  console.log(productIndexToRemove);
  this.products.splice(productIndexToRemove, 1);
  this.saveProducts();
  this.emitProducts();
  }
  
}


