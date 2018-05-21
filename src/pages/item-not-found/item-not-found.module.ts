import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemNotFoundPage } from './item-not-found';

@NgModule({
	declarations: [
		ItemNotFoundPage,
	],
	imports: [
		IonicPageModule.forChild(ItemNotFoundPage),
	],
})
export class ItemNotFoundPageModule {}
