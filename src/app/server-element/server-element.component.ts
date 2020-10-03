import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 @Input('servElement') element: {type: string, content: string, name: string};
  constructor() { }

  ngOnInit(): void {
  }

}
