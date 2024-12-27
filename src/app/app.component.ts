import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'BabyShowerFront';

  abrirCarta() {
    const coverElement = document.querySelector('.cover');
    coverElement?.classList.add('open-cover');

    const parperOpen = document.querySelector('.paper');
    parperOpen?.classList.add('open-paper');

    const upBuho = document.querySelector('.buho');
    upBuho?.classList.add('up-buho');
  }

  changePage() {
    console.log('Hola mundo');

    const closePage = document.querySelector('.container');
    closePage?.classList.add('close-page');

    setTimeout(() => {
      closePage?.classList.add('final-close');
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 200);
    }, 3050);
  }
}
