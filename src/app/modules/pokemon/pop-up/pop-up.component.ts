import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  PokeForm = this.fb.group({
    name: ['', [Validators.required]],
    level: ['', Validators.required],
    type: ['', Validators.required],
  });

  @Output() updateValues = new EventEmitter();

  UpdateValues = (form: any): void => {
    
    this.updateValues.emit(form.value);

    console.log(form.value)

  };

  ngOnInit(): void {}
}
