import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http' //after done with the api
import { ListPage } from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

category : any;

  constructor(public navCtrl: NavController,public navParams: NavParams, public httpprovider: HttpProvider) {

  }
ionViewDidLoad(){
 	this.httpprovider.getCategory().subscribe(
data => {
	console.log(data)
	this.category = data; 
	console.log(this.category)
}, 

err => {
	console.log(err); 
},


()=>{
	console.log('everything is ok!')
}
 		)

 }


itemTapped(){
this.navCtrl.push(ListPage)
}
}
