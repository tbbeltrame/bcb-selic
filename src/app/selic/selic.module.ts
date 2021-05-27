import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelicRoutingModule } from './selic-routing.module';
import { SelicComponent } from './selic.component';

@NgModule({
  declarations: [SelicComponent],
  imports: [
    CommonModule,
    SelicRoutingModule
  ]
})
export class SelicModule { }
