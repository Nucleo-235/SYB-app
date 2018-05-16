import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemSearchPage } from './item-search';

@NgModule({
	declarations: [
		ItemSearchPage,
	],
	imports: [
		IonicPageModule.forChild(ItemSearchPage),
	],
})
export class ItemSearchPageModule {}
