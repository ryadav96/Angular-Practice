import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() sendServerDetails = new EventEmitter<{
    type: string;
    name: string;
    content: string;
  }>();
  constructor() {}

  ngOnInit(): void {}

  onAddServer(server: HTMLInputElement, content: HTMLInputElement) {
    const data = {
      type: "server",
      name: server.value,
      content: content.value,
    };
    this.sendServerDetails.emit(data);
  }

  onAddBlueprint(server: HTMLInputElement, content: HTMLInputElement) {
    const data = {
      type: "blueprint",
      name: server.value,
      content: content.value,
    };
    this.sendServerDetails.emit(data);
  }
}
