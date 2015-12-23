import {Component} from "angular2/core";
import {Router} from 'angular2/router';
import {Hero} from './app/hero'

@Component({
  selector: "heros",
  templateUrl: "./app/heros.html"
})

export class HerosComponent {
  public heros: Hero[] = [
  { name: "Bob", pickups: 100},
  { name: "Mary", pickups: 50 },
  { name: "John", pickups: 5 }];

  constructor(private _router: Router) { }

  done() {
    this._router.navigate(['Options']);
  }
}

