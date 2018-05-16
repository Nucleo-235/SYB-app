import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-item-not-found',
	templateUrl: 'item-not-found.html',
})
export class ItemNotFoundPage {

	// CONSTRUCTOR
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController
	) {
	}

	// LIFECYCLE EVENTS
	ionViewDidLoad() {
	}

	// CLICK EVENTS
	offerNewItem() {
		this.viewCtrl.dismiss();
		this.navCtrl.push('ItemFormPage');
	}

	close() {
		this.viewCtrl.dismiss();
	}

}
