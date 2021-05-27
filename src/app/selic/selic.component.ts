import { Component, Input, OnChanges} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Selic, SelicService } from '../selic/selic.service';
@Component({
  selector: 'app-selic',
  templateUrl: './selic.component.html',
  styleUrls: ['./selic.component.css']
})
export class SelicComponent implements OnChanges{

  @Input() startDate = new Date();
  @Input() endDate = new Date();
  @Input() ready: boolean;
  selicData: Selic[] = [];
  hidden: boolean = true;
  hiddenLoader: boolean = false;
  
  constructor(private selicService: SelicService, private translate: TranslateService) { }
  
  ngOnChanges(){
    if(this.ready){
      if (this.startDate <= this.endDate) {
        this.hidden = true;
        this.hiddenLoader = true;
        this.selicService.getSelic(this.startDate, this.endDate).subscribe((data) => {
          this.selicData = data;
          this.hiddenLoader = !data.length;
          this.hidden = !data.length;
        });
      } else {
        alert(this.translate.instant('warning.message-dates'));
        this.hiddenLoader = false;
        this.hidden = true;
      }
    }
  }

}
