import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[] = [];

  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  constructor() {

    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.totalItemsSubject.next(this.items.length);
    }

  }

  addToCart(product: any) {

    this.items.push(product);

    localStorage.setItem('cart', JSON.stringify(this.items));

    this.totalItemsSubject.next(this.items.length);

  }

  getItems() {

    return this.items;

  }

  removeItem(index: number) {

    this.items.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(this.items));

    this.totalItemsSubject.next(this.items.length);

  }

  getTotal() {

    return this.items.reduce((total, item) => total + (item.precioFinal || item.precio), 0);

  }

  clearCart() {

    this.items = [];

    localStorage.removeItem('cart');

    this.totalItemsSubject.next(0);

  }

}