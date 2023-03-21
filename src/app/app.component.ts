import { Component } from '@angular/core';
import { CustomerSelect } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cart: CustomerSelect[] = []

  addToCart(added: CustomerSelect) {
    console.info('>>> app.component selected: ', added)

    this.cart.push(added)
  }

  deleteItem(index: number) {
    // Start at index 1, delete 1 item
    this.cart.splice(index, 1)
  }
}

