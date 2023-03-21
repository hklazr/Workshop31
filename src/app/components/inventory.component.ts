import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerSelect, Inventory } from '../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  @Output()
  onAdd = new Subject<CustomerSelect>();

  inventory : Inventory[] = [
    { name: 'Apple', image: '/assets/fruits/apple.png' },
    { name: 'Acorn Squash', image: '/assets/fruits/acorn_squash.png' },
    { name: 'Bell Pepper', image: '/assets/fruits/bell_pepper.png' },
    { name: 'Blueberries', image: '/assets/fruits/blueberries.png' },
  ];

  quantity = 0;

  // addQuantity(i : number) {
  //   this.quantity += i;
  // }


  addToCart(name: string, image: string) {

    const added = {
      name,
      image,
      quantity: this.quantity
    } as CustomerSelect

    this.onAdd.next(added);

        // // Reset the quantity after adding an item to the cart
        // this.quantity = 0;
      }
    }
    