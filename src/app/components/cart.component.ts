import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerSelect } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cart : CustomerSelect[] = []

  @Output()
  onDelete = new Subject<number>()

  deleteItem(i: number) {
    console.info(`To delete: ${i}`)
    this.onDelete.next(i);
  }

}
