import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {
  pokemon = {};
  pokemonsData:any[]=[];
  busqueda: string="";
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getpokemonsdata();
    
  }

  getpokemonsdata(){
    this.pokemonsData = [];
    this.pokemonService.getPokemon().subscribe(respuesta => {
      for (let i=1;i <=150; i++){
        this.pokemonService.getpokemon(i).subscribe((respuesta:any) => {
          if(this.busqueda ===""|| respuesta.name.includes(this.busqueda)){
            this.pokemonsData.push(respuesta);
          }
        });
      }
  
      
    })
    console.log(this.pokemonsData);
  }

  buscarPokemons(){
    this.getpokemonsdata();
  }

}
