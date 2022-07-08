import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  constructor(private pokeService: PokeService) {}

  enablePopup: boolean = false;

  pokemonData!: any;

  popupEnabler() {
    this.enablePopup = true;
  }

  tableColumns: string[] = ['Name', 'Level', 'Type', 'Created', 'Updated','Edit','Delete'];

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      console.log(data.data);
      this.pokemonData = data.data
    });
  }
}
