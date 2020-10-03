import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements: {
    type: string;
    name: string;
    content: string;
  }[];
  constructor() {
    this.serverElements = [];
  }

  onServerAdded(event: { type: string; name: string; content: string }) {
    this.serverElements.push(event);
  }
}
