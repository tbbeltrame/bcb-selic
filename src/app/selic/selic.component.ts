import { Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Selic, SelicService } from '../selic/selic.service';
@Component({
  selector: 'app-selic',
  templateUrl: './selic.component.html',
  styleUrls: ['./selic.component.css']
})
export class SelicComponent implements OnChanges, DoCheck{

  @Input() startDate = new Date();
  @Input() endDate = new Date();

  /**@Input()
  set a(a:string) {
    this._a = a;
    console.log('a updated');
  } */
  selicData: Selic[] = [];
  hidden: boolean = true;
  hiddenLoader: boolean = false;
  
  constructor(private selicService: SelicService, private translate: TranslateService) { }

  ngOnChanges(changes: SimpleChanges) {
    if('endDate' in changes)
    {
      if(!changes.endDate.isFirstChange())
      {
        this.RequestSelic();
      }
    }
    else{
      if('startDate' in changes && this.selicData.length > 0)
      {
          this.RequestSelic();
      }
    }
  }

  ngDoCheck() {}

  RequestSelic(){
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
