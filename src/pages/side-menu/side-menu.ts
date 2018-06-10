import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-side-menu',
	templateUrl: 'side-menu.html',
})
export class SideMenuPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuPage');
	}

	// CLICK METHODS
	goToExplore() {
		this.navCtrl.push('ItemExplorePage', {}, {
			direction: 'forward'
		});
	}

	editProfile() {
		this.navCtrl.push('ProfileEditPage');
	}

	goToSearch() {
		this.navCtrl.push('ItemSearchPage');
	}

	goToMyItems() {
		this.navCtrl.push('MyGroupItemsPage');
	}

	goChatMain() {
		this.navCtrl.push('ChatMainPage');
	}

}
