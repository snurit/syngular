import { RouterModule, Routes } from '@angular/router';
import { CoproprieteListComponent } from './component/copropriete-list/copropriete-list.component';

const coproprieteRoutes: Routes = [
  { path: 'copropriete',
    children: [
      { path: '', component: CoproprieteListComponent },
      // { path: ':id', component: User }
    ]
  }
];

export const CoproprieteRouting = RouterModule.forChild(coproprieteRoutes);
