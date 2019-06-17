import { Component, OnInit } from '@angular/core';
import { Produto } from './model/produto.model';
import { Categoria } from './model/categoria.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './service/produto.service';
import { CategoriaService } from './service/categoria.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

	produto : Produto = new Produto()

	produtos : Produto[] = [];
	categorias : Categoria[] = [];

	constructor(private route: ActivatedRoute, 
    private router: Router,
    private produtoService: ProdutoService, private categoriaService: CategoriaService) { }

	ngOnInit() {
		this.getProdutos();
		this.getCategorias();
    	this.produto = new Produto()
		this.produto.Id = 0
		this.produto.Categoria_Id = 0
	}

	getProdutos(): void {
	    this.produtoService.getProdutos()
	      .subscribe(response => {
	        if (response.Status == 0) {
	          this.produtos = response.Produtos
	        }
	        else {
	          alert(response.Detalhes)
	        }
		});
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
		this.categoriaService.getCategoriaPorId(this.produto.Categoria_Id).subscribe(response => {
	        if (response.Status == 0) {
	        	let categoria = response.Categorias[0]
	        	this.produto.Categoria_Id = categoria.Id
	        	console.log(this.produto)
	        	if (this.produto.Id == 0){
		    		this.inserir()
				}
		  		else {
		    		this.atualizar()
				}
	        } else {
	        	alert(response.Detalhes)
			}
		});
		
	}

	inserir(): void {
		this.produtoService.addProduto(this.produto)
  			.subscribe(response => {
	    	
	    	if (response.Status == 0) {
	      		this.getProdutos();
	      		this.produto = new Produto()
	      		this.produto.Id = 0
	      	} else {
	      		alert(response.Detalhes)
	    	}
  		});
	}

	atualizar(): void {
		this.produtoService.updateProduto(this.produto)
  			.subscribe(response => {
			
			if (response.Status == 0) {
		  		this.getProdutos()
		  		this.produto = new Produto()
		  		this.produto.Id = 0
			} else {
		  		console.log(response.Detalhes)
			}
  		});
	}

	editar(produto) : void {
		this.produto = new Produto()
    	this.produto.Id = produto.Id
    	this.produto.Nome = ''
    	this.produto.Preco = produto.Preco
    	this.produto.Categoria_Id = produto.Categoria_Id
    	this.produto.Categoria_Nome = produto.Categoria_Nome
	}

	remover(id): void {
		this.produtoService.deleteProduto(id)
			.subscribe(response => {
			if (response.Status == 0) {
		    	this.getProdutos();
		    	this.cancelar()
			}
			else {
				alert(response.Detalhes)
			}
		});
	}

	cancelar() : void {
		this.produto = new Produto()
		this.produto.Id = 0
	}

}
