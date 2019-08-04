import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HookComponent } from './hook/hook.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { IceCreamCreamComponent } from './ice-cream-cream/ice-cream-cream.component';

@NgModule({
  declarations: [
    AppComponent,
    HookComponent,
    IceCreamComponent,
    IceCreamCreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
