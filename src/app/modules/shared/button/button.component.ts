import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() enableButton: boolean = false;

  @Output() buttonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.buttonClick.emit();
  }
}
