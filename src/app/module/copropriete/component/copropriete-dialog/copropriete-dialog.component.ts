import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { CoproprieteListComponent } from '../copropriete-list/copropriete-list.component';

@Component({
  selector: 'app-copropriete-dialog',
  templateUrl: './copropriete-dialog.component.html',
  styleUrls: ['./copropriete-dialog.component.css']
})
export class CoproprieteDialogComponent implements OnInit {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<CoproprieteListComponent>) { }

  ngOnInit() {
  }

}
