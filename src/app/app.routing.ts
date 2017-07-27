import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },
    { path: 'home',  loadChildren: './app/app.module#AppModule' },
    { path: 'copropriete', loadChildren: './module/copropriete/copropriete.module#CoproprieteModule'}
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
