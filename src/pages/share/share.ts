import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

coachShare : any; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.coachShare = navParams.get('cch');
  console.log(this.coachShare); 
  }



}
