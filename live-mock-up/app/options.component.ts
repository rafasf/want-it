import {Component} from "angular2/core";
import {Router} from 'angular2/router';

@Component({
  selector: "options",
  templateUrl: "./app/options.html"
})

export class OptionsComponent {
  public options = ["want", "get", "rank"];

  constructor(private _router: Router) { }

  select(option: string) {
    if (option === "want") {
      this._router.navigate(['PlaceOrder']);
    } else if (option === "get") {
      this._router.navigate(['Orders']);
    } else if (option === "rank") {
      this._router.navigate(['Heros']);
    }
  }
}
