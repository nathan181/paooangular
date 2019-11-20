import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
 
  categorias = [
    {id: 1, titulo: 'Romance'},
    {id: 2, titulo: 'Terror'},
    {id: 3, titulo: 'Tecnologia'}
  ]

  constructor() {
    
    
   }

  ngOnInit() {
   
  }
  adicionarCategoria (): void{
    console.log("testando a adiconarCategoria");
    }s

}
 
