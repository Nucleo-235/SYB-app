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

	getChatList() {
		return new Promise(resolve => {
			let users = [
				{
					name: "João",
					lastMessage: "Oi quero trocar"
				}, {
					name: "Antônio",
					lastMessage: "Quer mesmo trocar?"
				}, {
					name: "Daniel",
					lastMessage: "Oi"
				}
			];

			resolve(users);

		});

	}

	getChatHistory() {
		return new Promise(resolve => {
			let messages = [
				{
					isMe: true,
					type: 'text',
					owner: 'Lucas Cordeiro',
					body: 'opa, gostei da sua cerveja.',
					timestamp: 'Mar 10, 2018 9:47am'
				},
				{
					isMe: false,
					avatar: 'assets/img/dummy/hieu.png',
					type: 'text',
					owner: 'Henrique Rangel',
					body: 'que bom, quer trocar com alguma sua?',
					timestamp: 'Mar 10, 2018 9:48am'
				},
				{
					isMe: true,
					type: 'text',
					owner: 'Lucas Cordeiro',
					body: 'quero, tenho uma stout aqui perfeita. Mora em SP?',
					timestamp: 'Mar 10, 2018 9:50am'
				}
			];

			// TODO : IMPLEMENTS WS USE TO GET DATA

			resolve(messages);

		});

	}

}
