import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppVersion } from '@ionic-native/app-version';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
})
export class AboutPage {

	// VARS
	public versionNumber;

	// CONSTRUCTOR
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private appVersion: AppVersion,
		private iab: InAppBrowser
	) {
	}

	// LIFECYCLE EVENTS
	ionViewDidEnter() {
		this.appVersion.getVersionNumber()
		.then(version => {
			this.versionNumber = version;
		})
		.catch(error => {
			console.log("ABOUTPAGE : IONVIEWDIDENTER - GETVERSIONNUMBER - ERROR : ", error);
		});
	}

	// CLICK EVENTS
	navigate(url: string) {
		this.iab.create(url);
	}

}
