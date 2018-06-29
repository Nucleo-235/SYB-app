import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';

import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';

import { IonicStorageModule } from '@ionic/storage';

import { AppVersion } from '@ionic-native/app-version';
import { Keyboard } from '@ionic-native/keyboard';
import { ImagePicker } from '@ionic-native/image-picker';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ItemServiceProvider } from '../providers/item-service/item-service';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import { SideMenuPage } from '../pages/side-menu/side-menu';

@NgModule({
	declarations: [
		MyApp,
		SideMenuPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			mode: 'ios', // TODO : to have same iOS look for all platforms
			backButtonText: '',
		}),

		IonicStorageModule.forRoot(),

		DirectivesModule,
		ComponentsModule,
	],
	bootstrap: [
		IonicApp
	],
	entryComponents: [
		MyApp
	],
	providers: [
		AppVersion,
		Keyboard,
		ImagePicker,
		InAppBrowser,
		SplashScreen,
		StatusBar,

		ItemServiceProvider,
		LoginServiceProvider,

		{provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatServiceProvider,
	]
})
export class AppModule {}
