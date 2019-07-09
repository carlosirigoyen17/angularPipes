import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pipes
import { CustomuppercasePipe } from './pipes/customuppercase.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { PasswordhidePipe } from './pipes/passwordhide.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomuppercasePipe,
    DomsafePipe,
    PasswordhidePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
