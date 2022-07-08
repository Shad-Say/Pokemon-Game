import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MatTableModule } from '@angular/material/table';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokedexComponent, PopUpComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
})
export class PokemonModule {}
