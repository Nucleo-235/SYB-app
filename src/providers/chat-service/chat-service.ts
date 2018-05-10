import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatServiceProvider {

	// CONSTRUCTOR
	constructor(
		public http: Http
	) {
	}

	// METHODS
	sendMessage(message) {
		return new Promise(resolve => {
			// TODO : CREATE REAL METHOD
			resolve(true);
		});
	}

	getChatHistory() {
		return new Promise(resolve => {
			let messages = [
				{
					isMe: true,
					type: 'text',
					owner: 'Alexandre Cordeiro',
					body: 'Olá',
					timestamp: 'Mar 10, 2018 9:47am'
				},
				{
					isMe: false,
					avatar: 'assets/img/dummy/hieu.png',
					type: 'text',
					owner: 'Henrique Rangel',
					body: 'Olá tudo bom?',
					timestamp: 'Mar 10, 2018 9:48am'
				},
				{
					isMe: true,
					type: 'text',
					owner: 'Alexandre Cordeiro',
					body: 'Gostei da sua breja',
					timestamp: 'Mar 10, 2018 9:50am'
				},
				{
					isMe: false,
					avatar: 'assets/img/dummy/hieu.png',
					type: 'text',
					owner: 'Henrique Rangel',
					body: 'E eu da sua Pale Ale',
					timestamp: 'Mar 10, 2018 9:52am'
				},
				{
					isMe: true,
					type: 'text',
					owner: 'Alexandre Cordeiro',
					body: 'Vamos trocar?',
					timestamp: 'Mar 10, 2018 9:53am'
				},
				{
					isMe: false,
					avatar: 'assets/img/dummy/hieu.png',
					type: 'text',
					owner: 'Henrique Rangel',
					body: 'Vamos sim...',
					timestamp: 'Mar 10, 2018 9:53am'
				}
			];

			// TODO : IMPLEMENTS WS USE TO GET DATA

			resolve(messages);

		});

	}

}
