import { Component } from "@angular/core";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { NavComponent } from "../../components/nav/nav.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [SideBarComponent, NavComponent, RouterOutlet],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {}
