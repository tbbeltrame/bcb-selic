import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelicRoutingModule } from './selic-routing.module';
import { SelicComponent } from './selic.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SelicService } from './selic.service';

@NgModule({
  declarations: [SelicComponent],
  imports: [
    CommonModule,
    SelicRoutingModule,
    MatProgressSpinnerModule,
    TranslateModule,
  ],
  exports: [SelicComponent],
  providers: [SelicService],
})
export class SelicModule { }
