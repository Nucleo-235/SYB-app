import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-item-matched',
	templateUrl: 'item-matched.html',
})
export class ItemMatchedPage {

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
	goToChat() {
		this.viewCtrl.dismiss(true);
	}

	close() {
		this.viewCtrl.dismiss(false);
	}
}
