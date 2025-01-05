import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    // audio!.loop = true;
    // audio!.volume = 75;
  }

  ngOnInit(): void {}

  title = 'BabyShowerFront';

  abrirCarta() {
    let audio = document.getElementById('harry-mp3') as HTMLAudioElement;
    audio.volume = 0.6;
    audio.loop = true;
    audio?.play();

    const coverElement = document.querySelector('.cover');
    coverElement?.classList.add('open-cover');

    const parperOpen = document.querySelector('.paper');
    parperOpen?.classList.add('open-paper');

    const upBuho = document.querySelector('.buho');
    upBuho?.classList.add('up-buho');

    setTimeout(() => {
      this.changePage();
    }, 4000);
  }

  changePage() {
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
