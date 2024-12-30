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
        this.listRegalos = resp;
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
    setTimeout(() => {
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
              alert(resp.status);
            },
            error: (error) => {
              console.log(error);
              this.spinner.hide();
            },
          });
      } else {
        this.showAlert1 = true;
      }
    }, 5000);
  }

  confirmarRegalo() {
    if (this.selectCPanales !== null) {
      this.showAlert2 = false;
    } else {
      this.showAlert2 = true;
    }
  }
}
