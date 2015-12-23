import {Component} from "angular2/core";
import {Router} from 'angular2/router';
import {Order} from "./order";

@Component({
  selector: "place-order",
  templateUrl: "./app/place-order.html"
})

export class PlaceOrderComponent {
  public order: Order = {name: "", item: ""};

  constructor(private _router: Router) { }

  place(order: Order) {
    this._router.navigate(['Options']);
  }
}
