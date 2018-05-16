import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-my-items',
	templateUrl: 'my-items.html',
})
export class MyItemsPage {

	// CONSTRUCTOR
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams
	) {
	}

	// LIFECYCLE EVENTS
	ionViewDidLoad() {
	}

	// CLICK EVENTS
	goToItemDetails() {
		this.navCtrl.push('ItemDetailsPage');
	}

	edit() {
		this.navCtrl.push('ItemFormPage');
	}

	delete() {
		// TODO : DELETE ITEM
	}

}
