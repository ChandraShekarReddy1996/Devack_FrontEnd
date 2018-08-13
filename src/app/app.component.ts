import { Component } from "@angular/core";
import { Router } from "../../node_modules/@angular/router";

@Component({
  selector: "app-root",
  template: `
  <div style="text-align:center">
  <h1 class="oldclass">
   {{ title }}
  </h1>
  <router-outlet></router-outlet>
  </div>
  `,
  styles: [
    `
      .oldclass {
        color: blue;
      }
      h1 {
        float: left;
      }

    `
  ]
})
export class AppComponent {
  title = "Booker !";
  constructor(
    private router : Router
  ){}
}
