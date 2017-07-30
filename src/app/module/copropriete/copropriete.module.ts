import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { CoproprieteListComponent } from './component/copropriete-list/copropriete-list.component';
import { CoproprieteComponent } from './component/copropriete/copropriete.component';

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
    FormsModule
  ],
  declarations: [CoproprieteListComponent, CoproprieteComponent]
})
export class CoproprieteModule { }
