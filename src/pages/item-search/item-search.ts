import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-item-search',
	templateUrl: 'item-search.html',
})
export class ItemSearchPage {

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
	clean() {
		// TODO : CLEAN FORM
	}

	search() {
		this.navCtrl.setRoot('ItemExplorePage');
	}

}
