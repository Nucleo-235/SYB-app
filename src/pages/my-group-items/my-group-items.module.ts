import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGroupItemsPage } from './my-group-items';

@NgModule({
  declarations: [
    MyGroupItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGroupItemsPage),
  ],
})
export class MyGroupItemsPageModule {}
