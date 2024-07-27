import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//configuracion loca de la app
import localEsHN from '@angular/common/locales/es-HN'
import localFrCA from '@angular/common/locales/fr-CA'
import {registerLocaleData,} from '@angular/common'


registerLocaleData(localEsHN);
registerLocaleData(localFrCA);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:LOCALE_ID, useValue:'localEsHN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
