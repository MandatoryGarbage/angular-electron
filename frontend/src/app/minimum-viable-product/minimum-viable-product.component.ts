import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
var XMLWriter = require('xml-writer');
@Component({
  selector: 'app-minimum-viable-product',
  templateUrl: './minimum-viable-product.component.html',
  styleUrls: ['./minimum-viable-product.component.css'],
})
export class MinimumViableProductComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      player1Name: ['WindGodDude'],
      player1Score: [3],
      player2Name: ['DrunkSuika'],
      player2Score: [2],
      match: ['Grand Finals'],
    });
  }

  public generateXMLFile(): void {
    let xw = new XMLWriter(true);
    xw.startDocument();
    xw.startElement('player1Name');
    xw.text(this.form.get('player1Name')!.value);
    xw.endElement();
    xw.startElement('player1Score');
    xw.text(this.form.get('player1Score')!.value);
    xw.endElement();
    xw.startElement('player2Name');
    xw.text(this.form.get('player2Name')!.value);
    xw.endElement();
    xw.startElement('player2Score');
    xw.text(this.form.get('player2Score')!.value);
    xw.endElement();
    xw.startElement('match');
    xw.text(this.form.get('match')!.value);
    xw.endElement();

    console.log(xw.toString());
  }
}
