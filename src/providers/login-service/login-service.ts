import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceProvider {

	constructor(
		public http: Http,
		private storage: Storage
	) {
	}

	login() {
		return new Promise(resolve => {
			// TODO : IMPLEMENTS FACEBOOK LOGIN
			resolve(true);
		});
	}

	isFirstTime() {

		return new Promise(resolve => {

			this.storage.get('firstLogin')
			.then((value) => {

				if (value == false) {
					resolve(false);
				} else {
					this.storage.set('firstLogin', false);
					resolve(true);
				}
			});

		});
	}

}
