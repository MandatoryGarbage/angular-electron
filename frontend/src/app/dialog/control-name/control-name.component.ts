import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'drip-control-name',
  templateUrl: './control-name.component.html',
  styleUrls: ['./control-name.component.css']
})
export class ControlNameComponent implements OnInit {

  controlName: string = '';

  constructor(private dialogRef: MatDialogRef<ControlNameComponent>) { }

  ngOnInit(): void {
  }

  addControl(): void {
    this.dialogRef.close(this.controlName);
  }

}
