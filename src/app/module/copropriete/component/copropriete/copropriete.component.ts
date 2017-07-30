import { Component, OnInit, Input } from '@angular/core';

import { Copropriete } from '../../../../model/copropriete';

@Component({
  selector: 'app-copropriete',
  templateUrl: './copropriete.component.html',
  styleUrls: ['./copropriete.component.css'],
})
export class CoproprieteComponent implements OnInit {

   @Input() copropriete: Copropriete;

  constructor() { }

  ngOnInit() {
  }

}
