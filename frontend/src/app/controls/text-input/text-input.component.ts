import { ControlTypeEnum } from './../../domain/control-type.enum';
import { Control } from '../../domain/control';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'drip-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent extends Control implements OnInit {

  @Input()
  control: FormControl = new FormControl('');
  @Input()
  name: string = '';

  constructor() {
    super(ControlTypeEnum.TEXT);
  }

  ngOnInit(): void {
  }

}
