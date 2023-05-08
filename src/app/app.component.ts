import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faCircle, faSquare, faX } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle,faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'smx-web-app';

  constructor(translate: TranslateService, library: FaIconLibrary) {
    // this.customIconService.init();

    // translate.addLangs(['en']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang() as string;
    translate.use(browserLang.match(/en/) ? 'en' : browserLang);

    library.addIcons(faBars, faCircle,faSquare, faX, farCircle,farSquare
      ,faStackOverflow,faGithub,faMedium);
  }
}
