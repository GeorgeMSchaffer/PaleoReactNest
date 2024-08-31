import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IntervalsModule } from './modules/intervals/intervals.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IntervalsService } from './modules/intervals/intervals.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntervalsModule,
    HttpClient,
  ],
  providers: [{
    provide: HttpClient,
  },{
    provide: IntervalsService,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
