import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PokedexComponent],
  imports: [CommonModule, PokemonRoutingModule, SharedModule, MatTableModule],
})
export class PokemonModule {}
