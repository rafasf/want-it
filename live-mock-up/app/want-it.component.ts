import {Component} from "angular2/core"

@Component({
  selector: "want-it",
  templateUrl: "./app/want-it.html"
})

export class WantItComponent {
  public title = "- want-it -";
  public options = ["want", "pick up", "rank"];
}
