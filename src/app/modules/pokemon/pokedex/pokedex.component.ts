import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { IPokemonData } from '../models/interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  constructor(private pokeService: PokeService) {}

  enablePopup: boolean = false;

  dataTOEdit!: any;

  pokemonData!: any;

  tableColumns: string[] = [
    'Name',
    'Level',
    'Type',
    'Created',
    'Updated',
    'Edit',
    'Delete',
  ];

  getPokemonData() {
    this.pokeService.getPokemons().subscribe((data) => {
      console.log(data.data);
      this.pokemonData = data.data;
    });
  }
  ngOnInit(): void {
    this.getPokemonData();
  }

  createPokemon(pokemonData: IPokemonData) {
    pokemonData = {
      ...pokemonData,
      isSelected: true,
    };
    this.pokeService.createPokemon(pokemonData).subscribe((response) => {
      console.log(response);
    });
    this.getPokemonData();
  }

  UpdatePokemons(value: any) {
    this.dataTOEdit = value;
    this.createPokemon(this.dataTOEdit);
    this.enablePopup = false;
  }
  onAdding() {
    this.enablePopup = true;
  }

  deletepokemon(id: string) {
    this.pokeService.deletePokemon(id).subscribe((res) => {
      console.log(res);
    });
    this.getPokemonData();
  }

  updatePokemonById(id: string) {
    for (let entry of this.pokemonData){
      if (entry.id === id){
        console.log(entry)
        this.enablePopup=true
      }

    } ;
    this.enablePopup = true;


  }

}
