import { Directive } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonStyler]',
})
export class ButtonStylerDirective {
  @HostBinding('style.backgroundColor') color!: string;
  @HostListener('mouseenter') setMouseEnter() {
    this.color = 'yellow';
  }
  @HostListener('mouseleave') setMouseLeave() {
    this.color = 'green';
  }

  constructor() {}
  ngOnInit() {
    this.color = 'green';
  }
}
