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
import { SidebarCategoriesComponent } from './home/sidebar/sidebar-categories/sidebar-categories.component';
import { SidebarRoadmapComponent } from './home/sidebar/sidebar-roadmap/sidebar-roadmap.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoadMapComponent,
    FeedbackComponent,
    SidebarComponent,
    MainSuggestionsComponent,
    SidebarCategoriesComponent,
    SidebarRoadmapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
