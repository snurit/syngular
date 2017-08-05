import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Copropriete } from '../../../../model/copropriete';
import { CoproprieteService } from '../../copropriete.service';


@Component({
  selector: 'app-copropriete',
  templateUrl: './copropriete-detail.component.html',
  styleUrls: ['./copropriete-detail.component.css'],
})
export class CoproprieteDetailComponent implements OnInit {

  @Input() copropriete: Copropriete;
  @Output() hideCoproprieteDetailEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private coproprieteService: CoproprieteService) { }

  hideCoproprieteDetailComponent() {
    this.hideCoproprieteDetailEmitter.emit(true);
  }

  updateCoproprieteDetail(copro: Copropriete) {
    this.coproprieteService.updateCopropriete(copro);
  }

  ngOnInit() {
  }

}
