import { Component, Input } from '@angular/core';
import { Nav } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@Component({
	selector: 'page-side-menu',
	templateUrl: 'side-menu.html',
})
export class SideMenuPage {

	@Input("nav")nav: Nav;
	@Input("menuCtrl")menuCtrl: MenuController;

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuPage');
	}

	// CLICK METHODS
	goToExplore() {
		this.nav.push('ItemExplorePage');
		this.menuCtrl.close();
	}

	editProfile() {
		this.nav.push('ProfileEditPage');
		this.menuCtrl.close();
	}

	goToSearch() {
		this.nav.push('ItemSearchPage');
		this.menuCtrl.close();
	}

	goToMyItems() {
		this.nav.push('MyGroupItemsPage');
		this.menuCtrl.close();
	}

	goChatMain() {
		this.nav.push('ChatMainPage');
		this.menuCtrl.close();
	}

}
