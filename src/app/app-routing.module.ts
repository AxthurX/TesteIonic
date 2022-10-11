import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActionSheetPageModule } from './pages/action-sheet/action-sheet.module';

const routes: Routes = [
{path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)},
{path: 'action-sheet', loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)},
{path: 'alert', loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)},
{path: 'item-group', loadChildren: () => import('./pages/item-group/item-group.module').then( m => m.ItemGroupPageModule)},
{path: 'avatar', loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule)},
{path: 'botoes', loadChildren: () => import('./pages/botoes/botoes.module').then( m => m.BotoesPageModule)},
{path: 'card', loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)},
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
