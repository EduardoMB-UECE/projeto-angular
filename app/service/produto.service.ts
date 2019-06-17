import { Injectable } from '@angular/core';
import { Produto }  from '../model/produto.model';
import { Categoria } from '../model/categoria.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProdutoService {	
  
  private url = 'http://localhost:61520/api/produto/';
  
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 
    'application/x-www-form-urlencoded' })
  };

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any> {
    return this.http.get<any>(this.url, this.httpOptions)
  }
  
  getProdutoPorId(id : number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id, this.httpOptions)
  }
  
  addProduto(produto: Produto): Observable<any> {
    let u = new URLSearchParams();
    if (produto.Nome == null){
      produto.Nome = ''
    }
    if (produto.Categoria_Nome == null){
      produto.Categoria_Nome = ''
    }

    u.set('Nome', produto.Nome.toString());
    u.set('Preco', produto.Preco.toString());
    u.set('Categoria_Id', produto.Categoria_Id.toString());
    u.set('Categoria_Nome', produto.Categoria_Nome.toString());
    return this.http.post<any>(this.url, u.toString(), this.httpOptions)
  }
  
  updateProduto(produto: Produto): Observable<any> {
    let u = new URLSearchParams();
    u.set('Id', produto.Id.toString());
    u.set('Nome', produto.Nome.toString());
    u.set('Preco', produto.Preco.toString());
    u.set('Categoria_Id', produto.Categoria_Id.toString());
    u.set('Categoria_Nome', produto.Categoria_Nome.toString());
    let url_ = this.url + '/' + produto.Id
    return this.http.put<any>(url_, u.toString(), this.httpOptions)
  }
  
  deleteProduto(id: Number): Observable<any> {
    console.log('delentando no servico')
    let url_ = this.url + '/' + id
    return this.http.delete<any>(url_, this.httpOptions)
  }
   
}
