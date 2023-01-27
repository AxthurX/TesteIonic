import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/abas/abas.module').then((m) => m.AbasModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/abas/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'fotos',
    loadChildren: () =>
      import('./pages/abas/modais/fotos/fotos.module').then(
        (m) => m.FotosModule
      ),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./pages/abas/modais/maps/maps.module').then(
        (m) => m.MapsModule
      ),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./pages/abas/modais/input/input.module').then(
        (m) => m.InputPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
