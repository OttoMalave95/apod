import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodComponent } from './components/apod/apod.component';

const routes: Routes = [
  { path: '', component: ApodComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
