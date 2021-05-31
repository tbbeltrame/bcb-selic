import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DateRange } from '../date-picker/date-picker.component';
import { Selic, SelicService } from '../selic/selic.service';
@Component({
  selector: 'app-selic',
  templateUrl: './selic.component.html',
  styleUrls: ['./selic.component.css'],
})
export class SelicComponent {
  selicData: Selic[] = [];
  hidden: boolean = true;
  hiddenLoader: boolean = false;

  constructor(private selicService: SelicService, private translate: TranslateService) {}

  onDateRangeChange(dateRange: DateRange) {
    if (dateRange.from && dateRange.to) {
      this.requestSelic(dateRange);
    }
  }

  requestSelic(dateRange: DateRange) {
    this.hidden = true;
    this.hiddenLoader = true;
    this.selicService.getSelic(dateRange.from, dateRange.to).subscribe((data) => {
      this.selicData = data;
      this.hiddenLoader = !data.length;
      this.hidden = !data.length;
    });
  }
}
