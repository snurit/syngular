import { Component, OnInit } from '@angular/core';
import { Copropriete } from '../../../../model/copropriete';
import { CoproprieteService } from '../../copropriete.service';

@Component({
  selector: 'app-copropriete-list',
  templateUrl: './copropriete-list.component.html',
  styleUrls: ['./copropriete-list.component.css'],
  providers: [CoproprieteService]
})
export class CoproprieteListComponent implements OnInit {

  coproprietes: Copropriete[];

  constructor(private coproprieteService: CoproprieteService) { }

  ngOnInit() {
    this.getCoproprietes();
  }

  getCoproprietes(): void {
    this.coproprietes = this.coproprieteService.getCoproprietes();
  }

}
