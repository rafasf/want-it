import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {OptionsComponent} from "./options.component";
import {PlaceOrderComponent} from "./place-order.component";
import {OrdersComponent} from "./orders.component";
import {HerosComponent} from "./heros.component";

@Component({
  selector: "want-it",
  templateUrl: "./app/want-it.html",
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: "/options", name: "Options", component: OptionsComponent, useAsDefault: true },
  { path: "/place-order", name: 'PlaceOrder', component: PlaceOrderComponent },
  { path: "/orders", name: 'Orders', component: OrdersComponent },
  { path: "/heros", name: 'Heros', component: HerosComponent }
])

export class WantItComponent {
  public title = "- want-it -";
}
