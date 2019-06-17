import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { LoginComponent } from './login.component';
import { CategoriaComponent } from './categoria.component';
import { ProdutoComponent } from './produto.component';

const routes: Routes = [
  { path: '', component: InicioComponent},  
  { path: 'login', component: LoginComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'produto', component: ProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
