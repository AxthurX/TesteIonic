import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
//cria as entradas no inicio
  componentes: Componente[] = [
    {
      icon: 'body',
      name: 'Folha de Ações',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'apps-outline',
      name: 'Botões e Rotas',
      redirectTo: '/botoes'
    },
    {
     icon: 'card',
     name: 'Cartões',
     redirectTo: '/card'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
