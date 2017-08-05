import { Component, OnInit, NgModule } from '@angular/core';
import { Copropriete } from '../../../../model/copropriete';
import { CoproprieteService } from '../../copropriete.service';
import { CoproprieteDetailComponent } from '../copropriete-detail/copropriete-detail.component';
import { MdDialog } from '@angular/material';
import { CoproprieteDialogComponent } from '../copropriete-dialog/copropriete-dialog.component';

@Component({
  selector: 'app-copropriete-list',
  templateUrl: './copropriete-list.component.html',
  styleUrls: ['./copropriete-list.component.css'],
  providers: [CoproprieteService]
})
export class CoproprieteListComponent implements OnInit {

  coproprietes: Copropriete[];
  selectedCopropriete: Copropriete;

  constructor(private coproprieteService: CoproprieteService, public dialog: MdDialog) { }

  ngOnInit() {
    this.getCoproprietes();
  }

  getCoproprietes(): void {
    this.coproprietes = this.coproprieteService.getCoproprietes();
  }

  onShowDetail(copro: Copropriete): void {
    this.selectedCopropriete = copro;
  }

  onDelete(copro_id: number): void {
    let dialogRef = this.dialog.open(CoproprieteDialogComponent);
    dialogRef.componentInstance.title = 'Supprimer une copropriete';
    dialogRef.componentInstance.message = 'Etes-vous sûr ?';
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedCopropriete = null;
    this.coproprietes = this.coproprieteService.deleteCopropriete(copro_id);
      }
    });
  }

  hideCoproprieteDetail(event) {
    this.selectedCopropriete = null;
  }
}
