import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-terms',
	templateUrl: 'terms.html',
})
export class TermsPage {

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
	agree() {
		this.navCtrl.setRoot('ItemExplorePage');
	}

	cancel() {
		this.navCtrl.setRoot("LoginPage");
	}

}
