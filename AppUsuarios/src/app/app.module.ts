import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { CardUsuarioComponent } from './components/list-usuarios/card-usuario/card-usuario.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListUsuariosComponent,
    LayoutComponent,
    CardUsuarioComponent,
    UsuarioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
