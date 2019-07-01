import {Component, Input, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ConnectionService } from '../identity/connection-service';

@Component({
  templateUrl: "app-layout.component.html",
  selector: "app-layout"
})
export class AppLayoutComponent implements OnInit {
  @Input()
  title: string;

  constructor(private appTitle: Title) {
  }

  ngOnInit(): void {
    if (this.title) {
      this.appTitle.setTitle(this.title);
    }
  }


}
