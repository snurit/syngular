import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
// import { AppRouting } from './app.routing';

// Components
import { AppComponent } from './app.component';

// Modules
import { CoproprieteModule } from './module/copropriete/copropriete.module';

// Routing
export const appRoutes: Routes = [
    { path: 'copropriete', loadChildren: './module/copropriete/copropriete.module#CoproprieteModule'},
    { path: '', redirectTo: '/copropriete', pathMatch: 'full'  }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoproprieteModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
