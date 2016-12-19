import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import AV from 'leancloud-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    const appId = 'WkURYpYEbcXnM1HDBg0aVjjJ-gzGzoHsz';
    const appKey = '8Rpc4xvehIiiSXAa5H4el3pU';
    AV.init({ appId, appKey });

    const TestObject = AV.Object.extend('TestObject');
    const testObject = new TestObject();
    testObject.save({ Cowboy: 'He is a man of few words.' });
  }

}
