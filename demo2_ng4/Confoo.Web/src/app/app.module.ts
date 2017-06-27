import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerListComponent } from './speakers/speaker-list/speaker-list.component';
import { SpeakerItemComponent } from './speakers/speaker-list/speaker-item/speaker-item.component';
import { SpeakerDetailComponent } from './speakers/speaker-detail/speaker-detail.component';
import { SessionsService } from "./sessions/sessions.service";

const appRoutes: Routes = [
  { path: '',  component: SessionListComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'speakers/:id', component: SpeakersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SessionListComponent,
    SpeakersComponent,
    SpeakerListComponent,
    SpeakerItemComponent,
    SpeakerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SessionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
