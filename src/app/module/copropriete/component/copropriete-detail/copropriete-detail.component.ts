import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Copropriete } from '../../../../model/copropriete';

@Component({
  selector: 'app-copropriete',
  templateUrl: './copropriete-detail.component.html',
  styleUrls: ['./copropriete-detail.component.css'],
})
export class CoproprieteDetailComponent implements OnInit {

  @Input() copropriete: Copropriete;
  @Output() hideCoproprieteDetailEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  hideCoproprieteDetailComponent() {
    this.hideCoproprieteDetailEmitter.emit(true);
  }

  ngOnInit() {
  }

}
