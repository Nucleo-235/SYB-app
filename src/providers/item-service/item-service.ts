import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemServiceProvider {

	// CONSTRUCTOR
	constructor(
		public http: Http
	) {
	}

	// METHODS
	getItems() {
		return new Promise(resolve => {
			let data = [
				{
					id: 1,
					title: 'Stone Cacau IPA',
					content: '300ml',
					alcohol: '6,1%',
					tags: '#tag1 #tag2 #tag3 #tag4',
					profile_image_url: 'assets/img/dummy/cerva01.png'
				},
				{
					id: 2,
					title: 'Bodebrown Cacau IPA',
					content: '300ml',
					alcohol: '6,2%',
					tags: '#tag1 #tag2 #tag3 #tag4',
					profile_image_url: 'assets/img/dummy/cerva02.png'
				},
				{
					id: 3,
					title: 'X Cacau IPA',
					content: '300ml',
					alcohol: '6,3%',
					tags: '#tag1 #tag2 #tag3 #tag4',
					profile_image_url: 'assets/img/dummy/cerva03.png'
				},
				{
					id: 4,
					title: 'Stone No-Cacau IPA',
					content: '300ml',
					alcohol: '6,4%',
					tags: '#tag1 #tag2 #tag3 #tag4',
					profile_image_url: 'assets/img/dummy/cerva04.png'
				},
				{
					id: 5,
					title: 'Bodebrown No-Cacau IPA',
					content: '300ml',
					alcohol: '6,5%',
					tags: '#tag1 #tag2 #tag3 #tag4',
					profile_image_url: 'assets/img/dummy/cerva05.png'
				},
				{
					id: 6,
					title: 'X No-Cacau IPA',
					content: '300ml',
					alcohol: '6,6%',
					tags: '#tag1 #tag2 #tag3 #tag4',
					profile_image_url: 'assets/img/dummy/cerva06.png'
				}
			];

			// TODO : IMPLEMENTS WS USE TO GET DATA

			resolve(data);
		});
	}

}
