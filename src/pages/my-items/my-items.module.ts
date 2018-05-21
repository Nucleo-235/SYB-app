import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyItemsPage } from './my-items';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
		MyItemsPage,
	],
	imports: [
		IonicPageModule.forChild(MyItemsPage),
		ComponentsModule
	],
})
export class MyItemsPageModule {}
