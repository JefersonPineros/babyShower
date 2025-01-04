import { Component, OnInit } from '@angular/core';
import { BabyShowerService } from '../../services/baby-shower.service';
import { ListaRegalos } from '../../models/lista-regalos';
import { ListaCategorias } from '../../models/listaCategorias';
import { Invitados } from '../../models/invitados';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  public listRegalos: ListaRegalos[];
  public categorias: string[];
  public listaC: ListaCategorias[];
  public selectC: number | null = null;
  public selectCPanales: number | null = null;

  public confirmarInvitado: Invitados = new Invitados();
  public selectRegalo: boolean = false;
  public showAlert1: boolean = false;
  public showAlert2: boolean = false;

  public regalosSeleccionados: ListaRegalos[] = [];

  public finalPage: boolean = false;

  constructor(
    private babyShowerService: BabyShowerService,
    private spinner: NgxSpinnerService
  ) {
    this.listRegalos = [];
    this.categorias = [];
    this.listaC = [
      {
        categoria: 'Ropita',
        icon: './assets/img/sombrero.png',
      },
      {
        categoria: 'Baño y aseo',
        icon: './assets/img/Jabon.png',
      },
      {
        categoria: 'Alimentación',
        icon: './assets/img/comida.png',
      },
      {
        categoria: '¡A dormir!',
        icon: './assets/img/zzz.png',
      },
      {
        categoria: '¡Vamos de paseo!',
        icon: './assets/img/escoba.png',
      },
      {
        categoria: 'Diversión y otros',
        icon: './assets/img/Varita.png',
      },
      {
        categoria: 'Pañales y Pañitos *',
        icon: './assets/img/pañal.png',
      },
    ];
  }

  ngOnInit(): void {
    this.spinner.show();

    this.babyShowerService.getListItems().subscribe({
      next: (resp) => {
        this.listRegalos = resp.sort((a, b) => {
          return a.id! - b.id!;
        });
        this.spinner.hide();
      },
      error: (error) => {
        console.log(error);
        this.spinner.hide();
      },
    });
  }

  confirmarAsistencias() {
    this.spinner.show();

    if (
      this.confirmarInvitado.nombre !== '' &&
      this.confirmarInvitado.nombre !== undefined
    ) {
      this.selectRegalo = true;
      this.babyShowerService
        .insertarInvitado(this.confirmarInvitado)
        .subscribe({
          next: (resp) => {
            this.spinner.hide();
            console.log(resp);
          },
          error: (error) => {
            this.spinner.hide();
            console.error(error);
          },
        });
    } else {
      this.showAlert1 = true;
      this.spinner.hide();
    }
  }

  confirmarRegalo() {
    if (this.selectCPanales !== null) {
      this.showAlert2 = false;

      let listaRe: ListaRegalos[];

      listaRe = this.listRegalos.filter((item) => {
        return [this.selectC, this.selectCPanales].includes(item.id!);
      });

      this.babyShowerService.updateItem(listaRe).subscribe({
        next: (resp) => {
          console.log(resp);
          this.regalosSeleccionados = listaRe;
        },
      });

      let body = document.querySelector('body');
      body!.style.backgroundImage = 'none';
      body!.style.backgroundColor = 'black';

      this.finalPage = true;
    } else {
      this.showAlert2 = true;
    }
  }
}
