import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonStyler]',
})
export class ButtonStylerDirective {
  @HostBinding('style.backgroundColor') color!: string;
  @HostListener('mouseenter') setMouseEnter() {
    this.color = 'yellow';
  }
  @HostListener('mouseleave') setMouseLeave() {
    this.color = 'red';
  }
  constructor() {}
  ngOnInit() {
    this.color = 'red';
  }
}
