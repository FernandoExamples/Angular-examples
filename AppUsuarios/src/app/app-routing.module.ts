import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: LayoutComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ListUsuariosComponent,
      },
      {
        path: 'usuario/:id',
        component: UsuarioComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
