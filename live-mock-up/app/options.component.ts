import {Component} from "angular2/core";
import {Router} from 'angular2/router';

@Component({
  selector: "options",
  templateUrl: "./app/options.html"
})

export class OptionsComponent {
  public options = ["want", "pick up", "rank"];

  constructor(private _router: Router) { }

  select(option: string) {
    if (option === "want") {
      this._router.navigate(['PlaceOrder']);
    }
  }
}
