import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { OfficeVideoComponent } from './components/office-video/office-video.component';
import { AffiliationProcessComponent } from './components/affiliation-process/affiliation-process.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FrontPageComponent,
    OfficeVideoComponent,
    AffiliationProcessComponent,
    TestimonialsComponent,
    FrequentQuestionsComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
