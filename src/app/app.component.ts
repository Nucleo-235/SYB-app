import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {

	// VARS
	rootPage:any = 'LoginPage';
	@ViewChild(Nav) nav: Nav;

	// CONSTRUCTOR
	constructor(
		platform: Platform,
		statusBar: StatusBar,
		splashScreen: SplashScreen,
		keyboard: Keyboard,
		public menuCtrl: MenuController
	) {
		platform.ready()
		.then(() => {
			// OKAY, SO THE PLATFORM IS READY AND OUR PLUGINS ARE AVAILABLE.
			// HERE YOU CAN DO ANY HIGHER LEVEL NATIVE THINGS YOU MIGHT NEED.

			statusBar.styleDefault();
			splashScreen.hide();
			keyboard.disableScroll(true);
			keyboard.hideKeyboardAccessoryBar(true);
		});
	}

}
