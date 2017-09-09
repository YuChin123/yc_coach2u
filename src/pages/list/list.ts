import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'//import yourself
import { SharePage } from '../share/share'

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

coach: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider ) {
  }

  ionViewDidLoad() {
    this.httpProvider.getCoach().subscribe(
data => {
	console.log(data)
	this.coach = data; 
	console.log(this.coach)
}, 

err => {
	console.log(err); 
},


()=>{
	console.log('everything is ok!')
}
 		)
  }

itemTapped(cch){
	this.navCtrl.push(SharePage, {cch:cch})
}
}
