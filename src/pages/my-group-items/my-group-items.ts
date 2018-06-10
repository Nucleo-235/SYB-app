import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-my-group-items',
	templateUrl: 'my-group-items.html',
})
export class MyGroupItemsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyGroupItemsPage');
	}

	goToMyItems() {
		this.navCtrl.push('MyItemsPage');
	}

}
