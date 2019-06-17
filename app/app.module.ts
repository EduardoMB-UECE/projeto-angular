import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from './categoria.component';
import { InicioComponent } from './inicio.component';
import { LoginComponent } from './login.component';
import { RaizComponent } from './raiz.component';
import { ProdutoComponent } from './produto.component';

@NgModule({
  declarations: [
    CategoriaComponent,
    InicioComponent,
    LoginComponent,
    RaizComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RaizComponent]
})
export class AppModule { }
