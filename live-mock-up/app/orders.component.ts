import {Component} from "angular2/core";
import {Router} from 'angular2/router';
import {Order} from "./order";

@Component({
  selector: "orders",
  templateUrl: "./app/orders.html"
})

export class OrdersComponent {
  public orders: orders[] = [
  { name: "Bob", item: "Double Espresso" },
  { name: "Mary", item: "Small Vanilla Latte" },
  { name: "John", item: "Medium Regular Coffee" }];

  constructor(private _router: Router) { }

  done() {
    this._router.navigate(['Options']);
  }
}
