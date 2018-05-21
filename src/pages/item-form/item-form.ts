import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { ImagePicker } from '@ionic-native/image-picker';

import { ItemServiceProvider } from '../../providers/item-service/item-service';

@IonicPage()
@Component({
	selector: 'page-item-form',
	templateUrl: 'item-form.html',
})
export class ItemFormPage {

	// VARS
	profileImages: any[];

	beerStyles: any[] = [];
	beerTypes: any[] = [];
	beerOrigins: any[] = [];

	// CONSTRUCTOR
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public imagePicker: ImagePicker,
		public app: App,
		private itemService: ItemServiceProvider
	) {
		this.init();
	}

	init() {
		this.profileImages = [
			'assets/img/dummy/cerva01.png',
			'assets/img/dummy/cerva02.png',
			'assets/img/dummy/cerva03.png',
			'assets/img/dummy/cerva04.png',
			'assets/img/dummy/cerva05.png'
		];

		this.itemService.getBeerStyles()
		.then((response: any[]) => {
			this.beerStyles = response;
		});

		this.itemService.getBeerTypes()
		.then((response: any[]) => {
			this.beerTypes = response;
		});

		this.itemService.getBeerOrigins()
		.then((response: any[]) => {
			this.beerOrigins = response;
		});
	}

	// LIFECYCLE EVENTS
	ionViewDidLoad() {
	}

	// CLICK EVENTS
	save() {
		// TODO : IMPLEMENTS SAVE
		this.viewCtrl.dismiss();
	}

	openPhotoPicker(index) {
		this.imagePicker.getPictures({ maximumImagesCount: 1 })
		.then((results) => {
			this.profileImages[index] = results[0];
		}, (err) => {

		});
	}

	removeImage(index) {
		this.profileImages[index] = '';
	}

}
