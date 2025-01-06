import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  animation = 'rubberBand';
  animationState = false;
  animationWithState = false;
  hueBtnState = false;

  goList() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['list']);
    }, 2000);
  }
}
