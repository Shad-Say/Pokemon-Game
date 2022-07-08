import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { ButtonStylerDirective } from './directives/button-styler.directive';
import { GetTimePipe } from './CustomPipes/pipe';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ButtonStylerDirective,
    GetTimePipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    InputComponent,
    ButtonComponent,
    ButtonStylerDirective,
    GetTimePipe,
  ],
})
export class SharedModule {}
