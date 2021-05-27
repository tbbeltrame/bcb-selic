import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'bcb-selic';

  constructor(@Inject(LOCALE_ID) private localeId: string, private translate: TranslateService) {
    translate.addLangs(['en-US', 'pt-BR']);
    translate.setDefaultLang(this.localeId);
  }

  ngOnInit() {
    this.translate.use(this.localeId);
  }
}
