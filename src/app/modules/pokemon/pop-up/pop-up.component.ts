import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  UpdateValues = (): void => {
    console.log(this.PokeForm);
  };

  ngOnInit(): void {}
}
