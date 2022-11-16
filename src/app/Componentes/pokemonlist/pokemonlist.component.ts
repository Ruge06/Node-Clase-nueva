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
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {this.pokemonService.getPokemon().subscribe(respuesta => {
    // this.pokemon=respuesta.results;
    // console.log(this.pokemon);
    this.getpokemonsdata();
  })
  }

  getpokemonsdata(){
    for (let i=1;i <=150; i++){
      this.pokemonService.getpokemon(i).subscribe(respuesta => {
        this.pokemonsData.push(respuesta);
      });
    }

    console.log(this.pokemonsData);
  }

}
