import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Slides, ViewController, ModalController, ActionSheetController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-item-details',
		templateUrl: 'item-details.html',
})
export class ItemDetailsPage {

	// VARS
	@ViewChild(Slides) slides: Slides;

	currentSlideIndex: number = 0;
	slideImages: any[] = [
		{ url: 'assets/img/dummy/cerva01.png' },
		{ url: 'assets/img/dummy/cerva02.png' },
		{ url: 'assets/img/dummy/cerva03.png' },
		{ url: 'assets/img/dummy/cerva04.png' },
		{ url: 'assets/img/dummy/cerva05.png' },
		{ url: 'assets/img/dummy/cerva06.png' }
	];

	isMe: boolean = true;

	// CONSTRUCTOR
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public statusBar: StatusBar,
		public platform: Platform,
		public actionSheetCtrl: ActionSheetController,
		public app: App
	) {
		this.isMe = (typeof this.navParams.get('isMe') == 'undefined') ? true : this.navParams.get('isMe');
		this.init();
	}

	init() {
		this.platform.ready()
		.then(() => {
			this.statusBar.hide();
		});
	}

	// LIFECYCLE EVENTS
	ionViewDidLoad() {
	}

	slideChanged() {
		this.currentSlideIndex = this.slides.getActiveIndex();
	}

	// CLICK EVENTS
	close() {
		this.statusBar.show();
		this.viewCtrl.dismiss();
	}

	disliked() {
		this.statusBar.show();
		this.viewCtrl.dismiss();
	}

	liked() {
		this.statusBar.show();
		this.viewCtrl.dismiss();
	}

	doComplaint() {
		let complaintActionSheet = this.actionSheetCtrl.create({
			title: 'Deseja denunciar esta peça?',
			buttons: [
				{
					text: 'Não é uma peça',
					handler: () => {
						console.log('Option 1 clicked');
					}
				}, {
					text: 'É ofensivo',
					handler: () => {
						console.log('Option 2 clicked');
					}
				}, {
					text: 'É spam',
					handler: () => {
						console.log('Option 3 clicked');
					}
				}, {
					text: 'Outro motivo',
					handler: () => {
						console.log('Option 4 clicked');
					}
				}, {
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});

		complaintActionSheet.present();
	}



}
