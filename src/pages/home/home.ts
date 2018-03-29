import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private translate: TranslateService, public navCtrl: NavController) {

  }

  public changeLanguage(language)
  {
    this.translate.use(language);
  }

}
