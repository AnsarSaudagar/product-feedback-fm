import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { MainSuggestionsComponent } from './home/main-suggestions/main-suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoadMapComponent,
    FeedbackComponent,
    SidebarComponent,
    MainSuggestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
