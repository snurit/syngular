import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoproprieteListComponent } from './component/copropriete-list/copropriete-list.component';
import { CoproprieteDetailComponent } from './component/copropriete-detail/copropriete-detail.component';
import { CoproprieteDialogComponent } from './component/copropriete-dialog/copropriete-dialog.component';

// import mock
import { COPROPRIETES } from '../../mock/mock-coproprietes';

// import { CoproprieteRouting } from './copropriete.routing';

// Routing
const coproprieteRoutes: Routes = [
  { path: 'copropriete',
    children: [
      { path: '', component: CoproprieteListComponent },
      // { path: ':id', component: User }
    ]
  }
];

export const CoproprieteRouting = RouterModule.forChild(coproprieteRoutes);

@NgModule({
  imports: [
    CoproprieteRouting,
    BrowserModule,
    FormsModule,
    MaterialModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  declarations: [CoproprieteListComponent, CoproprieteDetailComponent, CoproprieteDialogComponent],
  entryComponents: [ CoproprieteDialogComponent ]
})
export class CoproprieteModule { }
