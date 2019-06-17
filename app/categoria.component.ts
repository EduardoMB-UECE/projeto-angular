import { Component, TestabilityRegistry } from '@angular/core';
import { Categoria } from './model/categoria.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from './service/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  
  categoria : Categoria = new Categoria()

  categorias : Categoria[] = [];  
  
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private categoriaService: CategoriaService) {  } 

  ngOnInit(): void {
     this.getCategorias();
     this.categoria = new Categoria()
     this.categoria.Id = 0
  }
  
  getCategorias(): void {
    this.categoriaService.getCategorias()
      .subscribe(response => {
        if (response.Status == 0) {
          this.categorias = response.Categorias
        }
        else {
          alert(response.Detalhes)
        }
  });
 }

 cadastrar(): void {
  if (this.categoria.Id == 0){
    this.inserir()
  }
  else {
    this.atualizar()
  }
 }

 inserir(): void {
  this.categoriaService.addCategoria(this.categoria)
  .subscribe(response => {
    if (response.Status == 0) {
      this.getCategorias();
      this.categoria = new Categoria()
      this.categoria.Id = 0
    }
    else {
      alert(response.Detalhes)
    }
  });
}

atualizar(): void {
  this.categoriaService.updateCategoria(this.categoria)
  .subscribe(response => {
    if (response.Status == 0) {
      this.getCategorias()
      this.categoria = new Categoria()
      this.categoria.Id = 0
    }
    else {
      console.log(response.Detalhes)
    }
  });
}

  editar(categoria) : void {
    this.categoria = new Categoria()
    this.categoria.Id = categoria.Id
    this.categoria.Nome = categoria.Nome
  }

  remover(id): void {
    this.categoriaService.deleteCategoria(id)
    .subscribe(response => {
      if (response.Status == 0) {
        this.getCategorias();
        this.cancelar()
      }
      else {
        alert(response.Detalhes)
      }
    });
  }
  
cancelar() : void {
  this.categoria = new Categoria()
  this.categoria.Id = 0
}
  sair(){    
    this.router.navigate([''], 
      {relativeTo:this.route});  
  }
  
}