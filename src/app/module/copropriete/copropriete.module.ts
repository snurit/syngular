import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CoproprieteListComponent } from './component/copropriete-list/copropriete-list.component';
import { CoproprieteComponent } from './component/copropriete/copropriete.component';

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
    CoproprieteRouting
  ],
  declarations: [CoproprieteListComponent, CoproprieteComponent]
})
export class CoproprieteModule { }
