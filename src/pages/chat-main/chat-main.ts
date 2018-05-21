import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChatServiceProvider } from '../../providers/chat-service/chat-service';

@IonicPage()
@Component({
	selector: 'page-chat-main',
	templateUrl: 'chat-main.html',
})
export class ChatMainPage {

	// VARS
	users: any[] = [];

	// CONSTRUCTOR
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private chatService: ChatServiceProvider
	) {
		this.init();
	}

	init() {
		this.chatService.getChatList()
		.then((response: any[]) => {
			this.users = response;
		});
	}

	// LIFECYCLE EVENTS
	ionViewDidLoad() {
	}

	// CLICK EVENTS
	goToChatDetails(isNewMatch = false) {
		this.navCtrl.push('ChatDetailsPage', { isNewMatch: isNewMatch });
	}

	goToExplore() {
		this.navCtrl.push('ItemExplorePage', {}, {
			direction: 'back'
		});
	}

}
