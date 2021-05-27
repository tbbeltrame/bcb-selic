import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'selic',
  //   loadChildren: () => import('./selic/selic.module').then(m => m.SelicModule),
  // },
  {
    path: 'date-picker',
    loadChildren: () => import('./date-picker/date-picker.module').then(m => m.DatePickerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

