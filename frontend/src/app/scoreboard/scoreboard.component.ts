import { ControlTypeEnum } from './../domain/control-type.enum';
import { ItemTypeEnum } from './../domain/item-type.enum';
import { TextInputComponent } from './../controls/text-input/text-input.component';
import { ControlNameComponent } from './../dialog/control-name/control-name.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Scoreboard } from '../domain/scoreboard';
import { ScoreboardControl } from '../domain/scoreboard-control';

@Component({
  selector: 'drip-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  scoreboard: Scoreboard = new Scoreboard();
  itemTypeEnum = ItemTypeEnum;
  controlTypeEnum = ControlTypeEnum;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
  }

  addTextControl(): void {
    const dialogRef = this.dialog.open(ControlNameComponent);
    dialogRef.afterClosed().subscribe((name) => {
      this.form.addControl(name, new FormControl(''));
      this.scoreboard.items.push(new ScoreboardControl(name, ControlTypeEnum.TEXT, new TextInputComponent()));
      console.log(this.form.value);
      console.log(this.scoreboard);
    });
  }
}
