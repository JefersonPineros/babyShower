import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  animation = 'rubberBand';
  animationState = false;
  animationWithState = false;
  hueBtnState = false;

  goList() {
    this.router.navigate(['list']);
  }
}
