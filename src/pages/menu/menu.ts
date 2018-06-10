import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})
export class MenuPage {

	// VARS
	@ViewChild(Slides) slides: Slides;
	currentSlideIndex: number = 0;

	// CONSTRUCTOR
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController
	) {
	}

	// LIFECYCLE EVENTS
	ionViewDidLoad() {
	}

	slideChanged() {
		this.currentSlideIndex = this.slides.getActiveIndex();
	}

	// CLICK EVENTS
	goToExplore() {
		this.navCtrl.push('ItemExplorePage', {}, {
			direction: 'forward'
		});
	}

	goToSearch() {
		this.navCtrl.push('ItemSearchPage');
	}

	goToMyItems() {
		this.navCtrl.push('MyGroupItemsPage');
	}

	goToAbout() {
		this.navCtrl.push('AboutPage');
	}

	goToOfferItem() {
		this.navCtrl.push('ItemFormPage');
	}

	editProfile() {
		this.navCtrl.push('ProfileEditPage');
	}

}
